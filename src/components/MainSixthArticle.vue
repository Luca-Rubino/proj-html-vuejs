<script>
import {store} from '../store.js';


export default {

    data() {
        return {
            store,
        }
    },
};
</script>


<template>
    <div class="big-container">
        <div class="bg">
            <h1>Resent New & Articles</h1>
            <p>Important information about bikes</p>
        </div>
        <div class="articles-container">
            <article v-for="(article, index) in store.articles" :key="index" class="article-card">
                <img :src="article.image" :alt="article.title">
                <p class="data">{{ article.date }}</p>
                <h3 id="font">{{ article.title }}</h3>
                <p class="text-left" id="margin-b">{{ article.description }}</p>
                <button>More</button>
            </article>
        </div>
    </div>
    
</template>


<style lang="scss" scoped>
.big-container{
    margin-bottom: 5rem;
    background-color: #fbfbfb;
}

.text-left{
    text-align: left;
}

.bg {
    text-align: center;
    margin-bottom: 2rem;
}

#font{
    font-weight: bolder;
    margin-bottom: 2rem;
}

#margin-b{
    margin-bottom: 2rem;
}

h1 {
    margin-bottom: 1rem;
}

.articles-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.article-card {
    text-align: center;
    background: #fff;
    padding: 1.2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width:calc(100%/5);
}

.article-card img {
    width: 100%;
}

.article-card h3 {
    margin: 1rem 0 0.5rem;
    font-size: 1.2rem;
}

.article-card p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #555;
}

.article-card button {
    background: #000;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    padding: 1.2rem;
    width: 6rem;
    font-size: .9rem;
    font-weight: bold;
}

.article-card button:hover {
    background: #333;
}
</style>
