import React, { useEffect, useState } from "react";
import { withTheme } from "@material-ui/core/styles";
import {
    Box,
    Icon,
} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import { Link } from "react-router-dom";
import axios from "axios";

const Subcategory = (props) => {
    const [threadAmount, setThreadAmount] = useState(0);
    const [postAmount, setPostAmount] = useState(0);
    const { subcategory, category } = props;

    useEffect(() => {
        let mounted = true
        function updateOnMount() {
            axios
            .get("http://localhost:8080/api/forums/count/subcategory/"+subcategory.uniqueId+"/threads")
            .then((response) => {
                if (mounted)
                setThreadAmount(response.data.amount);
            });
            axios
            .get("http://localhost:8080/api/forums/count/subcategory/"+subcategory.uniqueId+"/posts")
            .then((response) => {
                if (mounted)
                setPostAmount(response.data.amount);
            });
        }
        updateOnMount();
        return () => { mounted = false }
    }, [subcategory.uniqueId]);
    return (
        <Box
            paddingX="15px"
            paddingY="10px"
            display="flex"
            alignItems="flex-start"
        >
            <ChatIcon style={{ fontSize: 40 }} />
            <Box marginLeft="10px">
                <Link
                    to={{
                        pathname: "/forums/"+subcategory.title.replaceAll(" ","-"),
                        state: {
                            category: category,
                            subcategory: subcategory,
                        },
                    }}
                    style={{ color: "inherit" }}
                >
                    <Box
                        fontWeight="bold"
                        style={{
                            color: props.theme.palette.text.subtitle.color,
                        }}
                    >
                        {subcategory.title}
                    </Box>
                </Link>
                <Box
                    display="flex"
                    alignItems="center"
                    style={{
                        color: props.theme.palette.text.subtitle.color,
                    }}
                >
                    <Icon className="far fa-comment" style={{ fontSize: 13 }} />
                    <Box marginLeft="3px" marginRight="8px">
                        {threadAmount}
                    </Box>
                    <Icon
                        className="far fa-comments"
                        style={{
                            fontSize: 13,
                            display: "contents",
                        }}
                    />
                    <Box marginLeft="3px">{postAmount}</Box>
                </Box>
            </Box>
        </Box>
    );
}

export default withTheme(Subcategory);
