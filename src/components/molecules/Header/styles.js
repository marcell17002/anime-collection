/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '../../../utils'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const styles = {
    main: css({
        width: '100%',
        zIndex: 10,
        position: 'fixed',
        backgroundColor: 'white',

    }),
    header: css({
        display: 'flex',
        padding: '0px 10px',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2) ',
        [mq[0]]: {
            padding: '0px 20px'
        }

    }),
    headerLogo: css({
        color: colors.primary,
        margin: 0,
        padding: '15px 5px',
        [mq[0]]: {
            padding: '20px 5px'
        }
    }),
    headerText: css({
        color: colors.primary,
        margin: 0,
        fontWeight: 'bold',
        padding: '0px 10px',
        ':hover': {
            color: colors.secondary,

        }
    }),
    headerRightPane: css({
        display: 'flex',
        justifyContent: 'flex-end'
    }),
    navLink: css({
        textDecoration: 'none',

    })
}

export default styles 