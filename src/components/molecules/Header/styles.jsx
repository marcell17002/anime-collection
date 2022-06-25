/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const header = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 20px',
    boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2) ',

})

const headerLogo = css({
    color: '#3B82F6',
    margin: 0,
    padding: '20px 5px'
})

const headerText = css({
    color: '#3B82F6',
    margin: 0,
    fontWeight: 'bold',
    padding: '0px 10px',
    ':hover': {
        color: '#93C5FD',

    }
})

const headerRightPane = css({
    display: 'flex',
    justifyContent: 'flex-end'
})

const navLink = css({
    textDecoration: 'none',

})

export const styles = { header, headerLogo, headerText, headerRightPane, navLink }