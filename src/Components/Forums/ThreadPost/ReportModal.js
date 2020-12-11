import React, { useState } from "react";
import { Box, Modal, Paper, TextField } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import NormalButton from "../../../utils/Buttons/NormalButton";

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
            backgroundColor: "rgba(209, 209, 209, 0.5)",
            padding: "5px",
            textAlign: "start",
            fontWeight: "bold",
            fontSize: 18,
        },
    })
);

const ReportModal = (props) => {
    const classes = useStyles();
    const [reason, setReason] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        if (reason===""){
            setError(true)
        }
    }

    const handleReasonChange = (text) => {
        setReason(text);
    }
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Paper className={classes.paper}>
                <Paper className={classes.paperheader}>Report</Paper>
                <Box paddingTop="15px" display="flex" justifyContent="center">
                    <Box paddingTop="10px" marginRight="10px">
                        Report Reason:
                    </Box>
                    <TextField
                        id="outlined-multiline-static"
                        label="Reason"
                        multiline
                        error={error}
                        rows={4}
                        variant="outlined"
                        helperText={error ? "Incorrect entry." : ""}
                        size='medium'
                        onChange={(event) => {handleReasonChange(event.target.value)}}
                        style={{
                            width: "70%",
                        }}
                    />
                </Box>
                <Box marginTop="10px" marginRight="30px" display="flex" justifyContent="flex-end">
                    <NormalButton color="inherit" width={100} onClick={handleSubmit}>
                        <Box fontWeight="fontWeightBold" display="inline">
                            Submit
                        </Box>
                    </NormalButton>
                </Box>
            </Paper>
        </Modal>
    );
};

export default ReportModal;
