import Card from "../components/card";
import Image from "../components/image";
import ContentSection from "../components/section";
import latest from "../assets/images/default/latest-article.png"
import { Static } from "../datas/static";
import { trimString } from "../utils/stringManipulation";

const LatestArticle = () => {

    const latestArticleData = Static["editor's choice"]

    return (
        <div className="wrapper">
            <ContentSection
                title="Latest Article"
                subtitle="So you can make better purchase decision"
                more
            >
                <div className="latest-article-wrapper">
                    {
                        latestArticleData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Card
                                        type="rounded"

                                    >
                                        <div>
                                            {
                                                item.product.image && (
                                                    <div className="article-image rounded">
                                                        <Image
                                                            src={item.product.image}
                                                            emptySrc={latest}
                                                            alt={item.product.name}
                                                            className="fit-image"
                                                            width='100%'
                                                            height='100%'
                                                        />
                                                    </div>
                                                )
                                            }
                                            <div className="article-information">
                                                <div className="article-name title">{trimString(item.product.name, 40)}</div>
                                                <div className="article-detail subtitle">
                                                    <span className="username">username</span>
                                                    | <span className="time">{trimString(item.product.description, 45)}</span>
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
export default LatestArticle