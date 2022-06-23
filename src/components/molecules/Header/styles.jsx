/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const header = css({
    backgroundColor: '#00D450',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 20px'
})

const headerText = css({
    color: 'white',
    padding: '0px 5px'
})

const headerRightPane = css({
    display: 'flex',
    justifyContent: 'flex-end'
})

const navLink = css({
    textDecoration: 'none'
})

export const styles = { header, headerText, headerRightPane, navLink }