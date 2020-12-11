import React, { useState, useEffect } from "react";
import { withTheme } from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Container,
    Paper,
    Breadcrumbs,
    Typography,
} from "@material-ui/core";
import LoginForm from "../Login/LoginForm";
import { Link } from "react-router-dom";
import Category from "./CategorySelection/Category";
import CreateCategory from "./CategorySelection/CreateCategory";
import axios from "axios";
import { connect } from "react-redux";
import { mapStateToProps } from "../../utils/Redux/redux";
import Permission from "../../utils/Enums/Permission";
import ForumProfileOverview from "./CategorySelection/ForumProfileOverview";

const CategorySelection = (props) => {
    const [categories, updateCategories] = useState([]);
    const [creatingCategory, setCreatingCategory] = useState(false);
    const [creatingSubcategory, setCreatingSubcategory] = useState(false);
    
    const categoryStyle = {
        backgroundColor: props.theme.palette.server.colors.primary,
        color: props.theme.palette.text.subtitle.color,
    };
    useEffect(() => {
        function updateOnMount() {
            axios
            .get("http://localhost:8080/api/forums/list/category")
            .then((response) => {
                updateCategories(response.data);
            });
        }
        updateOnMount();
    }, []);
    const toggleCreateCategory = () => {
        let open = !creatingCategory;
        if (creatingSubcategory) {
            setCreatingSubcategory(false);
        }
        setCreatingCategory(open);
    };
    const toggleCreateSubcategory = () => {
        let open = !creatingSubcategory;
        if (creatingCategory) {
            setCreatingCategory(false);
        }
        setCreatingSubcategory(open);
    };
    return (
        <Box marginTop="40px">
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper style={{ width: "100%" }}>
                            <Box paddingX="15px" paddingY="10px">
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link
                                        color="inherit"
                                        to="/"
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        Home
                                    </Link>
                                    <Typography color="textPrimary">
                                        Forums
                                    </Typography>
                                </Breadcrumbs>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item md={8} sm={12}>
                        {props.isLoggedIn&&props.profile.ranking <= Permission.CREATE_CATEGORY ? (
                            <CreateCategory
                                creatingCategory={creatingCategory}
                                toggleCreateCategory={toggleCreateCategory}
                                updateCategories={updateCategories}
                            />
                        ) : (
                            <></>
                        )}
                        {categories.map((category, index) => (
                            <Category
                                key={index}
                                category={category}
                                categoryStyle={categoryStyle}
                                creatingSubcategory={creatingSubcategory}
                                toggleCreateSubcategory={
                                    toggleCreateSubcategory
                                }
                            />
                        ))}
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Paper>
                            <Box paddingX="15px" paddingY="10px">
                                {props.isLoggedIn ? <ForumProfileOverview profile={props.profile} /> : <LoginForm />}
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
const withThemeCategorySelection = withTheme(CategorySelection);
export default connect(mapStateToProps, null)(withThemeCategorySelection);
