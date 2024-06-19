<script>
import img1 from '../assets/img/news-bike3.jpg';
import img2 from '../assets/img/news-bike4.jpg';
import img3 from '../assets/img/news-bike5.jpg';
import img4 from '../assets/img/news-bike6-373x223.jpg';

export default {
    data() {
        return {
            articles: [
                {
                    image: img1,
                    title: 'How much should you cycle in a day?',
                    date: '22-06-2022 - bike',
                    description: 'In order to get the right benefit from the exercise [...]',
                },
                {
                    image: img2,
                    title: 'Road bike or mountain bike?',
                    date: '22-06-2022 - bike',
                    description: 'It takes 5 Km and 10 minutes, sir. But at [...]',
                },
                {
                    image: img3,
                    title: 'Road bike or mountain bike?',
                    date: '22-06-2022 - bike',
                    description: 'Compared to similar road bikes with a solid frame structure, [...]',
                },
                {
                    image: img4,
                    title: 'Wath is mountain biking called?',
                    date: '22-06-2022 - bike',
                    description: 'Mountain biking is one of the most popular outdoor sports, [...]',
                }
            ],
        };
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
            <article v-for="(article, index) in articles" :key="index" class="article-card">
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
