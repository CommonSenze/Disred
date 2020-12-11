import React, { useState } from "react";
import {
    Box,
    TextField,
    Divider,
    Checkbox,
    FormControlLabel,
    Typography,
    Tooltip,
    Modal,
    Paper,
    Backdrop,
    CircularProgress,
} from "@material-ui/core";
import RichTextEditor from "../../../utils/TextEditor/RichTextEditor";
import MainButton from "../../../utils/Buttons/MainButton";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ForumContext } from "../../../pages/forums/forums";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../utils/Redux/redux";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            padding: "10px",
            textAlign: "center",
            width: "50%",
        },
        paperheader: {
            backgroundColor: "rgba(255, 44, 44, 0.5)",
            padding: "5px",
            textAlign: "start",
            fontWeight: "bold",
            fontSize: 18,
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
        },
    })
);

function ThreadForm(props) {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const [notified, setNotified] = useState(true);
    const [locked, setLocked] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [errors, setErrors] = useState({ exist: false });
    const [loading, setLoading] = useState(false);

    const context = React.useContext(ForumContext);
    const classes = useStyles();
    const { profile } = props;
    var fileInput = null;
    const subcategoryURI = context.subcategory.title.replaceAll(" ", "-");

    const handleModalClose = () => {
        setErrors({ exist: false });
    };

    const handleModalOpen = (reason) => {
        setErrors({
            ...reason,
            exist: true,
        });
    };

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "imageUpload");
        setLoading(true);
        const res = await fetch("https://api.cloudinary.com/v1_1/commonsenze/image/upload", {
            method: "POST",
            body: data,
        });

        const file = await res.json();
        console.log(file)

        setImage(file.secure_url);
        setLoading(false);
    };

    const handleSubmit = () => {
        setLoading(true);
        var obj = {};
        if (!title) {
            obj = {
                ...obj,
                title: "Please enter a valid title.",
            };
        }
        if (!text) {
            obj = {
                ...obj,
                text: "Please enter a valid body field.",
            };
        }
        if (Object.keys(obj).length !== 0) {
            handleModalOpen(obj);
            return;
        }
        Axios.post("http://localhost:8080/api/forums/upload/thread", {
            subcategoryId: context.subcategory.uniqueId,
            creator: profile.uniqueId,
            imageURL: image,
            title: title,
            replies: [],
            text: text,
            locked: locked,
            sticky: sticky,
        }).then((response) => {
            console.log(response);
            setLoading(false);
            history.push("/forums/"+subcategoryURI+"/"+response.data.title.replaceAll(" ","-").replaceAll("!", ""), {
                subcategory: context.subcategory,
                category: context.category,
                thread: response.data,
            })
        });
    };
    if (!profile){
        history.push("/login", {
            link: "/forums/"+subcategoryURI,
            backPage: context.subcategory.title,
            state: {
                subcategory: context.subcategory,
                category: context.category,
            }
        })
        return <></>;
    }
    return (
        <>
            <Box width={1} marginBottom="15px">
                <TextField
                    fullWidth
                    placeholder="Title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    variant="outlined"
                    InputProps={{
                        style: {
                            fontWeight: "bold",
                            fontSize: 25,
                            letterSpacing: "0.8px",
                        },
                    }}
                />
            </Box>
            <Box className="mb-3">
                {image ? <img alt="tester" width="400px" src={image} /> : <></>}
            </Box>
            <Box width={1} color="black" marginBottom="15px">
                <RichTextEditor value={text} onChange={setText} />
            </Box>
            <Box padding="10px 0" display="flex" justifyContent="center">
                <MainButton onClick={handleSubmit}>Post</MainButton>
                <Box marginLeft="30px"></Box>
                <input
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={input => fileInput = input}
                    id="raised-button-file"
                    type="file"
                    onChange={uploadImage}
                />
                <label htmlFor="raised-button-file" className="m-0">
                    <MainButton onClick={() => {fileInput.click()}}>Upload Header</MainButton>
                </label>
            </Box>
            <Divider />
            <Box>
                <Typography component="span">Options:</Typography>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={notified}
                            onChange={(event) => {
                                setNotified(event.target.checked);
                            }}
                            name="notified"
                            size="small"
                            color="primary"
                        />
                    }
                    label={
                        <Tooltip title="Recieve notifications when people comment on this thread.">
                            <Box fontSize="12px">Watch this thread...</Box>
                        </Tooltip>
                    }
                    style={{ margin: 0 }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={!locked}
                            onChange={(event) => {
                                setLocked(!event.target.checked);
                            }}
                            name="locked"
                            size="small"
                            color="primary"
                        />
                    }
                    label={
                        <Tooltip title="Allow people to reply to your thread.">
                            <Box fontSize="12px">Open Thread</Box>
                        </Tooltip>
                    }
                    style={{ margin: 0 }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={sticky}
                            onChange={(event) => {
                                setSticky(event.target.checked);
                            }}
                            name="sticky"
                            size="small"
                            color="primary"
                        />
                    }
                    label={
                        <Tooltip title="Pin thread to the top of the forum.">
                            <Box fontSize="12px">Sticky Thread</Box>
                        </Tooltip>
                    }
                    style={{ margin: 0 }}
                />
            </Box>
            <Modal
                open={errors.exist}
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Paper className={classes.paper}>
                    <Paper className={classes.paperheader}>Errors</Paper>
                    <Box
                        paddingTop="15px"
                        display="flex"
                        justifyContent="center"
                    >
                        <Box paddingTop="10px" marginRight="10px">
                            {Object.keys(errors).map((error) => {
                                if (error === "exist") return <React.Fragment key={error}></React.Fragment>;
                                return (
                                    <Box key={error}>
                                        <Box
                                            component="span"
                                            style={{
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            {error}
                                        </Box>
                                        : {errors[error]}
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                </Paper>
            </Modal>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}

export default connect(mapStateToProps, null)(ThreadForm);
