import React from "react";
import { Box, Paper, Divider, Collapse, Typography } from "@material-ui/core";
import BoxButton from "../../../utils/Buttons/BoxButton";
import CreateSubCategoryCollapse from "./CreateSubcategoryCollapse";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../utils/Redux/redux";
import Permission from "../../../utils/Enums/Permission";

const CategoryHeader = (props) => {
    const { category } = props;
    return (
        <>
            <Box paddingX="15px" paddingY="10px" style={props.categoryStyle}>
                <Box display="flex" justifyContent="space-between">
                    <Box>
                        <Typography variant="subtitle1">
                            <Box fontWeight="bold">{category.title}</Box>
                        </Typography>
                        <Typography variant="caption">
                            {category.description}
                        </Typography>
                    </Box>
                    {props.isLoggedIn&&props.profile.ranking <= Permission.CREATE_SUBCATEGORY ? (
                        <Box width="30%" textAlign="center" marginBottom="10px">
                            <Paper style={{ overflow: "hidden" }}>
                                <BoxButton
                                    onClick={props.toggleCreateSubcategory}
                                >
                                    Create Subcategory
                                </BoxButton>
                            </Paper>
                        </Box>
                    ) : (
                        <></>
                    )}
                </Box>
            </Box>
            <Divider />
            <Collapse
                in={props.creatingSubcategory}
                timeout={1000}
                unmountOnExit
                className="mb-2"
            >
                <CreateSubCategoryCollapse updateSubcategories={props.updateSubcategories} category={category} />
            </Collapse>
        </>
    );
};

export default connect(mapStateToProps, null)(CategoryHeader);
