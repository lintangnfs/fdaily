import Card from "../components/card";
import Image from "../components/image";
import ContentSection from "../components/section";
import Rating from "../components/rating";
import product from "../assets/images/default/product.png"
import empty from "../assets/images/empty_state/empty-user.png"
import { Static } from "../datas/static";
import { trimString } from "../utils/stringManipulation";

const LatestReview = () => {

    const latestReviewData = Static["editor's choice"]

    return (
        <div className="wrapper">
            <ContentSection
                title="Latest Review"
                subtitle="So you can make better purchase decision"
            >
                <div className="latest-review-wrapper">
                    {
                        latestReviewData.map((item, index) => {
                            return (
                                <div className="card-review" key={index} style={{ padding: 10 }}>
                                    <Card
                                        type="bordered rounded"
                                    >
                                        <div>
                                            <div className="review-header-wrapper">
                                                {
                                                    item.product.image && (
                                                        <div className="review-image">
                                                            <Image
                                                                src={item.product.image}
                                                                emptySrc={product}
                                                                alt={item.product.name}
                                                                style={{ width: '100%' }}
                                                            />
                                                        </div>
                                                    )
                                                }
                                                <div className="review-product-info">
                                                    <div className="title">{trimString(item.product.name, 30)}</div>
                                                    <div>{trimString(item.product.name, 30)}</div>
                                                </div>
                                            </div>
                                            <div className="review-info">
                                                <div className="review-rating flex">
                                                    <Rating rating={item.product.rating} />
                                                </div>
                                                <div className="review-desc">
                                                    {trimString(item.product.description, 300)}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                    <div className="reviewer-wrapper">
                                        <div className="reviewer-info">
                                            <div className="reviewer-image">
                                                <Image
                                                    src={item.photo ?? empty}
                                                    emptySrc={empty}
                                                    alt={item.editor}
                                                />
                                            </div>
                                            <div className="title">{item.editor}</div>
                                            <div className="subtitle">{item.role}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </ContentSection>
        </div>
    )
}
export default LatestReview