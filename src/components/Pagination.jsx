import React, { useEffect, useState } from 'react';
import BookmarksList from "./BookmarksList";
import {fetchAllBookmarks} from "../services/api/bookmarks.js";
import paginationFromHydraView from "../services/transformers/paginationFromHydraView.js";

function Pagination(props){
const { current, first, previous, next, last, onPageChange} = props
        /*TODO Affiche la page courante */
return (
    <>
        <button onClick={() => onPageChange(first)}>first</button>
        <button onClick={() => fetchAllBookmarks({previous})}>previous</button>
        <button onClick={() => fetchAllBookmarks({next})}>next</button>
        <button onClick={() => fetchAllBookmarks({last})}>last</button>

    </>
);
        /*TODO Les boutons devront être désactivés lorsque les propriétés ne sont pas présentes.*/

}
export default Pagination;