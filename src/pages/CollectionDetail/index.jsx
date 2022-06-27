/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Gap, Separator } from '../../components/atoms'
import { Card, Header, ModalInput } from '../../components/molecules'
import { useQuery } from '@apollo/client/react'
import query from '../../config/GraphQl/query'
import { styles } from './styles'
import { useParams } from 'react-router-dom'

const CollectionDetail = () => {
    const params = useParams()
    const [anime, setAnime] = useState({})
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [value, setValue] = useState('')


    useEffect(() => {
        setAnime(getCollectionDataById())
        setData(getCollectionDataById().data)
    }, [])


    const getCollectionDataById = () => {
        const savedData = JSON.parse(localStorage.getItem('anime-collections'))
        const tempData = savedData.filter(item => parseInt(params.id) === item.id)
        setLoading(false)
        return tempData[0]
    }

    const dateFormat = (date) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'Desember'
        ]

        const dateParsed = new Date(date)
        const monthName = months[dateParsed.getMonth()]

        const timeParse = date.split('T')
        const timeParsed = timeParse[0]

        const year = timeParsed.split('-')[0]
        const newDate = timeParsed.split('-')[2]

        return `${newDate} ${monthName} ${year}`
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
        if (value !== '') {
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
        }
    }

    return (
        <div css={styles.body}>
            <div css={styles.main}>
                <Header />
                <div css={styles.container}>
                    {!loading && (
                        <>
                            <div css={styles.headerList}>
                                <div css={styles.mainTitle}>
                                    <h1 css={styles.textTitle}>{anime.title}</h1>
                                    <p>Added At : {dateFormat(anime.date)}</p>
                                </div>
                                <button css={styles.buttonAction} onClick={() => setIsModalOpen(true)}>
                                    <FontAwesomeIcon icon="pen" css={styles.iconPen} />
                                </button>
                            </div>
                            <Gap height={20}></Gap>
                            <div css={styles.animeList}>
                                {data.map((item, key) => (
                                    <Card
                                        key={key}
                                        title={item.title.userPreferred}
                                        image={item.coverImage.extraLarge}
                                        episodes={item.episodes}
                                        duration={item.duration}
                                        onClick={() => removeAnime(item.id)}
                                        to={`/detail/${item.id}`} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
            {isModalOpen &&
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
                    placeholder={anime.title}
                    setValue={(event) => setValue(event.target.value)}
                />
            }
        </div>
    )
}

export default CollectionDetail