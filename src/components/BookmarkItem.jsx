import React, { useEffect, useState } from 'react';
import { avatarUrl } from '../services/api/bookmarks';

function BookmarkItem({ data }) {
    const [avatarURL, setAvatarURL] = useState();

    useEffect(() => {
        setAvatarURL(avatarUrl(data.owner.id));
    }, [data]);

    return (
        <a href={data.url}>
            <div className={'b'}>
                {data.name}
                <img className="fit-picture" src={avatarURL} />
            </div>
        </a>
    );
}
export default BookmarkItem;