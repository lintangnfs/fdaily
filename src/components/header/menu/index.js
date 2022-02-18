import { MenuItem } from "./MenuItem"

const Menu = () => {
    const dataItem = MenuItem

    return (
        <div className="top-menu">
            <div className="wrapper">
                {
                    dataItem?.map((item, index) => {
                        const name = item?.title;
                        return (
                            <div key={index} className="menu-wrapper">
                                <span>
                                    {name}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Menu