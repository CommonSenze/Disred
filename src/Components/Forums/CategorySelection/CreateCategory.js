import React from "react";
import {
    Box,
    Paper,
    Collapse,
} from "@material-ui/core";
import BoxButton from "../../../utils/Buttons/BoxButton";
import CreateCategoryCollapse from "./CreateCategoryCollapse";
import axios from "axios";

const CreateCategory = (props) => {
    const createCategory = (name, description) => {
        axios.post("http://localhost:8080/api/forums/upload/category", {
            category: name,
            description: description,
        }).then(response => {
            console.log(response)
            props.updateCategories(response.data)
        });
    }
    return (
        <>
            <Collapse
                in={props.creatingCategory}
                timeout={1000}
                unmountOnExit
                className="mb-2"
            >
                <CreateCategoryCollapse onSubmit={createCategory} />
            </Collapse>
            <Box display="flex" justifyContent="flex-end">
                <Box width="30%" textAlign="center" marginBottom="10px">
                    <Paper style={{ overflow: "hidden" }}>
                        <BoxButton onClick={props.toggleCreateCategory}>
                            Create Category
                        </BoxButton>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}

export default CreateCategory;
