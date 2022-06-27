/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/react'

const Card = ({ image, title, episodes, duration, to, onClick, isEdit }) => {

    return (
        <div css={styles.card} >
            <NavLink to={to} css={styles.navlink}>
                <img css={styles.cardImage} src={image} />
            </NavLink>
            <div css={styles.cardInfo}>
                <div css={styles.bundleHeader}>
                    <h4 css={styles.cardTextHeader}>{title} </h4>
                    {isEdit &&
                        <FontAwesomeIcon icon="trash" onClick={onClick} css={styles.iconTrash} />
                    }
                </div>
                <div css={styles.detail}>
                    <FontAwesomeIcon icon="film" css={styles.iconFilm} />
                    <p css={styles.textDetail}>{episodes} episodes</p>
                </div>
                <div css={styles.detail}>
                    <FontAwesomeIcon icon="clock" css={styles.iconClock} />
                    <p css={styles.textDetail}>{duration} minutes</p>
                </div>
            </div>

        </div>
    )
}

export default Card