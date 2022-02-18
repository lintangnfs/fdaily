import logo from "../../../assets/images/logo.png"

const Logo = () => {
    return (
        <div className="main-logo-wrapper">
            <div className="icon-logo_fd ic-fd" href="#logo-female">
                <img src={logo} alt="Female Daily" />
            </div>
        </div>
    )
}

export default Logo