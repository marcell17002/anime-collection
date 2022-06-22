import React from 'react'
import { useParams } from 'react-router-dom'

const CollectionDetail = () => {
    const params = useParams()
    console.log('datas', params)
    return (
        <div>CollectionDetail</div>
    )
}

export default CollectionDetail