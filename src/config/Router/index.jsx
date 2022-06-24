import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Collection, Hero, Detail, CollectionDetail } from '../../pages'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Hero />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/collection-detail/:id" element={<CollectionDetail />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter >
    )
}

export default Router