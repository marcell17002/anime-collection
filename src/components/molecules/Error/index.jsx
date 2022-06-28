/** @jsxImportSource @emotion/react */
import { styles } from './styles'

const Error = () => {
    return (
        <div css={styles.information}>
            <img css={styles.imageInformation} src={require('../../../assets/unknown.png')} alt="page-not-found-image" />
            <h2>Oops, you still don't have any collection in here </h2>
            <p>Search your favourites anime in home page and collect them into your collection list</p>
        </div>
    )
}

export default Error