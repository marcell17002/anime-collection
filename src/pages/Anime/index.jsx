/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useLazyQuery, useQuery } from "@apollo/client";
import query from '../../config/GraphQl/query';
import { Header, Card } from '../../components/molecules';
import { styles } from './styles';

const Anime = () => {
    const [page, setPage] = useState(2)
    const [anime, setAnime] = useState([])

    useQuery(query.ANIME_LIST, {
        variables: { page: 1, perPage: 10 },
        onCompleted: (data) => {
            const result = data.Page.media
            localStorage.setItem('anime', JSON.stringify(result));
            setAnime(result)
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


    return (
        <div css={styles.main}>
            <Header />
            <div css={styles.container}>
                <div css={styles.animeList}>
                    {anime.map((item, key) => (
                        <Card key={key} title={item.title.english} image={item.coverImage.extraLarge} to={`/detail/${item.id}`} />
                    ))}
                </div>
                <button css={styles.buttonLoadMore} onClick={async () => {
                    setPage(page + 1)
                    renderAnime({ variables: { page: page, perPage: 10 } })
                }}>Load More</button>
            </div>

        </div>
    )
}
export default Anime