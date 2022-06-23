/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom'
import { styles } from './styles'

const Header = () => {
    return (
        <div css={styles.header}>
            <h3 css={styles.headerText}>AnimeList</h3>
            <div css={styles.headerRightPane}>
                <NavLink to="/" css={styles.navLink}><h4 css={styles.headerText}>Anime</h4></NavLink>
                <NavLink to="/collection" css={styles.navLink}><h4 css={styles.headerText}>My Collection</h4></NavLink>
            </div>
        </div>
    )
}

export default Header