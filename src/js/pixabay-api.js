import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const theParams = {
    key: "46556948-bd2679cce083bd479fad12d62",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    per_page: 15,
};

async function doQuery() { 
    const resp = await axios.get("", { params: theParams });

    resp.data.totalPages = Math.floor(resp.data.totalHits / theParams.per_page) + 1;
    return resp.data;
}

function searchPhotos(queryStr) { 
    theParams.page = 1;
    theParams.q = queryStr;

    return doQuery();
}

function nextPage() {
    theParams.page += 1;

    return doQuery();
 }

export { searchPhotos, nextPage }
