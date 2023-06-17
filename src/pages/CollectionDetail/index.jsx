/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Gap, Separator } from '../../components/atoms'
import { Card, Error, Footer, Header, ModalConfirmation, ModalInput } from '../../components/molecules'
import { styles } from './styles'
import { useParams } from 'react-router-dom'
import { dateFormat, isSpecialChar } from '../../utils'
import { Helmet } from 'react-helmet';

const CollectionDetail = () => {
    const params = useParams()
    const [anime, setAnime] = useState({})
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalInputOpen, setIsModalInputOpen] = useState(false)
    const [value, setValue] = useState('')
    const [title, setTitle] = useState('')
    const [id, setId] = useState(0)
    const [info, setInfo] = useState('')
    const oldData = JSON.parse(localStorage.getItem('anime-collections'))

    useEffect(() => {
        const savedData = getCollectionDataById()
        if (savedData !== null) {
            setAnime(savedData)
            setData(savedData.data)
            setIsEmpty(false)
        }
    }, [])

    const getCollectionDataById = () => {
        const savedData = JSON.parse(localStorage.getItem('anime-collections'))
        if (savedData !== null && savedData.length !== 0) {
            const tempData = savedData.filter(item => parseInt(params.id) === item.id)
            setLoading(false)
            return tempData[0]
        } else {
            return null
        }
    }

    const setTitleDeleted = (id) => {
        const temp = anime
        const index = temp.data.findIndex(item => item.id === id)
        const title = temp.data[index].title.userPreferred
        setTitle(title)
    }

    const removeAnime = () => {
        const temp = anime
        const index = temp.data.findIndex(item => item.id === id)
        const newData = temp.data
        newData.splice(index, 1)
        setData(newData.slice())

        const savedData = JSON.parse(localStorage.getItem('anime-collections'))
        const indexLocalData = savedData.findIndex(item => item.id === params.id)
        savedData.splice(indexLocalData, 1)
        const updateData = [...savedData, temp]

        localStorage.setItem('anime-collections', JSON.stringify(updateData))
        setIsModalOpen(false)
    }

    const isTitleExist = (title) => {
        const result = oldData.filter((key) => key.title === title)
        return result.length !== 0
    }


    const saveEditedData = () => {
        if (value !== '' && isSpecialChar(value)) {
            setInfo("oops, there's some special character")
        } else if (value !== '' && isTitleExist(value)) {
            setInfo(`sorry, the ${value} has been added`)
        } else {
            const oldData = JSON.parse(localStorage.getItem('anime-collections'))
            const index = oldData.findIndex(item => parseInt(params.id) === item.id)
            const temp = {
                ...oldData[index],
                title: value,
            }
            oldData.splice(index, 1)
            const updateData = [...oldData, ...[temp]]
            localStorage.setItem('anime-collections', JSON.stringify(updateData))
            setAnime(temp)
            setIsModalInputOpen(false)
            setValue('')
        }
    }

    
    return (
        <div css={styles.body}>
            <div css={styles.main}>
                <Header />
                <div css={styles.container}>
                    {!loading && !isEmpty ? (
                        <>
                            <div css={styles.headerList}>
                                <div css={styles.mainTitle}>
                                    <h1 css={styles.textTitle}>{anime.title}</h1>
                                    <Separator width={'50%'} />
                                    <p>Added At : {dateFormat(anime.date)}</p>
                                </div>
                                <button css={styles.buttonAction} onClick={() => {
                                    setInfo('')
                                    setIsModalInputOpen(true)
                                }}>
                                    <FontAwesomeIcon icon="pen" css={styles.iconPen} />
                                </button>
                            </div>
                            <Gap height={20} />
                            {data.length === 0 && <Error />}
                            <div css={styles.animeList}>
                                {data.map((item, key) => (
                                    <Card
                                        key={key}
                                        title={item.title.userPreferred}
                                        image={item.coverImage.extraLarge}
                                        episodes={item.episodes}
                                        isEdit
                                        duration={item.duration}
                                        onClick={() => {
                                            setTitleDeleted(item.id)
                                            setId(item.id)
                                            setIsModalOpen(true)
                                        }}
                                        to={`/detail/${item.id}`} />
                                ))}
                            </div>
                        </>) :
                        <>
                            <Gap height={100} />
                            <Error />
                        </>
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
                    onClickSave={() => removeAnime()}
                />
            }
            {isModalInputOpen && !isEmpty &&
                <ModalInput
                    onClickCancel={() => {
                        setValue('')
                        setIsModalInputOpen(false)
                    }}
                    onClickClose={() => {
                        setValue('')
                        setIsModalInputOpen(false)
                    }}
                    onClickSave={() => saveEditedData()}
                    value={value}
                    info={info}
                    placeholder={anime.title}
                    setValue={(event) => setValue(event.target.value)}
                />
            }
        </div>
    )
}

export default CollectionDetail