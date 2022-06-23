import React from 'react'
import { Router } from '../config'
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import '../utils/fontAwesome'

const uri = 'https://graphql.anilist.co'
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri,
    fetchOptions: {
      method: "POST"
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}

export default App