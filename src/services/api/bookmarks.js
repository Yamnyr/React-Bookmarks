import {useState} from "react";

const BASE_URL = "http://bookmarks-api";
const API_URL = `${BASE_URL}/api`;

export async function fetchAllBookmarks() {
   return fetch(`${API_URL}/bookmarks`)
       .then((response) => response.json())
}

export async function avaterURL(userid) {
   return `${API_URL}/users/${userid}/avatar`;
}
export default {
   fetchAllBookmarks,
};
