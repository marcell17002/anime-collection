/** @jsxImportSource @emotion/react */
import { Gap } from '../../components/atoms'
import { TopTrending, CarouselCollectionPage, Header, ModalInput } from '../../components/molecules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import query from '../../config/GraphQl/query';
const Collection = () => {
    const [randomId, setRandomId] = useState(() =>
        Math.floor(Math.random() * 10000)
    )
    const [recommendationAnime, setRecommendationAnime] = useState([])
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [value, setValue] = useState('')
    const [id, setId] = useState(0)
    const [placeholder, setPlaceholder] = useState('')


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

    useEffect(() => {
        setData(getCollectionData())
    }, [])


    const getCollectionData = () => {
        const result = JSON.parse(localStorage.getItem('anime-collections'))
        return result
    }


    const deleteCollection = (id) => {
        const oldData = JSON.parse(localStorage.getItem('anime-collections'))
        const index = oldData.findIndex(item => id === item.id)
        const updateData = oldData
        updateData.splice(index, 1)
        setData(updateData)
        localStorage.setItem('anime-collections', JSON.stringify(updateData))
    }

    const editCollection = (id) => {
        if (value !== '') {
            const oldData = JSON.parse(localStorage.getItem('anime-collections'))
            const index = oldData.findIndex(item => id === item.id)
            const temp = {
                ...oldData[index],
                title: value,
            }
            oldData.splice(index, 1)
            const updateData = [...oldData, ...[temp]]
            localStorage.setItem('anime-collections', JSON.stringify(updateData))
            setData(updateData)
            setIsModalOpen(false)
            setValue('')
        }
    }
    return (
        <div css={styles.body}>
            <div css={styles.main}>
                <Header />
                <div css={styles.container}>
                    {!loading && <TopTrending
                        title={recommendationAnime.title.userPreferred}
                        image={recommendationAnime.bannerImage === null ? recommendationAnime.coverImage.extraLarge : recommendationAnime.bannerImage}
                        episodes={recommendationAnime.episodes}
                        duration={recommendationAnime.duration}
                        year={recommendationAnime.seasonYear}
                        trending={recommendationAnime.trending}

                    />}
                    <Gap height={50}></Gap>
                    {data.map((item, key) => (
                        <CarouselCollectionPage
                            key={key}
                            items={item.data}
                            label={item.title}
                            onClickEdit={() => {
                                setIsModalOpen(true)
                                setId(item.id)
                                setPlaceholder(item.title)
                            }}
                            onClickDelete={() => deleteCollection(item.id)}
                            to={`/collection-detail/${item.id}`}
                        />
                    ))}
                </div>
            </div>
            {isModalOpen &&
                <ModalInput
                    placeholder={placeholder}
                    onClickCancel={() => {
                        setValue('')
                        setIsModalOpen(false)
                    }}
                    onClickClose={() => {
                        setValue('')
                        setIsModalOpen(false)
                    }}
                    onClickSave={() => editCollection(id)}
                    value={value}
                    setValue={event => setValue(event.target.value)}
                />}
        </div>
    )
}

export default Collection