import { gql } from "@apollo/client";

const ANIME_LIST = gql`
    query ( $page: Int, $perPage: Int) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media {
                id
                coverImage {
                  extraLarge
                }
                description
                bannerImage
                duration
                favourites
                trending
                countryOfOrigin
                type
                episodes
                season
                isAdult
                genres
                seasonYear
                title {
                  english
                }
            }
        }
    }
`

const ANIME_DETAILS = gql`
    query ($id: Int) {
        Media(id: $id) {
            id
            coverImage {
              extraLarge
            }
            description
            bannerImage
            duration
            favourites
            trending
            countryOfOrigin
            type
            episodes
            season
            isAdult
            genres
            seasonYear
            title {
              english
            }
        }
    }
`


export const query = {
    ANIME_LIST,
    ANIME_DETAILS,
}

export default query