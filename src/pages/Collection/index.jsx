/** @jsxImportSource @emotion/react */
import { Gap } from '../../components/atoms'
import { Banner, CarouselCollectionPage, Header } from '../../components/molecules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styles } from './styles';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import query from '../../config/GraphQl/query';
const Collection = () => {
    const [randomId, setRandomId] = useState(() =>
        Math.floor(Math.random() * 10000)
    )
    const [recommendationAnime, setRecommendationAnime] = useState([])
    const [loading, setLoading] = useState(true)


    useQuery(query.ANIME_DETAILS, {
        variables: { id: randomId },
        onCompleted: (data) => {
            const result = data.Media
            setRecommendationAnime(result)
            setLoading(false)
        },
        onError: () => {
            const localData = JSON.parse(localStorage.getItem('anime'))
            setRecommendationAnime(localData[8])
            setLoading(false)
        }
    })
    return (
        <div css={styles.main}>
            <Header />
            <div css={styles.container}>
                {!loading && <Banner
                    title={recommendationAnime.title.userPreferred}
                    desc={recommendationAnime.description}
                    image={recommendationAnime.bannerImage === null ? recommendationAnime.coverImage.extraLarge : recommendationAnime.bannerImage}
                    episodes={recommendationAnime.episodes}
                    duration={recommendationAnime.duration}
                    year={recommendationAnime.seasonYear}
                    trending={recommendationAnime.trending}

                />}

                <Gap height={50}></Gap>
                <CarouselCollectionPage label="My Popular Collections" to="/collection-detail/1" />
                <Gap height={50}></Gap>
                <CarouselCollectionPage label="My Popular Collections" to="/collection-detail/1" />
            </div>
        </div>
    )
}

export default Collection