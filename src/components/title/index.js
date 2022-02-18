import "./title.scss"

const Title = ({ title, subtitle }) => {
    return (
        <div className="title-wrapper">
            {title && <div className="title">{title}</div>}
            {subtitle && <div className="subtitle">{subtitle}</div>}
        </div>
    )
}

export default Title