/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../../../utils/colors';

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)
const mainButton = css({
    'button': {
        border: 0,
        width: '100%',
        textDecoration: 'none',
        color: colors.primaryWhite,
    }

})

const btnDefault = css({
    backgroundColor: colors.primary,
    padding: '15px 25px',
    borderRadius: 15,
    fontSize: 20,
    fontWeight: 'bold',
    ':hover': {
        backgroundColor: colors.secondary
    }
})

const btnRounded = css({
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
})

const btnIconRight = css({
    backgroundColor: colors.primary,
    padding: '20px 30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    ':hover': {
        backgroundColor: colors.secondary,
    }
})

const textBtnIconRight = css({
    fontSize: 20,
    color: 'white',
    margin: 0
})

const iconChevronRight = css({
    fontSize: 18,
    color: 'white ',
    paddingLeft: 20
})

const btnSuccess = css({
    backgroundColor: colors.primarySuccess,
    padding: '15px 25px',
    borderRadius: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    ':hover': {
        backgroundColor: colors.secondarySuccess,
    }
})

const btnError = css({
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
export const styles = {
    mainButton,
    btnDefault,
    btnRounded,
    btnIconRight,
    textBtnIconRight,
    iconChevronRight,
    btnSuccess,
    btnError
}