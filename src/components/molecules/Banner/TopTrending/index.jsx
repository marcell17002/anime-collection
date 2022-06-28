/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { Gap } from '../../../atoms'
import { styles } from './styles'

const TopTrending = ({ image, title, trending, episodes, duration, year, to }) => {
    return (
        <NavLink css={styles.banner} to={to}>
            <div css={styles.bundleImage}>
                <div css={styles.baseLayerImage}></div>
                <img css={styles.imageBanner} src={image} alt="banner-image-anime" />
            </div>
            <div css={styles.infoBanner}>
                {trending !== 0 &&
                    <h4 css={styles.titleText}>#{trending} Trending</h4>
                }
                <h2 css={styles.titleText}>{title}</h2>
                <div css={styles.category}>
                    <div css={styles.detailCategory}>
                        <FontAwesomeIcon icon="clapperboard" css={styles.icon} />
                        <p css={styles.detailCategoryText}> {episodes} episodes </p>
                    </div>
                    <Gap width={20} />
                    <div css={styles.detailCategory}>
                        <FontAwesomeIcon icon="clock" css={styles.icon} />
                        <p css={styles.detailCategoryText}> {duration} minutes </p>
                    </div>
                    <Gap width={20} />
                    <div css={styles.detailCategory}>
                        <FontAwesomeIcon icon="calendar" css={styles.icon} />
                        <p css={styles.detailCategoryText}>{year}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default TopTrending