import banner from "./assets/images/default/banner.png"

import Header from "./components/header";
import Ads from "./components/ads";
import EditorChoice from "./pages/EditorChoice";
import LatestArticle from "./pages/LatestArticle";
import LatestReview from "./pages/LatestReviews";
import PopularGroup from "./pages/PopularGroups";
import LatestVideo from "./pages/LatestVideos";
import TrendingThisWeek from "./pages/TrendingThisWeek";
import TopBrand from "./pages/TopBrands";
import Footer from "./components/footer";


import "./assets/styles/styles.scss";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Ads
          width={970}
          height={50}
        >
          <span>Top Frame 970x50</span>
        </Ads>
        <Ads
          width={970}
          height={250}
        >
          <span>Billboard 970x250</span>
        </Ads>
        <EditorChoice />
        <div className="wrapper" style={{ paddingBottom: 70 }}>
          <img src={banner} alt='banner' width="100%" />
        </div>
        <Ads
          width={970}
          height={250}
        >
          <div><span>Horizontal 970x250</span></div>
          <div><span>(Internal campaign only)</span></div>
        </Ads>
        <LatestArticle />
        <div className="wrapper" style={{ paddingTop: 0 }}>
          <div className="wrapper-article-ads">
            <LatestReview />
            <div className="wrapper-ads">
              <Ads
                width={300}
                height={250}
              >
                <div><span>MR 2 300x250</span></div>
              </Ads>
            </div>
          </div>
        </div>
        <PopularGroup />
        <LatestVideo />
        <TrendingThisWeek />
        <TopBrand />
        <Footer />
      </div>
    </div>
  );
}

export default App;
