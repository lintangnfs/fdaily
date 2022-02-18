import Card from "../components/card";
import Image from "../components/image";
import ContentSection from "../components/section";
import Rating from "../components/rating";
import product from "../assets/images/default/product.png"
import { Static } from "../datas/static";
import { trimString } from "../utils/stringManipulation";

const TrendingThisWeek = () => {

    const trendingThisWeek = Static["editor's choice"]

    return (
        <div className="wrapper">
            <ContentSection
                title="Trending This Week"
                subtitle="See our weekly most reviewed product"
            >
                <div className="editor-wrapper">
                    {
                        trendingThisWeek.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Card
                                        type="bordered rounded"
                                    >
                                        <div>
                                            {
                                                item.product.image && (
                                                    <div>
                                                        <Image
                                                            src={item.product.image}
                                                            emptySrc={product}
                                                            alt={item.product.name}
                                                            style={{ width: '100%' }}
                                                        />
                                                    </div>
                                                )
                                            }
                                            <div className="product-information">
                                                <div className="rating-wrapper flex">
                                                    <div className="rating-number title">{(item.product.rating ?? 0).toFixed(1)}</div>
                                                    <div className="rating-star">
                                                        <Rating rating={item.product.rating} />
                                                    </div>
                                                    <div className="rating-total">({item.product.total ?? 0})</div>
                                                </div>
                                                <div className="information">
                                                    <div className="product-name title">{trimString(item.product.name, 40)}</div>
                                                    <div className="product-desc">{trimString(item.product.description, 40)}</div>
                                                    <div className="product-detail subtitle">{trimString(item.product.description, 45)}</div>
                                                </div>
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
export default TrendingThisWeek