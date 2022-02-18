import Logo from "./logo"
import Search from "./search"
import Login from "./login"

const InnerContent = () => {
    return (
        <div className="navbar-inner-wrapper">
            <div className="navbar-inner-content-wrapper">
                <Logo />
                <Search />
                <Login />
            </div>
        </div>
    )
}

export default InnerContent