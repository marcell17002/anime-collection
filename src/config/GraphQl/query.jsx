import { gql } from "@apollo/client";

const ANIME_DETAILS = gql`
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
                title {
                    romaji
                }
            }
        }
    }
`

export const query = {
    ANIME_DETAILS
}

export default query