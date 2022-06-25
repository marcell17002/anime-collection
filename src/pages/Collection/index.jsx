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
        'h1,h3,p': {
            margin: 0
        }
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
        height: 530,
        objectFit: 'cover',
        [mq[0]]: {
            height: 400,
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
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '100%',
        [mq[0]]: {
            borderRadius: 20,
        }
    })

    const titleText = css({
        color: 'white'
    })


    const bundleCollection = css({
        margin: '0px 16px'
    })

    const headerList = css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    })

    const buttonExplore = css({
        color: '#3B82F6',
        textDecoration: 'none',
        marginLeft: 20,
        display: 'none',
        [mq[0]]: {
            display: 'block'
        }
    })

    const mainTitle = css({
        display: 'flex',
        alignItems: 'center'
    })

    const textTitle = css({
        fontSize: 20,
        [mq[0]]: {
            fontSize: 24
        }
    })

    const mainAction = css({
        display: 'flex',
        alignItems: 'center'
    })

    const iconPen = css({
        fontSize: 12,
        backgroundColor: '#9CA3AF',
        color: 'white',
        padding: 6,
        borderRadius: 20,
        ':hover': {
            backgroundColor: '#FACC15',
        },
        [mq[0]]: {
            padding: 8,
            fontSize: 16,
        }
    })

    const iconTrash = css({
        fontSize: 12,
        backgroundColor: '#9CA3AF',
        color: 'white',
        padding: 6,
        borderRadius: 20,
        ':hover': {
            backgroundColor: '#F87181',
        },
        [mq[0]]: {
            padding: 8,
            fontSize: 16,
        }
    })
    return (
        <div css={main}>
            <Header />
            <div css={container}>
                <div css={banner}>
                    <div css={bundleImage}>
                        <div css={baseLayerImage}></div>
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
                <Gap height={50}></Gap>
                <div css={bundleCollection}>
                    <div css={headerList}>
                        <div css={mainTitle}>
                            <h1 css={textTitle}>My Popular Collections</h1>
                            <NavLink to="/collection-detail/1" css={buttonExplore}>
                                <h3 >Explore All</h3>
                            </NavLink>
                        </div>
                        <div css={mainAction}>
                            <FontAwesomeIcon icon="pen" css={iconPen} />
                            <Gap width={10}></Gap>
                            <FontAwesomeIcon icon="trash" css={iconTrash} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection