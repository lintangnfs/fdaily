import Card from "../components/card";
import Image from "../components/image";
import ContentSection from "../components/section";
import product from "../assets/images/default/product.png"
import { Static } from "../datas/static";
import { trimString } from "../utils/stringManipulation";

const PopularGroup = () => {

    const popularGroupData = Static["editor's choice"]

    return (
        <div className="wrapper">
            <ContentSection
                title="Popular Group"
                subtitle="Where the beauty TALK are"
                more
            >
                <div className="popular-group-wrapper">
                    {
                        popularGroupData.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index}>
                                    <Card
                                        type="rounded shadow"
                                    >
                                        <div className="group-header-wrapper">
                                            <div>
                                                <div className="group-image">
                                                    <Image
                                                        src={item.photo}
                                                        emptySrc={product}
                                                        alt={item.editor}
                                                        style={{ width: '100%' }}
                                                    />
                                                </div>
                                                <div className="group-title title">{trimString(item.editor, 40)}</div>
                                            </div>
                                        </div>
                                        <div className="group-menu-wrapper">
                                            <div>
                                                <div className="group-menu">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" /></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" /></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" /></svg>
                                                </div>
                                                <div className="group-desc title">Keep it up</div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </ContentSection>
        </div>
    )
}
export default PopularGroup