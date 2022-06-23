/** @jsxImportSource @emotion/react */
import { styles } from './styles'

const Card = () => {
    return (
        <div css={styles.card}>
            <img css={styles.cardImage} src={require('../../../assets/base-image.png')} />
            <div css={styles.cardInfo}>
                <h4 css={styles.cardTextHeader}>Cowboy Bebop BebopBebop Bebop </h4>
                <h4>SPRING</h4>
            </div>
            <div css={styles.cardTag}>
                <p>tag</p>
            </div>
        </div>
    )
}

export default Card