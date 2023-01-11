import React, { useEffect, useState } from 'react';
import { fetchAllBookmarks } from '../services/api/bookmarks';
import BookmarkItem from './BookmarkItem';
import paginationFromHydraView from "../services/transformers/paginationFromHydraView.js";
import Pagination from "./Pagination.jsx";

function Bookmarks() {
    const [bookmarksList, setBookmarksList] = useState([]);
    const [pagination, setPagination] = useState({});

    function pageUpadte(page) {
        fetchAllBookmarks(page)
            .then((response) => {
                setBookmarksList(response['hydra:member']);
                setPagination(paginationFromHydraView(response['hydra:view']));
            });
    }

    useEffect(() => {
        pageUpadte(1)
    }, []);

    const listBookmarks = bookmarksList.map((v, i) => (
        <BookmarkItem key={v.id} data={v} />
    ));
    console.log(pagination, bookmarksList);
    return <>
        <div>{listBookmarks}</div>
        <Pagination {...pagination} onPageChange={(page) => {pageUpadte(page)}} />
        </>
        ;
}

export default Bookmarks;