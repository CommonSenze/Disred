import React from "react"
import PropType from "prop-types"
import { Avatar, Badge, Box, Tooltip } from "@material-ui/core"

const ResizableProfile = (props) => {
    const { profile } = props;
    return (
        <Tooltip title={profile.username} placement="top" arrow>
            <Badge overlap="circle" variant="dot" badgeContent=" " style={props.badgestyle} classes={{
                badge: props.custombadge
            }}>
                <Box maxWidth={props.maxwidth} style={props.boxstyle}><Avatar src={"https://minotar.net/avatar/"+profile.uniqueId} {...props} /></Box>
            </Badge>
        </Tooltip>
    )
}

export default ResizableProfile

ResizableProfile.propType = {
    profile: PropType.object.isRequired,
}

