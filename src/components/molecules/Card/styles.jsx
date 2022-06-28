/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '../../../utils/colors'

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
        width: 220,
        marginLeft: 20,

    },
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
    padding: '10px 15px',
    display: 'flex-col',
})

const detail = css({
    display: 'flex',
    alignItems: 'center',
    marginTop: 5
})

const iconFilm = css({
    color: colors.primary,
    fontSize: 16
})

const iconClock = css({
    color: colors.primaryWarning,
    fontSize: 16
})

const bundleHeader = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 25
})

const iconTrash = css({
    color: colors.tertiaryGrey,
    fontSize: 20,
    paddingLeft: 5,
    ':hover': {
        color: 'red',
        fontSize: 24,
    }
})

const iconHeartInActive = css({
    color: colors.tertiaryGrey,
    fontSize: 20,
    paddingLeft: 5,
    ':hover': {
        fontSize: 24,
    },
})

const textDetail = css({
    margin: 0,
    paddingLeft: 10,
    color: colors.primaryBlack,
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
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    [mq[0]]: {
        width: 175
    }
})


export const styles = {
    navlink,
    card,
    cardImage,
    cardInfo,
    detail,
    iconFilm,
    iconClock,
    bundleHeader,
    iconTrash,
    iconHeartInActive,
    textDetail,
    cardTag,
    cardTextHeader
}