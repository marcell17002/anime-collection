/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useLazyQuery, useQuery } from "@apollo/client";
import query from '../../config/GraphQl/query';
import { Header, Card } from '../../components/molecules';

const Hero = () => {



    const container = css({
        margin: '0px 50px',
        display: 'flex-col',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    })


    const subContainer = css({
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    })



    const iconCheck = css({
        color: 'red',
        fontSize: 20
    })


    const animeList = css({
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 1240,
        justifyContent: 'space-evenly',
    })


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
        <div>
            <Header />
            <div css={container}>
                <div css={subContainer}>
                    <div css={animeList}>
                        {anime.map((item, key) => (
                            <Card key={key} title={item.title.english} image={item.coverImage.extraLarge} to={`/detail/${item.id}`} />
                        ))}
                    </div>
                </div>
                <button onClick={async () => {
                    setPage(page + 1)
                    renderAnime({ variables: { page: page, perPage: 10 } })
                }}>test</button>
            </div>

        </div>
    )
}
export default Hero