/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ image, title, episodes, duration, to }) => {
    return (
        <NavLink to={to} css={styles.navlink}>
            <div css={styles.card} >
                <img css={styles.cardImage} src={image} />
                <div css={styles.cardInfo}>
                    <h4 css={styles.cardTextHeader}>{title} </h4>
                    <div css={styles.detail}>
                        <FontAwesomeIcon icon="film" css={styles.iconFilm} />
                        <p css={styles.textDetail}>{episodes} episodes</p>
                    </div>
                    <div css={styles.detail}>
                        <FontAwesomeIcon icon="clock" css={styles.iconClock} />
                        <p css={styles.textDetail}>{duration} minutes</p>
                    </div>
                </div>
                <div css={styles.cardTag}>
                    <FontAwesomeIcon icon="check" css={styles.iconCheck} />
                </div>
            </div>
        </NavLink>
    )
}

export default Card