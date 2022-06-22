import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Collection, Hero, Detail, CollectionDetail } from '../../pages'

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/collection-detail/:id" element={<CollectionDetail />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </HashRouter >
    )
}

export default Router