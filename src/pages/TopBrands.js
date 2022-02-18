import Card from "../components/card";
import Image from "../components/image";
import ContentSection from "../components/section";
import product from "../assets/images/default/product.png"
import { Static } from "../datas/static";

const TopBrand = () => {

    const topBrandData = Static["brands"]

    return (
        <div className="wrapper">
            <ContentSection
                title="Top Brands"
                subtitle="We all know and love"
                more
            >
                <div className="brand-wrapper">
                    {
                        topBrandData.slice(0, 7).map((item, index) => {
                            return (
                                <div key={index}>
                                    <Card
                                        type="rounded"
                                    >
                                        <div className="brand-image">
                                            <Image
                                                src={item}
                                                emptySrc={product}
                                                alt={'brands'}
                                                style={{ width: '100%' }}
                                            />
                                        </div>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div >
            </ContentSection >
        </div >
    )
}
export default TopBrand