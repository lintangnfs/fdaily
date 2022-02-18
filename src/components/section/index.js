import Title from "../title"
import "./section.scss"

const ContentSection = ({
    more,
    title,
    subtitle,
    children,
    pagination
}) => {
    return (
        <div className="section-wrapper">
            <div className="section-header-wrapper">
                <Title title={title} subtitle={subtitle} />
                {more && (
                    <div className="section-see-more title">
                        <span>See more</span>
                    </div>
                )}
            </div>
            <div className="section-content">
                {children}
            </div>
        </div>
    )
}

export default ContentSection