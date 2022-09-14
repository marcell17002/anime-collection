/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom'
import styles from './styles'

const Header = () => {
    return (
        <div css={styles.main}>
            <div css={styles.header}>
                <NavLink to="/" css={styles.navLink}><h2 css={styles.headerLogo}>Nime</h2></NavLink>
                <div css={styles.headerRightPane}>
                    <NavLink to="/collection" css={styles.navLink}><h4 css={styles.headerText}>My Collection</h4></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header