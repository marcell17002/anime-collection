/** @jsxImportSource @emotion/react */
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useParams, useNavigate,useLocation } from 'react-router-dom';
import { Gap } from '../../components/atoms';
import { AnimeDetail, CarouselDetailPage, Footer, Header, ModalInput, ModalList } from '../../components/molecules';
import { styles } from './styles';
import { query } from '../../config/GraphQl'
import { isSpecialChar, parseStringwithComma } from '../../utils';
import { Helmet } from 'react-helmet';

const Detail = () => {
    const params = useParams()
    const navigate = useNavigate()
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
    const [parentId, setParentId] = useState(0)
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

    useEffect(() => {
        if (oldData === null) {
            setTypeModal('input')
            setIsNew(true)
        }
        else {
            setIsNew(false)
            setTypeModal('list')
            getParentData()
        }
    }, [anime])

    const isTitleExist = (title) => {
        const result = oldData.filter((key) => key.title === title)
        return result.length !== 0
    }

    const getParentData = () => {
        let id = null
        const index = oldData.map((item) => {
            return item.data.filter((key) => key.id === parseInt(params.id))
        })
        index.map((item, key) => {
            if (item.length !== 0) id = key;
        })
        const location = id !== null ? oldData[id].title : ''
        const parentId = id !== null ? oldData[id].id : ''
        setLocation(location)
        setParentId(parentId)
    }


    const saveToCollection = () => {
        setIsModalOpen(true)
        const date = new Date().toISOString()
        if (value !== '') {
            if (isTitleExist(value)) {
                setInfo(`sorry, the ${value} has been added`)
            } else if (isSpecialChar(value)) {
                setInfo("oops, there's some special character")
            } else {
                const newData = [{
                    id: Math.floor(Math.random() * 1000),
                    title: value,
                    data: [anime],
                    date
                }]
                const updateData = [...oldData, ...newData]
                localStorage.setItem('anime-collections', JSON.stringify(updateData));
                setValue('')
                setIsModalOpen(false)
            }
        } else {
            const index = oldData.findIndex((item) => title === item.title)
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


        if (title !== '') {
            localStorage.setItem('anime-collections', JSON.stringify(newData))
            setTitle('')
            setIsModalOpen(false)
            setIsNew(false)
        }
    }


    const [head,setHead]=useState({
        meta_title:'testing',
        meta_description:'testing'
    })

    useEffect(() => {
        fetch(`https://api.sslpots.com/api/meta-seos/?filters[master_model][model_code][$contains]=sigra`)
        .then((response) => response.json())
        .then((actualData) => setHead(actualData.data[0].attributes));
    }, []);


    return (
        <div css={styles.body}>
             <Helmet>
                <title>{head?.meta_title}</title>
                <meta name="description" content={head?.meta_description} />
                <meta name="keywords" content="anime, japan, cartoon" />
            </Helmet>
            <div css={styles.main}>
                <Header />
                <div css={styles.container}>
                    <div css={styles.bundle}>
                        {!loading &&
                            <>
                                <AnimeDetail title={anime.title.userPreferred}
                                    isAdult={anime.isAdult}
                                    coverImage={anime.coverImage.extraLarge}
                                    favourites={anime.favourites}
                                    genres={parseStringwithComma(anime.genres)}
                                    episodes={anime.episodes}
                                    duration={anime.duration}
                                    seasonYear={anime.seasonYear}
                                    countryOfOrigin={anime.countryOfOrigin}
                                    isCollected={location !== ''}
                                    location={location}
                                    description={anime.description}
                                    onClickSave={() => setIsModalOpen(true)}
                                    onClickCollected={() => navigate(`/collection-detail/${parentId}`)}
                                />
                                <Gap height={50} />
                                <CarouselDetailPage items={recommendationAnime} />
                            </>
                        }
                    </div>
                </div>
                <Footer />
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