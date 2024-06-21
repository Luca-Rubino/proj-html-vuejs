<template>
    <div class="big-container">
        <div class="bg">
            <h1>Recent News & Articles</h1>
            <p>Important information about bikes</p>
        </div>
        <div class="articles-container">
            <article v-for="(article, index) in store.articles" :key="index" class="article-card card">
                <img :src="article.image" :alt="article.title" />
                <p class="data">{{ article.date }}</p>
                <h3 id="font">{{ article.title }}</h3>
                <p class="text-left" id="margin-b">{{ article.description }}</p>
                <button id="cursor">More</button>
            </article>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        };
    },
    mounted() {
        const cards = document.querySelectorAll('.card');
        let bounds;

        function rotateToMouse(e) {
            const card = e.currentTarget;
            const mouseX = e.clientX - bounds.left;
            const mouseY = e.clientY - bounds.top;
            const centerX = bounds.width / 2;
            const centerY = bounds.height / 2;
            const rotateX = (mouseY - centerY) / centerY * 14;
            const rotateY = (mouseX - centerX) / centerX * 14;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }

        cards.forEach((card) => {
            card.addEventListener('mouseenter', (e) => {
                bounds = card.getBoundingClientRect();
                card.style.transition = 'transform 0.1s ease';
                card.addEventListener('mousemove', rotateToMouse);
            });

            card.addEventListener('mouseleave', (e) => {
                card.style.transition = 'transform 0.5s ease';
                card.style.transform = 'rotateX(0) rotateY(0)';
                card.removeEventListener('mousemove', rotateToMouse);
            });
        });
    },
};
</script>

<style lang="scss" scoped>
.big-container {
    margin-bottom: 5rem;
    background-color: #fbfbfb;
}

.text-left {
    text-align: left;
}

.bg {
    text-align: center;
    margin-bottom: 2rem;
}

#font {
    font-weight: bolder;
    margin-bottom: 2rem;
}

#margin-b {
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
    border-radius: 8px;
    width: calc(100% / 5);
    position: relative;
    transition: transform 0.3s ease-out;
    transform: rotate3d(0);
    box-shadow: 0 0 10px #f2f2f2,
        0 0 20px #f4f4f4,
        0 0 30px #f6f6f6;
}

.article-card:hover {
    cursor: pointer;
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
    font-size: 0.9rem;
    font-weight: bold;
}

.article-card button:hover {
    background: #333;
}
</style>
