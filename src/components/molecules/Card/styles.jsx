/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const navlink = css({
    textDecoration: 'none',
    width: '100%',
    [mq[0]]: {
        width: 'auto'
    }
})

const card = css({
    display: 'flex',
    position: 'relative',
    width: '100%',
    borderRadius: 15,
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
    height: 280,
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

const detail = css({
    display: 'flex',
    alignItems: 'center',
    marginTop: 5
})

const iconFilm = css({
    color: '#3B82F6',
    fontSize: 16
})

const iconClock = css({
    color: '#FBBF24',
    fontSize: 16
})

const iconCheck = css({
    color: 'white',
    padding: 6,
    borderRadius: 12,
    backgroundColor: '#16A34A',
    fontSize: 14
})

const textDetail = css({
    margin: 0,
    paddingLeft: 10,
    color: '#3333',
    fontSize: 14
})

const cardTag = css({
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


export const styles = {
    navlink,
    card,
    cardImage,
    cardInfo,
    detail,
    iconFilm,
    iconClock,
    iconCheck,
    textDetail,
    cardTag,
    cardTextHeader
}