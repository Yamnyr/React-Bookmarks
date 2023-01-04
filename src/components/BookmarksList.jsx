import React, { useEffect, useState } from 'react';
import { fetchAllBookmarks } from '../services/api/bookmarks';
import BookmarkItem from './BookmarkItem';

function Bookmarks() {
    const [bookmarksList, setBookmarksList] = useState([]);
    const [pagination, setPagination] = useState([])

    useEffect(() => {
        fetchAllBookmarks()
            .then((response) => {
                setBookmarksList(response['hydra:member']);
            });
    }, [bookmarksList]);

    const listBookmarks = bookmarksList.map((v, i) => (
        <BookmarkItem key={v.id} data={v} />
    ));
    console.log(bookmarksList);
    return <div>{listBookmarks}</div>;
}

export default Bookmarks;