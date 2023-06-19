/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { useLazyQuery, useQuery } from "@apollo/client";
import { query } from '../../config';
import { Header, Card, AnimeInfo, ModalInput, InfoCollecitons, Footer } from '../../components/molecules';
import { styles } from './styles';
import { Buttons, Gap } from '../../components/atoms';
import { useNavigate } from 'react-router-dom';
import { parseStringwithSlash } from '../../utils';

const Anime = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState(2)
    const [anime, setAnime] = useState([])
    const [randomAnime, setRandomAnime] = useState([])
    const [loading, setLoading] = useState(true)
    const [randomId, setRandomId] = useState(() =>
        Math.floor(Math.random() * 10000)
    )

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
            const savedData = JSON.parse(localStorage.getItem('anime'))
            setRandomAnime(savedData[7])
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

    const saveToCollection = (id) => {
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
                        genres={parseStringwithSlash(randomAnime.genres)}
                        imageCover={randomAnime.coverImage.extraLarge}
                        imageBanner={randomAnime.bannerImage === null ? randomAnime.coverImage.extraLarge : randomAnime.bannerImage}
                        onClick={() => navigate(`/detail/${randomAnime.id}`)}
                    />}
                    <Gap height={50} />

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
                    </div>
                    <div css={styles.buttonLoadMore}>
                        <Buttons label="Load More" onClick={() => {
                            setPage(page + 1)
                            renderAnime({ variables: { page: page, perPage: 10 } })
                        }} />
                    </div>


                    <Gap height={100} />
                    <InfoCollecitons onClick={() => navigate('/collection')} />
                    <Footer />
                </div>

            </div>
        </div>
    )
}
export default Anime