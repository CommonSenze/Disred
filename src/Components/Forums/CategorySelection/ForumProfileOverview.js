import React from 'react'
import { Box } from "@material-ui/core";
import ResizableImage from '../../../utils/ImageMachine/ResizableImage';
import Ratings from './Ratings';

const ForumProfileOverview = (props) => {
    const { profile } = props;
    return (
        <Box>
            <Box display="flex" alignItems="start">
                <ResizableImage src={"https://minotar.net/avatar/"+profile.uniqueId} maxWidth="60px" alt="overviewProfile" />
                <Box display="inline-block" marginX="auto" component="h4" fontWeight="bold">{profile.username}</Box>
            </Box>
            <Ratings profile={profile} />
        </Box>
    )
}

export default ForumProfileOverview
