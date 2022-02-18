import InnerContent from "./inner";
import Menu from "./menu";

const Header = () => {
    return (
        <div className="navbar-header">
            <InnerContent />
            <Menu />
        </div>
    )
}
export default Header;