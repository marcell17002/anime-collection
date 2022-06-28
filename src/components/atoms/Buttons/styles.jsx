/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)
const mainButton = css({
    'button': {
        border: 0,
        width: '100%',
        textDecoration: 'none',
    }

})

const btnDefault = css({
    backgroundColor: '#3B82F6',
    padding: '15px 25px',
    borderRadius: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    ':hover': {
        backgroundColor: '#93C5FD'
    }
})

const btnRounded = css({
    backgroundColor: '#3B82F6',
    borderRadius: 30,
    padding: '20px 40px',
    fontSize: 18,
    color: 'white',
    ':hover': {
        backgroundColor: '#93C5FD'
    },
    [mq[0]]: {
        width: 'auto',
        fontSize: 20,
    }
})

const btnIconRight = css({
    backgroundColor: '#3B82F6',
    padding: '20px 30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    ':hover': {
        backgroundColor: '#93C5FD',
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
    backgroundColor: '#22C55E',
    padding: '15px 25px',
    borderRadius: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    ':hover': {
        backgroundColor: '#86EFAC',
    }
})

const btnError = css({
    backgroundColor: '#FCA5A5',
    padding: '15px 25px',
    borderRadius: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    ':hover': {
        backgroundColor: '#FEE2E2',
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