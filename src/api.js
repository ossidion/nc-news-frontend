import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-nc-news-app.onrender.com/api',
})

function getArticles() {
    return api.get('/articles').then(({ data }) => {
        return data.rows;
    });
}

function getArticleById(id) {
    return api.get(`/articles/${id}`)
    .then((article) => {
        return article.data
    })
}

function getComments(id) {
    return api.get(`/articles/${id}/comments`)
    .then((comments) => {
        return comments.data
    })
}

export { getArticles, getArticleById, getComments };