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
    margin: '0px 20px',
    'h1': {
        margin: 0,
        color: '#333333'
    },
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
        margin: '50px 0px',
        width: 400
    },
    ':hover': {
        backgroundColor: '#93C5FD'
    }
})

export const styles = {
    main,
    container,
    iconCheck,
    animeList,
    buttonLoadMore
}