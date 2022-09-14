/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '../../../utils/colors'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const styles = {
    navlink: css({
        textDecoration: 'none',
        width: '100%',
        [mq[0]]: {
            width: 'auto'
        }
    }),
    card: css({
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
    }),
    cardImage: css({
        width: '100%',
        height: 280,
        objectFit: 'cover',
        borderRadius: '15px 15px 0px 0px',
        [mq[0]]: {
            width: 220
        }

    }),
    cardInfo: css({
        padding: '10px 15px',
        display: 'flex-col',
    }),
    detail: css({
        display: 'flex',
        alignItems: 'center',
        marginTop: 5
    }),
    iconFilm: css({
        color: colors.primary,
        fontSize: 16
    }),
    iconClock: css({
        color: colors.primaryWarning,
        fontSize: 16
    }),
    bundleHeader: css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 25
    }),
    iconTrash: css({
        color: colors.tertiaryGrey,
        fontSize: 20,
        paddingLeft: 5,
        ':hover': {
            color: 'red',
            fontSize: 24,
        }
    }),
    iconHeartInActive: css({
        color: colors.tertiaryGrey,
        fontSize: 20,
        paddingLeft: 5,
        ':hover': {
            fontSize: 24,
        },
    }),
    textDetail: css({
        margin: 0,
        paddingLeft: 10,
        color: colors.primaryBlack,
        fontSize: 14
    }),
    cardTag: css({
        position: 'absolute',
        zIndex: 2,
        top: 0,
        right: 0,
        margin: 10
    }),
    cardTextHeader: css({
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        [mq[0]]: {
            width: 175
        }
    })
}

export default styles 