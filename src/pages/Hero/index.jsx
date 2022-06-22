import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useQuery } from "@apollo/client";
import query from '../../config/GraphQl/query';

const Hero = () => {
    const { loading, error, data } = useQuery(query.ANIME_DETAILS, { variables: { page: 1, perPage: 10 } })
    const [anime, setAnime] = useState(data)
    console.log('datas', data)
    return (
        <div>
            <li><NavLink to="/collection">Collection</NavLink></li>
        </div>
    )
}

export default Hero