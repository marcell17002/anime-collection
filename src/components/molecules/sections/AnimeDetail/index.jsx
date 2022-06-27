/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Gap, Separator } from '../../../atoms'
import { styles } from './styles'

const AnimeDetail = ({ title, isAdult, coverImage, favourites, genres, episodes, duration, seasonYear, countryOfOrigin, description, onClick, isCollected, location }) => {
    return (
        <div css={styles.information}>
            <div css={styles.imageBundle}>
                <img src={coverImage} css={styles.image} alt="anime-detail" />
                {isAdult &&
                    <div css={styles.bundleIconEightTeen}>
                        <h4 css={styles.iconEightTeen}>18+</h4>
                    </div>}
            </div>
            <div css={styles.informationDetail}>
                <div css={styles.infoHeader}>
                    <div css={styles.infoHeaderChild}>
                        <div>
                            <p css={styles.infoTitleText}>{title} </p>
                            <Separator width={100} />
                            <Gap height={10} />

                            <h3 css={styles.textGenre}>Genres : <span css={styles.detailTextGenre}>{genres}</span></h3>
                        </div>
                    </div>
                    <div css={styles.additionalInfo}>
                        <FontAwesomeIcon icon="heart" css={isCollected ? styles.iconHeartActive : styles.iconHeartInActive} />
                        <p>{favourites}</p>
                    </div>
                </div>
                <Gap height={20} />
                <div css={styles.category}>
                    <div css={styles.detailCategory}>
                        <FontAwesomeIcon icon="clapperboard" css={styles.iconBoard} />
                        <p css={styles.detailCategoryText}>{episodes} episodes </p>
                    </div>
                    <Gap width={20} />
                    <div css={styles.detailCategory}>
                        <FontAwesomeIcon icon="clock" css={styles.iconCLock} />
                        <p css={styles.detailCategoryText}>{duration} minutes </p>
                    </div>
                    <Gap width={20} />
                    <div css={styles.detailCategory}>
                        <FontAwesomeIcon icon="calendar" css={styles.iconCalendar} />
                        <p css={styles.detailCategoryText}>{seasonYear}</p>
                    </div>
                    <Gap width={20} />
                    <div css={styles.detailCategory}>
                        <FontAwesomeIcon icon="flag" css={styles.iconFlag} />
                        <p css={styles.detailCategoryText}>{countryOfOrigin} </p>
                    </div>
                </div>
                <p css={styles.descriptionText} dangerouslySetInnerHTML={{ __html: description }} />
                {isCollected ?
                    <button css={styles.buttonCollected} onClick={onClick}>Collected At {location}</button> :
                    <button css={styles.buttonSave} onClick={onClick}>Add to My Collection</button>
                }
            </div>
        </div>
    )
}

export default AnimeDetail