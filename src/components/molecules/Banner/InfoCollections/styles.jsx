/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

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

export const styles = {
    bannerCollections,
    bundleInfoCollections,
    bundleButton,
    textButton,
    textHeaderCollections,
    textDescCollections,
    buttonCollections,
    iconChevronRight
}