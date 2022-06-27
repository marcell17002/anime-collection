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
    const [value, setValue] = useState('')
    const [typeModal, setTypeModal] = useState('input')
    const [isNew, setIsNew] = useState(true)
    const [location, setLocation] = useState('')
    const [info, setInfo] = useState('')
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
        let id = null
        const index = oldData.map((item) => {
            return item.data.filter((key) => key.id === parseInt(params.id))
        })
        index.map((item, key) => {
            if (item.length !== 0) id = key;
        })

        const location = id !== null ? oldData[id].title : ''
        setLocation(location)
    }

    const hadSpecialChar = (payload) => {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
        return format.test(payload)
    }

    const saveToCollection = () => {
        setIsModalOpen(true)
        const date = new Date().toISOString()
        if (value !== '') {
            if (!hadSpecialChar(value)) {
                const newData = [{
                    id: Math.floor(Math.random() * 1000),
                    title: value,
                    data: [anime],
                    date
                }]
                const updateData = [...oldData, ...newData]
                console.log('save as new', updateData)
                localStorage.setItem('anime-collections', JSON.stringify(updateData));
                setValue('')
                setIsModalOpen(false)

            } else {
                setInfo("oops, there's some special character")
            }
        } else {
            const index = oldData.findIndex((item) => title === item.title)
            console.log('datas', index, title)
            const dataAnime = [...oldData[index].data, anime]
            const newData = [{
                id: Math.floor(Math.random() * 1000),
                title: title,
                data: dataAnime,
                date
            }]
            const updateData = [...oldData, ...newData]
            updateData.splice(index, 1)
            localStorage.setItem('anime-collections', JSON.stringify(updateData))
            setIsModalOpen(false)
        }
    }


    const saveNewCollection = () => {
        setIsModalOpen(true)
        const date = new Date().toISOString()
        const newData = [{
            id: Math.floor(Math.random() * 1000),
            title: title,
            data: [anime],
            date
        }]

        console.log('datas', newData)
        if (title !== '') {
            localStorage.setItem('anime-collections', JSON.stringify(newData))
            setTitle('')
            setIsModalOpen(false)
            setIsNew(false)
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
                                    onClick={() => setIsModalOpen(true)} />
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
                    onClickCancel={() => { setIsModalOpen(false); setTitle('') }}
                    onClickClose={() => { setIsModalOpen(false); setTitle('') }}
                    onClickSave={() => saveNewCollection()}
                    value={title}
                    info={info}
                    setValue={(event) => setTitle(event.target.value)}
                />
            }
            {isModalOpen && !isNew &&
                <ModalList
                    type={typeModal}
                    onClickCancel={() => { setIsModalOpen(false); setTitle('') }}
                    onClickClose={() => { setIsModalOpen(false); setTitle('') }}
                    onClickSave={() => saveToCollection()}
                    emitId={(value) => {
                        setValue('')
                        setTitle(value)
                    }}
                    value={value}
                    info={info}
                    items={oldData}
                    setValue={(event) => setValue(event.target.value)}
                />
            }
        </div>
    )
}

export default Detail