import React, { useState, useEffect } from "react";
import CategoryHeader from "./CategoryHeader";
import Subcategory from "./Subcategory";
import { Paper } from "@material-ui/core";
import axios from "axios";

const Category = (props) => {
    const [subcategories, updateSubcategories] = useState([]);
    const { category, categoryStyle, creatingSubcategory, toggleCreateSubcategory } = props;
    useEffect(() => {
        function updateOnMount() {
            axios
                .get(
                    "http://localhost:8080/api/forums/list/subcategory/" +
                        props.category.title
                )
                .then((response) => {
                    updateSubcategories(response.data);
                });
        }
        updateOnMount();
    }, [props.category.title, subcategories.length]);
    return (
        <Paper style={{ overflow: "hidden", marginBottom: "10px" }}>
            <CategoryHeader
                category={category}
                categoryStyle={categoryStyle}
                creatingSubcategory={creatingSubcategory}
                toggleCreateSubcategory={toggleCreateSubcategory}
                updateSubcategories={updateSubcategories}
            />
            {subcategories.map((subcategory) => (
                <Subcategory key={subcategory.title} category={category} subcategory={subcategory} />
            ))}
        </Paper>
    );
};

export default Category;
