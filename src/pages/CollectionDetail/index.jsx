/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Gap, Separator } from '../../components/atoms'
import { Card, Header } from '../../components/molecules'
import { useQuery } from '@apollo/client/react'
import query from '../../config/GraphQl/query'
const CollectionDetail = () => {

    const breakpoints = [992]
    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const main = css({
        display: 'flex',
        flexDirection: 'column',
        'h1,h3,p': {
            margin: 0
        }
    })

    const container = css({
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: '0px 20px',
        maxWidth: 1248,
        [mq[0]]: {
            margin: '0px 20px',
        }
    })

    const headerList = css({
        display: 'flex',
        alignItems: 'start',
        marginTop: 100
    })

    const buttonAction = css({
        border: 0,
        backgroundColor: 'transparent'
    })
    const mainTitle = css({
        display: 'flex',
        flexDirection: 'column',
    })

    const iconPen = css({
        fontSize: 12,
        backgroundColor: '#9CA3AF',
        color: 'white',
        padding: 7,
        marginTop: 10,
        borderRadius: 20,
        [mq[0]]: {
            padding: 8,
            fontSize: 16,
        }
    })

    const inputTitle = css({
        border: 0,
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        width: '100%',
        padding: '15px 0px',
        ':focus': {
            border: 0,
            outline: 0,
        },
        [mq[0]]: {
            fontSize: 30
        }
    })

    const animeList = css({
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 1248,
        justifyContent: 'space-between',

    })

    const textEditInfo = css({
        fontStyle: 'italic',
        fontSize: 12,
        color: 'gray',

    })

    const [anime, setAnime] = useState([])

    useQuery(query.ANIME_LIST, {
        variables: { page: 1, perPage: 10 },
        onCompleted: (data) => {
            const result = data.Page.media
            localStorage.setItem('anime', JSON.stringify(result));
            setAnime(result)
        }
    })
    return (
        <div css={main}>
            <Header />
            <div css={container}>
                <div css={headerList}>
                    <div css={mainTitle}>
                        <input type="text" placeholder='Cowboy Bepop' css={inputTitle} />
                        <p css={textEditInfo}>type here to edit the collection title</p>
                        <Separator width={100} />
                        <p>Added At : 22 August 2022</p>
                    </div>
                    {/* <button css={buttonAction}>
                        <FontAwesomeIcon icon="pen" css={iconPen} />
                    </button> */}
                </div>
                <Gap height={20}></Gap>
                <div css={animeList}>
                    {anime.map((item, key) => (
                        <Card key={key} title={item.title.userPreferred} image={item.coverImage.extraLarge} to={`/detail/${item.id}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CollectionDetail