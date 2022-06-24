/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

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
    margin: '0px 20px',
    'h1': {
        margin: 0,
        color: '#333333'
    },
})

const information = css({
    display: 'flex',
    flexDirection: 'column',
    [mq[0]]: {
        flexDirection: 'row'
    }
})

const imageBundle = css({
    position: 'relative',
})

const bundleIconEightTeen = css({
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '20px 20px'
})

const iconEightTeen = css({
    color: 'white',
    backgroundColor: '#ff6961',
    borderRadius: 20,
    height: 'auto',
    padding: 8,
    margin: 0,
})

const informationDetail = css({
    paddingTop: 20,
    [mq[0]]: {
        marginLeft: 40,
        paddingTop: 0
    }
})

const infoHeader = css({
    display: 'flex',
    justifyContent: 'space-between',
})

const infoHeaderChild = css({
    display: 'flex',
})

const image = css({
    width: '100%',
    height: 400,
    objectFit: 'cover',
    borderRadius: 20,
    [mq[0]]: {
        height: 550,
        width: 'auto'
    }
})


const infoTitleText = css({
    fontSize: 30,
    color: '#333333',
    fontWeight: 'bold',
    paddingRight: 25,
    margin: 0,
    [mq[0]]: {
        fontSize: 55,
        paddingRight: 20
    }
})

const additionalInfo = css({
    display: 'flex',
    marginTop: 10,
    alignContent: 'center',
    p: {
        margin: 0,
        paddingLeft: 5,
        color: '#878686',
    },
    [mq[0]]: {
        marginTop: 15
    }
})

const iconHeartInActive = css({
    fontSize: 25,
    color: '#FFB6B3',
    [mq[0]]: {
        fontSize: 30,
    }
})

const category = css({
    display: 'flex',
    flexDirection: 'column',
    [mq[0]]: {
        flexDirection: 'row',
    }
})

const detailCategory = css({
    display: 'flex',
    alignItems: 'center',
    padding: '10px 30px 10px 0px',
})

const detailCategoryText = css({
    display: 'flex',
    fontSize: 18,
    paddingLeft: 10,
    margin: 0,
})

const icon = css({
    fontSize: 20,
    color: '#03AC0E',
    margin: 0
})

const descriptionText = css({
    paddingTop: 10,
    fontSize: 20,
    color: '#333333',
})

const buttonSave = css({
    backgroundColor: '#4FD15A',
    padding: '15px 25px',
    width: '100%',
    border: 0,
    borderRadius: 20,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    [mq[0]]: {
        marginTop: 20,
        width: 'auto'
    }
})

export const styles = {
    main,
    container,
    information,
    imageBundle,
    image,
    bundleIconEightTeen,
    iconEightTeen,
    informationDetail,
    infoHeader,
    infoHeaderChild,
    infoTitleText,
    additionalInfo,
    iconHeartInActive,
    category,
    detailCategory,
    detailCategoryText,
    icon,
    descriptionText,
    buttonSave
}
