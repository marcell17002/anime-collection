/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'
import { Gap } from '../../components/atoms'
import { Header } from '../../components/molecules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Collection = () => {

    const breakpoints = [992]
    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const main = css({
        display: 'flex',
        flexDirection: 'column',
    })

    const container = css({
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        maxWidth: 1248,
        [mq[0]]: {
            margin: '0px 20px',
        }
    })

    const banner = css({
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    })

    const imageBanner = css({
        width: '100%',
        height: 600,
        objectFit: 'cover',
        [mq[0]]: {
            height: 400,
            width: 'auto',
            borderRadius: 20,
        }
    })

    const category = css({
        display: 'flex',
        flexDirection: 'column'
    })

    const detailCategory = css({
        display: 'flex',
        alignItems: 'center',
        padding: '0px 30px 10px 0px',
        [mq[0]]: {
            padding: '5px 20px 10px 0px',

        }
    })

    const icon = css({
        fontSize: 16,
        color: 'white',
        margin: 0
    })

    const detailCategoryText = css({
        fontSize: 18,
        paddingLeft: 10,
        color: 'white',
        margin: 0,
    })

    const descriptionText = css({
        fontSize: 16,
        color: 'white',
    })

    const infoBanner = css({
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        zIndex: 3,
        margin: '0px 10px 10px 10px',
        [mq[0]]: {
            width: '70%',
            paddingLeft: 20

        }
    })

    const bundleImage = css({
        position: 'relative'
    })

    const baseLayerImage = css({
        backgroundColor: 'black',
        opacity: 0.3,
        borderRadius: 20,
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '100%'
    })

    const titleText = css({
        color: 'white'
    })
    return (
        <div css={main}>
            <Header />
            <div css={container}>
                <div css={banner}>
                    <div css={bundleImage}>
                        <div css={baseLayerImage}> <h1>asda</h1></div>
                        <img css={imageBanner} src={'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg'} alt="banner-image-anime" />
                    </div>
                    <div css={infoBanner}>
                        <h4 css={titleText}>#13 Trending</h4>
                        <h2 css={titleText}>The Dawn of The Twitch</h2>
                        <div css={category}>
                            <div css={detailCategory}>
                                <FontAwesomeIcon icon="clapperboard" css={icon} />
                                <p css={detailCategoryText}> episodes </p>
                            </div>
                            <Gap width={20} />
                            <div css={detailCategory}>
                                <FontAwesomeIcon icon="clock" css={icon} />
                                <p css={detailCategoryText}> minutes </p>
                            </div>
                            <Gap width={20} />
                            <div css={detailCategory}>
                                <FontAwesomeIcon icon="calendar" css={icon} />
                                <p css={detailCategoryText}>asddsa</p>
                            </div>
                        </div>
                        <p css={descriptionText}>Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.While traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection