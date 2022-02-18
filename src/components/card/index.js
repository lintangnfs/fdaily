import TopProfile from "./topProfile"


const Card = ({ type, children, topProfile }) => {
    return (
        <div className={`card-wrapper`}>
            {
                topProfile && (
                    <TopProfile image={topProfile.image} name={topProfile.name} role={topProfile.role} />
                )
            }
            <div className={`card ${type ?? ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Card