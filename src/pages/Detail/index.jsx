/** @jsxImportSource @emotion/react */
import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Gap, Separator } from '../../components/atoms';
import { CarouselCollectionPage, CarouselDetailPage, Header } from '../../components/molecules';
import { styles } from './styles';
import { query } from '../../config/GraphQl/query'

const Detail = () => {
    const params = useParams()
    const [anime, setAnime] = useState([])


    const { loading } = useQuery(query.ANIME_DETAILS, {
        variables: { id: parseInt(params.id) },
        onCompleted: (data) => {
            const result = data.Media
            setAnime(result)
        }
    })


    const renderGenres = (data) => {
        let result = ''
        data.map((item, key) => {
            if (key === data.length - 2) return result += `${item} and `
            else if (key === data.length - 1) return result += `${item}`
            return result += `${item}, `
        })
        return result
    }

    const saveToCollection = () => {
        localStorage.setItem('anime-collection', JSON.stringify(anime));
    }

    return (
        <div css={styles.main}>
            <Header />
            <div css={styles.container}>
                <Gap height={50} />
                {!loading && (
                    <div css={styles.information}>
                        <div css={styles.imageBundle}>
                            <img src={anime.coverImage.extraLarge} css={styles.image} alt="anime-detail" />
                            {anime.isAdult ? (<div css={styles.bundleIconEightTeen}>
                                <h4 css={styles.iconEightTeen}>18+</h4>
                            </div>) : ''}
                        </div>
                        <div css={styles.informationDetail}>
                            <div css={styles.infoHeader}>
                                <div css={styles.infoHeaderChild}>
                                    <div>
                                        <p css={styles.infoTitleText}>{anime.title.english} </p>
                                        <Separator width={100} />
                                        <h3 css={styles.textGenre}>Genres : <span css={styles.detailTextGenre}>{renderGenres(anime.genres)}</span></h3>
                                    </div>
                                </div>
                                <div css={styles.additionalInfo}>
                                    <FontAwesomeIcon icon="heart" css={styles.iconHeartInActive} />
                                    <p>{anime.favourites}</p>
                                </div>
                            </div>
                            <div css={styles.category}>
                                <div css={styles.detailCategory}>
                                    <FontAwesomeIcon icon="clapperboard" css={styles.iconBoard} />
                                    <p css={styles.detailCategoryText}>{anime.episodes} episodes </p>
                                </div>
                                <Gap width={20} />
                                <div css={styles.detailCategory}>
                                    <FontAwesomeIcon icon="clock" css={styles.iconCLock} />
                                    <p css={styles.detailCategoryText}>{anime.duration} minutes </p>
                                </div>
                                <Gap width={20} />
                                <div css={styles.detailCategory}>
                                    <FontAwesomeIcon icon="calendar" css={styles.iconCalendar} />
                                    <p css={styles.detailCategoryText}>{anime.seasonYear}</p>
                                </div>
                                <Gap width={20} />
                                <div css={styles.detailCategory}>
                                    <FontAwesomeIcon icon="flag" css={styles.iconFlag} />
                                    <p css={styles.detailCategoryText}>{anime.countryOfOrigin} </p>
                                </div>
                            </div>
                            <p css={styles.descriptionText}>{anime.description}</p>
                            <button css={styles.buttonSave} onClick={() => saveToCollection()}>Add to My Collection</button>
                        </div>
                    </div>
                )}
                <Gap height={50}></Gap>
                <CarouselDetailPage label="My Popuslar Collections" to="/collection-detail/1" />
            </div>
        </div>
    )
}

export default Detail