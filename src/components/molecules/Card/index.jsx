/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom'
import { styles } from './styles'

const Card = ({ image, title, to }) => {
    return (
        <NavLink css={styles.card} to={to}>
            <img css={styles.cardImage} src={image} />
            <div css={styles.cardInfo}>
                <h4 css={styles.cardTextHeader}>{title} </h4>
                <h4>asd</h4>
            </div>
            <div css={styles.cardTag}>
                <p>tag</p>
            </div>
        </NavLink>
    )
}

export default Card