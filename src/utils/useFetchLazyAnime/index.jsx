import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import query from "../../config/GraphQl/query";


const useFetchLazyAnime = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const coins = localStorage.getItem('coinsInfo');
        if (coins) {
            setCoins(JSON.parse(coins));
        }
    }, []);

    const [getData, { loading, error }] = useLazyQuery(query.ANIME_DETAILS, {
        variables: { page: 1, perPage: 2 },
        onCompleted: (data) => {
            console.log('isi data', data)
            // const hasSameCoin = coins.some((f) => f.id === data.Page.media[0]?.id);
            // if (data.Page.media.length && !hasSameCoin) {
            //     const allCoins = [...coins, data.Page.media[0]];
            //     setCoins(allCoins);
            //     localStorage.setItem('coinsInfo', JSON.stringify(allCoins));
            // } else if (data.Page.media.length <= 0) {
            //     console.log('not found')
            // }
            // if (hasSameCoin) {
            //     console.log('exist')
            // }
        }
    });

    return { coins, setCoins, getData, loading, error };
};

export default useFetchLazyAnime