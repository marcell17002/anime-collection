/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const card = css({
    margin: 10,
    position: 'relative',
    width: '100%',
    borderRadius: 15,
    textDecoration: 'none',
    display: 'flex-col',
    marginBottom: 30,
    boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2) ',
    'h4,p': {
        color: "#333333",
        margin: 0
    },
    [mq[0]]: {
        width: 'min-content',
    }
})

const cardImage = css({
    width: '100%',
    height: 300,
    objectFit: 'cover',
    borderRadius: '15px 15px 0px 0px',
    [mq[0]]: {
        width: 220
    }

})

const cardInfo = css({
    padding: '10px 20px',
    display: 'flex-col',
})

const cardTag = css({
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 2,
    top: 0,
    right: 0,
    margin: 10
})

const cardTextHeader = css({
    width: 175,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})


export const styles = { card, cardImage, cardInfo, cardTag, cardTextHeader }