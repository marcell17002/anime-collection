/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../../../utils/colors';

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const styles = {
    mainButton: css({
        'button': {
            border: 0,
            width: '100%',
            textDecoration: 'none',
            color: colors.primaryWhite,
        }

    }),
    btnDefault: css({
        backgroundColor: colors.primary,
        padding: '15px 25px',
        borderRadius: 15,
        fontSize: 20,
        fontWeight: 'bold',
        ':hover': {
            backgroundColor: colors.secondary
        }
    }),
    btnRounded: css({
        backgroundColor: colors.primary,
        borderRadius: 30,
        padding: '20px 40px',
        fontSize: 18,
        ':hover': {
            backgroundColor: colors.secondary
        },
        [mq[0]]: {
            width: 'auto',
            fontSize: 20,
        }
    }),
    btnIconRight: css({
        backgroundColor: colors.primary,
        padding: '20px 30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        ':hover': {
            backgroundColor: colors.secondary,
        }
    }),
    textBtnIconRight: css({
        fontSize: 20,
        color: 'white',
        margin: 0
    }),
    iconChevronRight: css({
        fontSize: 18,
        color: 'white ',
        paddingLeft: 20
    }),
    btnSuccess: css({
        backgroundColor: colors.primarySuccess,
        padding: '15px 25px',
        borderRadius: 15,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        ':hover': {
            backgroundColor: colors.secondarySuccess,
        }
    }),
    btnError: css({
        backgroundColor: colors.primaryError,
        padding: '15px 25px',
        borderRadius: 15,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        ':hover': {
            backgroundColor: colors.secondaryError,
        }
    })
}

export default styles 