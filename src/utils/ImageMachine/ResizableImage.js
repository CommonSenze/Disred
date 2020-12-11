import React from "react"
import PropType from "prop-types"
import { Box } from "@material-ui/core"

function ResizableImage(props) {
    const { src, maxWidth, className, ImageProps } = props;
    return (
        <Box display="inline-block" maxWidth={maxWidth} className={className}>
            <img {...ImageProps} src={src} alt='resizableIMG' width="100%" />
        </Box>
    )
}

export default ResizableImage

ResizableImage.propType = {
    src: PropType.string.isRequired,
    maxWidth: PropType.number.isRequired,
    alt: PropType.string.isRequired,
    rounded: PropType.bool,
}
