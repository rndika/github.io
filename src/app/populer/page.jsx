"use client"

import react, { useEffect, useState } from 'react';
import HeaderMenu from '@/components/utilities/HeaderMenu';
import Pagination from '@/components/utilities/Pagination';
import AnimeList from '@/components/AnimeList';
import { getAnimeResponse } from '@/libs/api-libs';

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(populerAnime)
    
    }

    useEffect (() => {
        fetchData()
    }, [page])

    
    return (
        <>
        <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
        <AnimeList api={topAnime}/>
        <Pagination 
        page={page} 
        lastPage={topAnime.Pagination?.last_visible_page}
        setPage={setPage}
        />
        </>
    );
};

export default Page