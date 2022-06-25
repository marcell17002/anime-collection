/** @jsxImportSource @emotion/react */
import { Gap } from '../../components/atoms'
import { CarouselCollectionPage, Header } from '../../components/molecules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styles } from './styles';
const Collection = () => {

    return (
        <div css={styles.main}>
            <Header />
            <div css={styles.container}>
                <div css={styles.banner}>
                    <div css={styles.bundleImage}>
                        <div css={styles.baseLayerImage}></div>
                        <img css={styles.imageBanner} src={'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg'} alt="banner-image-anime" />
                    </div>
                    <div css={styles.infoBanner}>
                        <h4 css={styles.titleText}>#13 Trending</h4>
                        <h2 css={styles.titleText}>The Dawn of The Twitch</h2>
                        <div css={styles.category}>
                            <div css={styles.detailCategory}>
                                <FontAwesomeIcon icon="clapperboard" css={styles.icon} />
                                <p css={styles.detailCategoryText}> episodes </p>
                            </div>
                            <Gap width={20} />
                            <div css={styles.detailCategory}>
                                <FontAwesomeIcon icon="clock" css={styles.icon} />
                                <p css={styles.detailCategoryText}> minutes </p>
                            </div>
                            <Gap width={20} />
                            <div css={styles.detailCategory}>
                                <FontAwesomeIcon icon="calendar" css={styles.icon} />
                                <p css={styles.detailCategoryText}>asddsa</p>
                            </div>
                        </div>
                        <p css={styles.descriptionText}>Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.While traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?</p>
                    </div>
                </div>
                <Gap height={50}></Gap>
                <CarouselCollectionPage label="My Popular Collections" to="/collection-detail/1" />
                <Gap height={50}></Gap>
                <CarouselCollectionPage label="My Popular Collections" to="/collection-detail/1" />
            </div>
        </div>
    )
}

export default Collection