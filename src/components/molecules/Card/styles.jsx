/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const card = css({
    marginTop: 10,
    position: 'relative',
    width: 'min-content',
    borderRadius: 15,
    display: 'flex-col',
    boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2) ',
    'h4,p': {
        color: "#333333",
        margin: 0
    }
})

const cardImage = css({
    width: 230,
    height: 300,
    objectFit: 'cover',
    borderRadius: '15px 15px 0px 0px',

})

const cardInfo = css({
    padding: '10px 20px',
    display: 'flex-col',
})

const cardTag = css({
    backgroundColor: 'red',
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


export const styles = { card, cardImage, cardInfo, cardTag, cardTextHeader }