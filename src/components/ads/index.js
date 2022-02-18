import "./ads.scss"

const Ads = ({ width, height, position, children, type }) => {
    return (
        <div className={`ads-wrapper ${position ?? 'center'}`}>
            <div className={`ads-container ${children ? 'no-border' : ' '}`} style={{ width: width, height: height }}>
                {children}
            </div>
        </div>
    )
}
export default Ads