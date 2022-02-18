import Title from "../title"
import empty from "../../assets/images/empty_state/empty-user.png"

import "./cards.scss"

const TopProfile = ({ image, name, role }) => {

    return (
        <div className="top-profile">
            <div className="profile-detail">
                <div className="profile-image account-image">
                    {image && <img src={image ?? empty} alt="name" />}
                </div>
                <div>
                    <Title title={name} subtitle={role} />
                </div>
            </div>
        </div>
    )
}

export default TopProfile