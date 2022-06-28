import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hero, Anime, Collection, Detail, CollectionDetail } from '../../pages'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Anime />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/collection-detail/:id" element={<CollectionDetail />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter >
    )
}

export default Router