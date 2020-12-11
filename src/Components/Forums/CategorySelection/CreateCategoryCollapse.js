import React, { useState } from "react";
import { Box, TextField, Paper } from "@material-ui/core";
import BoxButton from "../../../utils/Buttons/BoxButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const CreateCategoryCollapse = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleTitleChange = (e) => {
        var text = e.target.value;
        if (text.length > 20) {
            text = text.substring(0, 20);
        }
        setTitle(text);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handleClick = () => {
        if (title && description) props.onSubmit(title, description);
    };
    return (
        <Box display="flex">
            <Box width={0.4}>
                <TextField
                    id="outlined-basic-title"
                    label="Category"
                    variant="outlined"
                    value={title}
                    onChange={handleTitleChange}
                />
            </Box>
            <Box width={1} marginLeft="20px" marginRight="10px">
                <TextField
                    id="outlined-basic-description"
                    label="Description"
                    variant="outlined"
                    fullWidth
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </Box>
            <Paper>
                <BoxButton
                    BoxStyle={{
                        alignItems: "center",
                        backgroundColor: "rgba(0, 112, 255, 0.3)",
                        marginLeft: "auto",
                        borderRadius: "4px",
                    }}
                    style={{
                        height: "100%",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                    }}
                    onClick={() => {
                        handleClick();
                    }}
                >
                    <AddCircleOutlineIcon />
                </BoxButton>
            </Paper>
        </Box>
    );
};

export default CreateCategoryCollapse;
