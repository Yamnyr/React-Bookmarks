import React, { useEffect, useState } from 'react';
import BookmarksList from "./BookmarksList";
import {fetchAllBookmarks} from "../services/api/bookmarks.js";
import paginationFromHydraView from "../services/transformers/paginationFromHydraView.js";

function Pagination(props){
const { current, first, previous, next, last, onPageChange} = props
return (
    <>

        <button onClick={() => onPageChange(first)} disabled={current === first}>first</button>
        <button onClick={() => onPageChange(previous)} disabled={current === first}>previous</button>
        <button onClick={() => onPageChange(next)} disabled={current === last}>next</button>
        <button onClick={() => onPageChange(last)} disabled={current === last}>last</button>

    </>
);

}
export default Pagination;