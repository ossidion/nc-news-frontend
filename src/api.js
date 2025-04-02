import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-nc-news-app.onrender.com/api',
})

function getArticles() {
    return api.get('/articles').then(({ data }) => {
        return data.rows;
    });
}

export { getArticles };