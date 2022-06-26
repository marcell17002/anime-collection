/** @jsxImportSource @emotion/react */
import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Gap } from '../../components/atoms';
import { AnimeDetail, CarouselDetailPage, Header } from '../../components/molecules';
import { styles } from './styles';
import { query } from '../../config/GraphQl/query'

const Detail = () => {
    const params = useParams()
    const [anime, setAnime] = useState([])
    const [loading, setLoading] = useState(true)


    useQuery(query.ANIME_DETAILS, {
        variables: { id: parseInt(params.id) },
        onCompleted: (data) => {
            const result = data.Media
            setAnime(result)
            setLoading(false)
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
                <div css={styles.bundle}>
                    <Gap height={50} />
                    {!loading &&
                        <AnimeDetail title={anime.title.userPreferred}
                            isAdult={anime.isAdult}
                            coverImage={anime.coverImage.extraLarge}
                            favourites={anime.favourites}
                            genres={renderGenres(anime.genres)}
                            episodes={anime.episodes}
                            duration={anime.duration}
                            seasonYear={anime.seasonYear}
                            countryOfOrigin={anime.countryOfOrigin}
                            description={anime.description}
                            onClick={() => saveToCollection()} />
                    }
                    <Gap height={50}></Gap>

                    <CarouselDetailPage label="My Popuslar Collections" to="/collection-detail/1" />
                </div>
            </div>
        </div >
    )
}

export default Detail