import {
    Box,
    Divider,
    TextField,
    Backdrop,
    CircularProgress,
    Collapse,
    FormControl,
} from "@material-ui/core";
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import RichTextEditor from "../../../utils/TextEditor/RichTextEditor";
import HomeButton from "../Buttons/HomeButton";

const styles = (theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
    resize: {
        fontSize: 50,
    },
});

function HomeForm(props) {
    const [creatingPost, setCreatingPost] = useState(false);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const { classes } = props;

    const toggleCreatePost = () => {
        let open = !creatingPost;
        if (!open) {
            setText("");
            setImage("");
            setTitle("");
        }
        setCreatingPost(open);
    };

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "");
        setLoading(true);
        const res = await fetch("", {
            method: "POST",
            body: data,
        });

        const file = await res.json();

        setImage(file.secure_url);
        setLoading(false);
    };

    const handleTitleChange = (e) => {
        if (e.target.value.length <= 20) {
            setTitle(e.target.value);
        }
    };

    const handleTextChange = (data) => {
        setText(data);
    };

    return (
        <>
            <Collapse
                in={creatingPost}
                timeout={1500}
                unmountOnExit
                className="mb-2"
            >
                <form>
                    <FormControl variant="outlined">
                        <TextField
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            value={title}
                            onChange={handleTitleChange}
                            inputProps={{ style: { fontWeight: "bold" } }}
                            InputLabelProps={{ style: { fontWeight: "bold" } }}
                        />
                    </FormControl>
                    <Box className="mt-3">
                        {image ? (
                            <img alt="tester" width="100%" src={image} />
                        ) : (
                            <></>
                        )}
                    </Box>
                    <Box height="100%" className="mt-3">
                        <RichTextEditor onChange={handleTextChange} value={text} />
                    </Box>
                    <Box
                        padding="10px 0"
                        display="flex"
                        justifyContent="center"
                    >
                        <HomeButton
                            component="span"
                            className="home-post-button"
                            width="120px"
                        >
                            <Box fontSize={10}>Post</Box>
                        </HomeButton>
                        <input
                            accept="image/*"
                            style={{ display: "none" }}
                            id="raised-button-file"
                            type="file"
                            onChange={uploadImage}
                        />
                        <label
                            htmlFor="raised-button-file"
                            className="mb-0 ml-2"
                        >
                            <HomeButton
                                component="span"
                                className="home-post-button"
                                width="120px"
                            >
                                <Box fontSize={10}>Upload Header</Box>
                            </HomeButton>
                        </label>
                    </Box>
                    <Backdrop className={classes.backdrop} open={loading}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </form>
                <Divider />
            </Collapse>
            <Box style={{ display: "flex", justifyContent: "center" }}>
                <HomeButton
                    className="home-post-button"
                    style={{ display: "flex", justifyContent: "center" }}
                    width="70%"
                    onClick={toggleCreatePost}
                >
                    {creatingPost ? "Close" : "Create Post"}
                </HomeButton>
            </Box>
        </>
    );
}

export default withStyles(styles)(HomeForm);
