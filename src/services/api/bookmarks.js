import {useState} from "react";

const BASE_URL = "http://bookmarks-api";
const API_URL = `${BASE_URL}/api`;

export async function fetchAllBookmarks() {
   return fetch(`${API_URL}/bookmarks`)
       .then((response) => response.json())
}

export function avatarUrl(userid) {
   return `${API_URL}/users/${userid}/avatar`;
}
export default {
   fetchAllBookmarks,
};
