/** @jsxImportSource @emotion/react */
import { Gap } from '../../../atoms'
import { styles } from './styles'
const AnimeInfo = ({ title, genres, imageBanner, imageCover, onClick }) => {
    return (
        <div css={styles.topPick}>
            <div css={styles.topPickInfo}>
                <h1 css={styles.textTitle}>{title}</h1>
                <h3 css={styles.textGenres}>{genres}</h3>
                <img css={styles.imageMobile} src={imageBanner} alt="cover-image-random-anime" />
                <Gap height={25}></Gap>
                <button css={styles.buttonDetail} onClick={onClick}>See Full Details</button>
            </div>
            <div css={styles.topImageBundles}>
                <img css={styles.image} src={imageCover} alt="banner-image-random-anime" />
                <img css={styles.imageHorizontal} src={imageBanner} alt="banner-image-random-anime-mobile" />
            </div>
        </div>
    )
}

export default AnimeInfo