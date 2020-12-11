import React from "react";
import { Box, Paper, Tooltip } from "@material-ui/core";
import { withTheme, makeStyles, createStyles } from "@material-ui/styles";
import RatingType from "../../../utils/Enums/RatingType";
import TextButton from "../../../utils/Buttons/TextButton";

const useStyles = makeStyles((theme) =>
    createStyles({
        ratingBar: {
            "&:hover": {
                "& $ratingButton": {
                    opacity: "0.5",
                },
            },
        },
        ratingButton: {
            "&:hover": {
                opacity: "1 !important",
            },
            opacity: "0",
            transition: "opacity 0.3s",
        },
    })
);

const RatingBar = (props) => {
    const { theme } = props;
    const classes = useStyles();
    return (
        <Box width={1} className={classes.ratingBar}>
            <Paper
                style={{
                    border: "1px solid rgba(" + theme.type.rgbColor + ",0.5)",
                }}
            >
                <Box
                    padding="5px"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Box display="flex">
                        {Object.keys(RatingType).map((type) => {
                            return (
                                <Box
                                    key={type}
                                    marginX="4px"
                                    display="flex"
                                    alignItems="center"
                                >
                                    <Tooltip title={RatingType[type].name}>
                                        <Box display="flex">
                                            <img
                                                src={RatingType[type].icon}
                                                alt={type}
                                                height="14px"
                                            />
                                            <Box marginLeft="3px" fontSize={10}>
                                                x3
                                            </Box>
                                        </Box>
                                    </Tooltip>
                                </Box>
                            );
                        })}
                        <Box marginLeft="5px"><TextButton>List</TextButton></Box>
                    </Box>
                    <Box display="flex">
                        {Object.keys(RatingType).map((type) => {
                            return (
                                <Box key={type} marginX="3px">
                                    <TextButton
                                        className={classes.ratingButton}
                                    >
                                        <Tooltip title={RatingType[type].name}>
                                            <img
                                                src={RatingType[type].icon}
                                                alt={type}
                                                height="18px"
                                            />
                                        </Tooltip>
                                    </TextButton>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default withTheme(RatingBar);
