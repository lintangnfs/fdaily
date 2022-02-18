import { useState } from "react";

const Image = ({ className, src, alt, emptySrc, width, height }) => {
    const [image, setImage] = useState(src)

    const onError = () => {
        console.log('Image onError');
        setImage(emptySrc);
    }

    return (
        <img
            src={image}
            className={className}
            alt={alt}
            onError={() => onError()}
            width={width ?? "100%"}
            height={height}
        />
    )
}

export default Image