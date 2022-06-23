/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import { useQuery } from "@apollo/client";
import query from '../../config/GraphQl/query';
import { Header, Card } from '../../components/molecules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = () => {
    const { loading, error, data } = useQuery(query.ANIME_DETAILS, { variables: { page: 1, perPage: 10 } })
    const [anime, setAnime] = useState(data)

    const container = css({
        margin: '0px 50px',
    })


    const iconCheck = css({
        color: 'red',
        fontSize: 20
    })


    return (
        <div>
            <Header />
            <div css={container}>
                <Card />
                <FontAwesomeIcon icon="check-square" css={iconCheck} />
                <h2>dasdsa</h2>
            </div>

        </div>
    )
}
export default Hero