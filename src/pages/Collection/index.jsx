/** @jsxImportSource @emotion/react */
import { Gap } from '../../components/atoms'
import { TopTrending, CarouselCollectionPage, Header, ModalInput, Footer, Error, ModalConfirmation } from '../../components/molecules'
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { query } from '../../config';
import { isSpecialChar } from '../../utils';

const Collection = () => {
    const [randomId, setRandomId] = useState(() =>
        Math.floor(Math.random() * 10000)
    )
    const [recommendationAnime, setRecommendationAnime] = useState([])
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalInputOpen, setIsModalInputOpen] = useState(false)
    const [value, setValue] = useState('')
    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')
    const [placeholder, setPlaceholder] = useState('')
    const [info, setInfo] = useState('')
    const [isEmpty, setIsEmpty] = useState(true)
    const oldData = JSON.parse(localStorage.getItem('anime-collections'))

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
        const result = getCollectionData()
        if (result !== null && result.length !== 0) {
            setData(result)
            setIsEmpty(false)
        }
    }, [])


    const getCollectionData = () => {
        const result = JSON.parse(localStorage.getItem('anime-collections'))
        return result
    }

    const setTitleDeleted = (id) => {
        const oldData = JSON.parse(localStorage.getItem('anime-collections'))
        const index = oldData.findIndex(item => id === item.id)
        const data = oldData[index].title
        setTitle(data)
    }

    const deleteCollection = () => {
        const oldData = JSON.parse(localStorage.getItem('anime-collections'))
        const index = oldData.findIndex(item => id === item.id)
        const updateData = oldData
        updateData.splice(index, 1)
        setData(updateData)
        localStorage.setItem('anime-collections', JSON.stringify(updateData))
        setIsModalOpen(false)
    }

    const isTitleExist = (title) => {
        const result = oldData.filter((key) => key.title === title)
        return result.length !== 0
    }

    const editCollection = () => {
        if (value !== '' && isSpecialChar(value)) {
            setInfo("oops, there's some special character")
        } else if (value !== '' && isTitleExist(value)) {
            setInfo(`sorry, the ${value} has been added`)
        } else {
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
            setIsModalInputOpen(false)
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
                        to={`/detail/${recommendationAnime.id}`}

                    />}
                    <Gap height={50} />
                    {isEmpty ? <Error /> :
                        data.map((item, key) => (
                            <CarouselCollectionPage
                                key={key}
                                items={item.data}
                                label={item.title}
                                onClickEdit={() => {
                                    setInfo('')
                                    setIsModalInputOpen(true)
                                    setId(item.id)
                                    setPlaceholder(item.title)
                                }}
                                onClickDelete={() => {
                                    setId(item.id)
                                    setTitleDeleted(item.id)
                                    setIsModalOpen(true)
                                }}
                                to={`/collection-detail/${item.id}`}
                            />
                        ))
                    }
                </div>
                <Footer />
            </div>
            {isModalOpen && !isEmpty &&
                <ModalConfirmation
                    value={title}
                    onClickCancel={() => {
                        setIsModalOpen(false)
                    }}
                    onClickClose={() => {
                        setIsModalOpen(false)
                    }}
                    onClickSave={() => deleteCollection()}
                />
            }
            {isModalInputOpen && !isEmpty &&
                <ModalInput
                    placeholder={placeholder}
                    onClickCancel={() => {
                        setValue('')
                        setIsModalInputOpen(false)
                    }}
                    onClickClose={() => {
                        setValue('')
                        setIsModalInputOpen(false)
                    }}
                    onClickSave={() => editCollection()}
                    value={value}
                    info={info}
                    setValue={event => setValue(event.target.value)}
                />
            }
        </div>
    )
}

export default Collection