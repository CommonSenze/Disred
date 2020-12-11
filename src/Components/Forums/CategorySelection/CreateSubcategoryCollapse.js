import React, { useState } from "react";
import { Box, TextField, FormControl, Paper } from "@material-ui/core";
import BoxButton from "../../../utils/Buttons/BoxButton";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import axios from "axios";

const CreateSubCategoryCollapse = (props) => {
    const [title, setTitle] = useState("");
    const { category } = props;
    const handleTitleChange = (e) => {
        if (e.target.value.length <= 50) {
            setTitle(e.target.value);
        }
    };
    const handleClick = () => {
        if (title) createSubcategory(title);
    };
    const createSubcategory = (name) => {
        axios.post("http://localhost:8080/api/forums/upload/subcategory", {
            category: category.title,
            title: name,
        }).then(response => {
            console.log(response)
            props.updateSubcategories(prevState => [...prevState, response.data])
        }).catch(error => {
            console.log(error);
        });
    }
    return (
        <Box display="flex" justifyContent="space-between" padding="10px">
            <FormControl variant="outlined">
                <TextField
                    id="outlined-basic"
                    label="Subcategory"
                    variant="outlined"
                    value={title}
                    onChange={handleTitleChange}
                />
            </FormControl>
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

export default CreateSubCategoryCollapse;
