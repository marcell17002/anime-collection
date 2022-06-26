/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const banner = css({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginTop: 20,
    [mq[0]]: {
        margin: '10px 16px 0px',
    }
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
    margin: '50px 10px 10px 10px',
    [mq[0]]: {
        width: '70%',
        margin: '0px 0px 0px 20px'

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


export const styles = {
    banner,
    imageBanner,
    category,
    detailCategory,
    icon,
    detailCategoryText,
    descriptionText,
    infoBanner,
    bundleImage,
    baseLayerImage,
    titleText

}