/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

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
    padding: '0px 20px',
    marginTop: 70
})

const iconCheck = css({
    color: 'red',
    fontSize: 20
})


const animeList = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',

})

const buttonLoadMore = css({
    backgroundColor: '#3B82F6',
    padding: '15px 25px',
    width: '100%',
    border: 0,
    borderRadius: 20,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    [mq[0]]: {
        marginTop: 50,
        width: 400
    },
    ':hover': {
        backgroundColor: '#93C5FD'
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

const bannerCollections = css({
    backgroundColor: '#E4E4E7',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 40px',
    borderRadius: 30,
    flexDirection: 'column',
    [mq[0]]: {
        flexDirection: 'row',
        padding: '50px 60px',
    }
})

const bundleInfoCollections = css({
    [mq[0]]: {
        width: '60%'
    }
})

const textHeaderCollections = css({
    margin: 0
})

const textDescCollections = css({
    margin: 0,
    fontSize: 18,
    paddingTop: 15
})

const buttonCollections = css({
    backgroundColor: '#3B82F6',
    border: 0,
    padding: '20px 30px',
    borderRadius: 20,
    width: '100%',
    marginTop: 50,
    ':hover': {
        backgroundColor: '#93C5FD',
    },
    [mq[0]]: {
        width: 'auto',
        marginTop: 0,
    }
})

const iconChevronRight = css({
    fontSize: 18,
    color: 'white ',
    paddingLeft: 20
})

const bundleButton = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [mq[0]]: {
        justifyContent: 'start'
    }
})

const textButton = css({
    fontSize: 20,
    color: 'white',
    margin: 0
})


export const styles = {
    main,
    container,
    iconCheck,
    animeList,
    buttonLoadMore,
    listBundle,
    textTitleList,
    textDescList,
    bannerCollections,
    bundleInfoCollections,
    textHeaderCollections,
    textDescCollections,
    buttonCollections,
    iconChevronRight,
    bundleButton,
    textButton
}