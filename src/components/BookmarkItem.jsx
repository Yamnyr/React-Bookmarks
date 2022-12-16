import React, {useEffect, useState} from "react";
import {fetchAllBookmarks} from "../services/api/bookmarks.js";

function BookmarkItem() {
    const [avatarURL, setAvatarURL] = useState('')

    useEffect(() => {
        setAvatarURL(avatarURL(data.owner.id))
    }, [data])


    return (
        <div>
            <img className="fit_picture" src={avatarURL}/>
            {data.name}
        </div>
    );
}
export default BookmarkItem;