import { getActiveTabURL } from "./utils.js";

const addNewBookmark = () => {};

const viewBookmarks = () => {};

const onPlay = e => {};

const onDelete = e => {};

const setBookmarkAttributes =  () => {};

document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getActiveTabURL();
    const queryParameters = activeTab.url.split("?")[1];
    const urlParameters = URLSearchParams(queryParameters);
    const currentVideo = urlParameters.get("v");

    if(activeTab.url.includes("youtube.com/watch") && currentVideo)
    {
        chrome.storage.sync.get([currentVideo],(data) => {
            const currentVideoBookmarks = data[currentVideo] ? JSON.parse(data[currentVideo]) : [];

            // viewBookmarks function 
        })     
    }
    else
    {
        const container = document.getElementsByClassName("container")[0];
        container.innerHTML = '<div class = "title">This is not a YouTube video page</div>'
    }
});
