import Card from "../components/card";
import Iframe from "../components/iframe"
import ContentSection from "../components/section";

import { Static } from "../datas/static";

const LatestVideo = ({ youtube }) => {

    const latestVideo = Static["latest video"]


    return (
        <div className="wrapper">
            <ContentSection
                title="Latest Video"
                subtitle="Watch and learn"
                more
            >
                <div className="latest-video-wrapper">
                    {
                        latestVideo.slice(0, 3).map((item, index) => {
                            console.log(item)
                            return (
                                <div
                                    key={index}
                                    className={`video-${index}`}
                                >
                                    <Card>
                                        <Iframe
                                            src={item}
                                        />
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


export default LatestVideo;
