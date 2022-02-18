import logo from "../../assets/images/logo.png"
import fb from "../../assets/images/default/fb.png"
import twitter from "../../assets/images/default/twitter.png"
import ig from "../../assets/images/default/ig.png"
import youtube from "../../assets/images/default/youtube.png"
import appstore from "../../assets/images/default/appstore.png"
import gplay from "../../assets/images/default/gplay.png"

import './footer.scss'
const Footer = () => {
    return (
        <div className="wrapper">
            <div className="footer-wrapper">
                <div className="top-footer">
                    {[['About Us', 'Feedback', 'Contact'], ['Terms & Condition', 'Privacy', 'Policy'], ['Awards', 'Newsletter']].map((item, index) => {
                        return (
                            <div key={index} className="footer-menu">
                                {
                                    item.map((itm, idx) => {
                                        return <div key={idx} className="menu-item title">{itm}</div>
                                    })
                                }
                            </div>
                        )
                    })}
                    <div className="download-info">
                        <div className="title">Download Our Mobile App</div>
                        <div className="icon-wrapper">
                            <img src={appstore} alt="Appstore" />
                            <img src={gplay} alt="Google Play" />
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="left-side">
                        <div className="icon">
                            <img src={logo} alt="Female Daily" />
                        </div>
                        <div className="subtitle">Copyright © 2015-2017 Female Daily Network . All Right Reserved</div>
                    </div>
                    <div className="right-side icon-wrapper">
                        <img src={fb} alt="FB" />
                        <img src={twitter} alt="Twitter" />
                        <img src={ig} alt="Instagram" />
                        <img src={youtube} alt="Youtube" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer