/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Buttons } from '../../../atoms'
import styles from './styles'

const InfoCollecitons = ({ onClick }) => {
    return (
        <div css={styles.bannerCollections}>
            <div css={styles.bundleInfoCollections}>
                <h1 css={styles.textHeaderCollections}>Anime Collections</h1>
                <p css={styles.textDescCollections}>Find the most outstanding anime that we recommend you, save it into your collections, and watch it later. We recommend you the anime that suits you, find it, and save it into your collections</p>
            </div>
            <div css={styles.button}>
                <Buttons type="icon-right" iconName="arrow-right" onClick={onClick} label="Discover More" />
            </div>
        </div>
    )
}

export default InfoCollecitons