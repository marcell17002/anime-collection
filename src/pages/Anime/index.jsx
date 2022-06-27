/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

import { useEffect, useState } from 'react'
import { useLazyQuery, useQuery, refetch } from "@apollo/client";
import query from '../../config/GraphQl/query';
import { Header, Card, AnimeInfo, ModalInput, InfoCollecitons, Footer } from '../../components/molecules';
import { styles } from './styles';
import { Gap } from '../../components/atoms';
import { useNavigate } from 'react-router-dom';

const Anime = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState(2)
    const [anime, setAnime] = useState([])
    const [randomAnime, setRandomAnime] = useState([])
    const [loading, setLoading] = useState(true)
    const [randomId, setRandomId] = useState(() =>
        Math.floor(Math.random() * 10000)
    )

    const [isModalOpen, setIsModalOpen] = useState(false)

    useQuery(query.ANIME_LIST, {
        variables: { page: 1, perPage: 10 },
        onCompleted: (data) => {
            const result = data.Page.media
            localStorage.setItem('anime', JSON.stringify(result));
            setAnime(result)
        }
    })

    useQuery(query.ANIME_DETAILS, {
        variables: { id: randomId },
        onCompleted: (data) => {
            const result = data.Media
            setRandomAnime(result)
            setLoading(false)
        },
        onError: () => {
            setRandomAnime(anime[7])
            setLoading(false)
        }
    })

    const [renderAnime] = useLazyQuery(query.ANIME_LIST, {
        variables: { page: page, perPage: 10 },
        onCompleted: (data) => {
            const result = data.Page.media
            const newData = [...anime, ...result]
            localStorage.setItem('anime', JSON.stringify(newData));
            setAnime(newData)
        }
    })

    const renderGenres = (data) => {
        let result = ''
        data.map((item, key) => {
            if (key === data.length - 1) return result += `${item}`
            return result += `${item} / `
        })
        return result
    }


    const saveToCollection = (id) => {
        setIsModalOpen(true)
        const oldData = JSON.parse(localStorage.getItem('anime-collections'))
        if (oldData === null) {
            localStorage.setItem('anime-collections', JSON.stringify([anime[id]]));
        } else {
            const newData = [...oldData, anime[id]]
            localStorage.setItem('anime-collections', JSON.stringify(newData));
        }
    }

    return (
        <div css={styles.body}>
            <div css={styles.main}>
                <Header />
                <div css={styles.container}>

                    {!loading && <AnimeInfo
                        title={randomAnime.title.userPreferred}
                        genres={renderGenres(randomAnime.genres)}
                        imageCover={randomAnime.coverImage.extraLarge}
                        imageBanner={randomAnime.bannerImage === null ? randomAnime.coverImage.extraLarge : randomAnime.bannerImage}
                        onClick={() => navigate(`/detail/${randomAnime.id}`)}
                    />}
                    <Gap height={50}></Gap>

                    <div css={styles.listBundle}>
                        <h1 css={styles.textTitleList}>Explore Your Anime</h1>
                        <p css={styles.textDescList}>Dive into our collection of Japanese animation from the classic blockbusters to the latest shows airing weekly</p>
                        <div css={styles.animeList}>
                            {anime.map((item, key) => (
                                <Card key={key}
                                    title={item.title.userPreferred}
                                    image={item.coverImage.extraLarge}
                                    episodes={item.episodes}
                                    duration={item.duration}
                                    to={`/detail/${item.id}`}
                                    onClick={() => saveToCollection(key)}
                                />
                            ))}
                        </div>
                        <button css={styles.buttonLoadMore} onClick={async () => {
                            setPage(page + 1)
                            renderAnime({ variables: { page: page, perPage: 10 } })
                        }}>Load More</button>
                    </div>

                    <Gap height={100}></Gap>
                    <InfoCollecitons onClick={() => navigate('/collection')} />
                    <Footer />
                </div>

            </div>
            {isModalOpen ?
                <ModalInput onClickClose={() => setIsModalOpen(false)} />
                : ''}
        </div>
    )
}
export default Anime