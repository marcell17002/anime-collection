/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '../../../../utils'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const styles = {
    headerList: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }),
    buttonExplore: css({
        color: colors.primary,
        textDecoration: 'none',
        marginLeft: 20,
        display: 'none',
        [mq[0]]: {
            display: 'block'
        },
        ':hover': {
            color: colors.secondary
        }
    }),
    buttonAction: css({
        border: 0,
        backgroundColor: 'transparent'
    }),
    mainTitle: css({
        display: 'flex',
        alignItems: 'center'
    }),
    textTitle: css({
        fontSize: 20,
        [mq[0]]: {
            fontSize: 24
        }
    }),
    mainAction: css({
        display: 'flex',
        alignItems: 'center'
    }),
    iconPen: css({
        fontSize: 12,
        backgroundColor: colors.primaryWarning,
        color: 'white',
        padding: 7,
        borderRadius: 20,
        ':hover': {
            backgroundColor: colors.secondaryWarning,
        },
        [mq[0]]: {
            padding: 8,
            fontSize: 16,
        }
    }),
    iconTrash: css({
        fontSize: 12,
        backgroundColor: colors.primaryError,
        color: 'white',
        padding: 7,
        borderRadius: 20,
        ':hover': {
            backgroundColor: colors.secondaryError,
        },
        [mq[0]]: {
            padding: 8,
            fontSize: 16,
        }
    })
}

export default styles 