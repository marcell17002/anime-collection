/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Gap, Separator } from '../../components/atoms'
import { Card, Error, Footer, Header, ModalInput } from '../../components/molecules'
import { useQuery } from '@apollo/client/react'
import query from '../../config/GraphQl/query'
import { styles } from './styles'
import { useParams } from 'react-router-dom'
import { dateFormat } from '../../utils'

const CollectionDetail = () => {
    const params = useParams()
    const [anime, setAnime] = useState({})
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [value, setValue] = useState('')
    const [info, setInfo] = useState('')


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
        if (savedData !== null) {
            const tempData = savedData.filter(item => parseInt(params.id) === item.id)
            setLoading(false)
            return tempData[0]
        } else {
            return null
        }

    }


    const hadSpecialChar = (payload) => {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
        return format.test(payload)
    }


    const removeAnime = (id) => {
        const temp = anime
        const index = temp.data.findIndex(item => item.id === id)
        temp.data.splice(index, 1)
        setData(temp.data)

        const savedData = JSON.parse(localStorage.getItem('anime-collections'))
        const indexLocalData = savedData.findIndex(item => item.id === params.id)
        savedData.splice(indexLocalData, 1)
        const updateData = [...savedData, temp]

        localStorage.setItem('anime-collections', JSON.stringify(updateData))
    }

    const saveEditedData = () => {
        if (value !== '' && !hadSpecialChar(value)) {
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
            setIsModalOpen(false)
        } else {
            setInfo("oops, there's some special character")

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
                                    <p>Added At : {dateFormat(anime.date)}</p>
                                </div>
                                <button css={styles.buttonAction} onClick={() => {
                                    setInfo('')
                                    setIsModalOpen(true)
                                }}>
                                    <FontAwesomeIcon icon="pen" css={styles.iconPen} />
                                </button>
                            </div>
                            <Gap height={20} />
                            <div css={styles.animeList}>
                                {data.map((item, key) => (
                                    <Card
                                        key={key}
                                        title={item.title.userPreferred}
                                        image={item.coverImage.extraLarge}
                                        episodes={item.episodes}
                                        isEdit
                                        duration={item.duration}
                                        onClick={() => removeAnime(item.id)}
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
                <ModalInput
                    onClickCancel={() => {
                        setValue('')
                        setIsModalOpen(false)
                    }}
                    onClickClose={() => {
                        setValue('')
                        setIsModalOpen(false)
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