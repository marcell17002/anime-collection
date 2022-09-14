/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const styles = {
    banner: css({
        display: 'flex',
        textDecoration: 'none',
        flexDirection: 'column',
        position: 'relative',
        marginTop: 20,
        [mq[0]]: {
            margin: '10px 16px 0px',
        }
    }),
    imageBanner: css({
        width: '100%',
        height: 400,
        objectFit: 'cover',
        [mq[0]]: {
            borderRadius: 20,
        }
    }),
    category: css({
        display: 'flex',
        flexDirection: 'column'
    }),
    detailCategory: css({
        display: 'flex',
        alignItems: 'center',
        padding: '0px 30px 10px 0px',
        [mq[0]]: {
            padding: '5px 20px 10px 0px',
        }
    }),
    icon: css({
        fontSize: 16,
        color: 'white',
        margin: 0
    }),
    detailCategoryText: css({
        fontSize: 18,
        paddingLeft: 10,
        color: 'white',
        margin: 0,
    }),
    descriptionText: css({
        fontSize: 16,
        color: 'white',
    }),
    infoBanner: css({
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        zIndex: 3,
        margin: '100px 10px 10px 10px',
        [mq[0]]: {
            width: '70%',
            margin: '50px 0px 0px 20px'
        }
    }),
    bundleImage: css({
        position: 'relative'
    }),
    baseLayerImage: css({
        backgroundColor: 'black',
        opacity: 0.3,
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '100%',
        [mq[0]]: {
            borderRadius: 20,
        }
    }),
    titleText: css({
        color: 'white'
    })
}

export default styles 