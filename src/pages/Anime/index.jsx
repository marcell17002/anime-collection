/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useLazyQuery, useQuery } from "@apollo/client";
import query from '../../config/GraphQl/query';
import { Header, Card } from '../../components/molecules';
import { styles } from './styles';
import { Gap } from '../../components/atoms';

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


    const breakpoints = [992]
    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const image = css({
        width: 400,
        height: 400,
        borderRadius: 20,
        objectFit: 'cover',
        opacity: 0.4
    })

    const imageMobile = css({
        width: '100%',
        borderRadius: 20,
        height: 400,
        objectFit: 'cover',
        [mq[0]]: {
            display: 'none'
        }
    })

    const imageHorizontal = css({
        width: 400,
        height: 250,
        borderRadius: 20,
        objectFit: 'cover',
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginLeft: 30
    })

    const topPick = css({
        display: 'flex',
        justifyContent: 'space-between',
        margin: '40px 0px',
        [mq[0]]: {
            margin: '80px 0px'
        }

    })

    const topPickInfo = css({
        marginTop: '5%',
        width: '100%'
    })

    const topImageBundles = css({
        display: 'none',
        position: 'relative',
        marginRight: 50,
        [mq[0]]: {
            display: 'block'
        }
    })

    const textTitle = css({
        fontSize: 30,
        margin: 0,
        color: '#333333',
        [mq[0]]: {
            fontSize: 45,
            paddingRight: 100,

        }
    })

    const textGenres = css({
        fontSize: 17,
        color: '#9CA3AF',
        [mq[0]]: {
            fontSize: 20,
        }

    })

    const buttonDetail = css({
        backgroundColor: '#3B82F6',
        border: 0,
        borderRadius: 30,
        padding: '20px 40px',
        fontSize: 16,
        width: '100%',
        color: 'white',
        ':hover': {
            backgroundColor: '#93C5FD'
        },
        [mq[0]]: {
            width: 'auto',
            fontSize: 20,

        }
    })

    const listBundle = css({
        display: 'flex',
        flexDirection: 'column'
    })

    const textTitleList = css({
        margin: 0,
        color: '#333333',
        fontSize: 24,
        [mq[0]]: {
            fontSize: 32
        }
    })

    const textDescList = css({
        margin: 0,
        color: '#9CA3AF',
        paddingTop: 10,
        paddingBottom: 40,
        width: '100%',
        [mq[0]]: {
            width: '50%'

        }
    })

    return (
        <div css={styles.main}>
            <Header />
            <div css={styles.container}>
                <div css={topPick}>
                    <div css={topPickInfo}>
                        <h1 css={textTitle}>Hungrsy Heart: Wild Striker</h1>
                        <h3 css={textGenres}>Comedy / Slice of Life / Sports</h3>
                        <img css={imageMobile} src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx17-6kqIbdUk3dgi.png'} alt="banner-image-anime" />
                        <Gap height={25}></Gap>
                        <button css={buttonDetail}>See Full Details</button>
                    </div>
                    <div css={topImageBundles}>
                        <img css={image} src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx17-6kqIbdUk3dgi.png'} alt="banner-image-anime" />
                        <img css={imageHorizontal} src={'https://s4.anilist.co/file/anilistcdn/media/anime/banner/17-2drlTPxc3WTh.png'} alt="banner-image-anime-1" />
                    </div>
                </div>
                <Gap height={50}></Gap>
                <div css={listBundle}>
                    <h1 css={textTitleList}>Explore Your Anime</h1>
                    <p css={textDescList}>Dive into our collection of Japanese animation from the classic blockbusters to the latest shows airing weekly</p>
                    <div css={styles.animeList}>
                        {anime.map((item, key) => (
                            <Card key={key}
                                title={item.title.userPreferred}
                                image={item.coverImage.extraLarge}
                                episodes={item.episodes}
                                duration={item.duration}
                                to={`/detail/${item.id}`} />
                        ))}
                    </div>
                    <button css={styles.buttonLoadMore} onClick={async () => {
                        setPage(page + 1)
                        renderAnime({ variables: { page: page, perPage: 10 } })
                    }}>Load More</button>
                </div>
            </div>

        </div>
    )
}
export default Anime