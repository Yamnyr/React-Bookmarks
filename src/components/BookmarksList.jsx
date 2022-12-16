import React, {useEffect, useState} from "react";
import {fetchAllBookmarks} from "../services/api/bookmarks.js";
import BookmarkItem from "./BookmarkItem.jsx";

function Bookmarks(){
    const [bookmarksList, setBookmarksList] = useState([])

    useEffect(() => {
        fetchAllBookmarks()
            .then((response) => {
                setBookmarksList(response["hydra:member"])
            });
    }, [bookmarksList])

    const listBookmarks = bookmarksList.map((v, i) => (
        <BookmarkItem key={i} data={v}></BookmarkItem>
    ));
    console.log(bookmarksList);
    return <div>{listBookmarks}</div>;
}

export default Bookmarks;