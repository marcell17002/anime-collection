/** @jsxImportSource @emotion/react */
import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Gap } from '../../components/atoms';
import { AnimeDetail, CarouselDetailPage, Header, ModalInput, ModalList } from '../../components/molecules';
import { styles } from './styles';
import { query } from '../../config/GraphQl/query'

const Detail = () => {
    const params = useParams()
    const [anime, setAnime] = useState([])
    const [randomPage, setRandomPage] = useState(() => Math.floor(Math.random() * 100))
    const [recommendationAnime, setRecommendationAnime] = useState([])
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [typeModal, setTypeModal] = useState('input')
    const [isNew, setIsNew] = useState(true)
    const [location, setLocation] = useState('')
    const oldData = JSON.parse(localStorage.getItem('anime-collections'))



    useQuery(query.ANIME_DETAILS, {
        variables: { id: parseInt(params.id) },
        onCompleted: (data) => {
            const result = data.Media
            setAnime(result)
            setLoading(false)
        }
    })

    useQuery(query.ANIME_LIST, {
        variables: { page: randomPage, perPage: 10 },
        onCompleted: (data) => {
            const result = data.Page.media
            setRecommendationAnime(result)
            setLoading(false)
        }
    })


    const renderGenres = (data) => {
        let result = ''
        data.map((item, key) => {
            if (key === data.length - 2) return result += `${item} and `
            else if (key === data.length - 1) return result += `${item}`
            return result += `${item}, `
        })
        return result
    }

    useEffect(() => {
        if (oldData === null) {
            setTypeModal('input')
            setIsNew(true)
        }
        else {
            setIsNew(false)
            setTypeModal('list')
            setLocationCollectedData()
        }
    }, [anime])

    const setLocationCollectedData = () => {
        const index = oldData.map((item) => {
            const result = item.data.filter((key) => key.id === parseInt(params.id))
            if (result) return item.id
        })
        index.map(item => {
            if (item !== '') return setLocation(item)
        })
    }

    const saveToCollection = () => {
        setIsModalOpen(true)
        const date = new Date().toLocaleString()
        const newData = [{
            id: title,
            data: [anime],
            date
        }]

        if (oldData === null) {
            if (title !== '') {
                localStorage.setItem('anime-collections', JSON.stringify(newData))
                setTitle('')
                setIsModalOpen(false)
                setIsNew(false)
            }
        } else {
            const index = oldData.findIndex((item) => title === item.id)
            if (index === -1) {
                const updateData = [...oldData, ...newData]
                localStorage.setItem('anime-collections', JSON.stringify(updateData));

            } else {
                const dataAnime = [...oldData[index].data, anime]
                const newData = [{
                    id: title,
                    data: dataAnime,
                    date
                }]
                const updateData = [...oldData, ...newData]
                updateData.splice(index, 1)
                localStorage.setItem('anime-collections', JSON.stringify(updateData));
            }
        }
    }


    return (
        <div css={styles.body}>
            <div css={styles.main}>
                <Header />
                <div css={styles.container}>
                    <div css={styles.bundle}>
                        <Gap height={50} />
                        {!loading ? (
                            <>
                                <AnimeDetail title={anime.title.userPreferred}
                                    isAdult={anime.isAdult}
                                    coverImage={anime.coverImage.extraLarge}
                                    favourites={anime.favourites}
                                    genres={renderGenres(anime.genres)}
                                    episodes={anime.episodes}
                                    duration={anime.duration}
                                    seasonYear={anime.seasonYear}
                                    countryOfOrigin={anime.countryOfOrigin}
                                    isCollected={location !== ''}
                                    location={location}
                                    description={anime.description}
                                    onClick={() => saveToCollection()} />
                                <Gap height={50}></Gap>
                                <CarouselDetailPage items={recommendationAnime} />
                            </>
                        ) : <div />
                        }
                    </div>
                </div>
            </div>
            {isModalOpen && isNew &&
                <ModalInput
                    type={typeModal}
                    onCLickCancel={() => setIsModalOpen(false)}
                    onCLickClose={() => setIsModalOpen(false)}
                    onCLickSave={() => saveToCollection()}
                    value={title}
                    setValue={(event) => setTitle(event.target.value)}
                />
            }
            {isModalOpen && !isNew &&
                <ModalList
                    type={typeModal}
                    onCLickCancel={() => setIsModalOpen(false)}
                    onCLickClose={() => setIsModalOpen(false)}
                    onCLickSave={() => saveToCollection()}
                    value={title}
                    setValue={(event) => setTitle(event.target.value)}
                />
            }
        </div>
    )
}

export default Detail