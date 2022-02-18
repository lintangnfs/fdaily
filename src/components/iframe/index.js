import "./iframe.scss"

const Iframe = ({ src }) => {
    return (
        <div className="iframe-wrapper">
            <iframe
                src={src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="iframe-content"
            />
        </div>
    )
}

export default Iframe