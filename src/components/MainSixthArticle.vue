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
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2,
            };
            const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

            card.style.transform = `
        rotate3d(
            ${center.y / 100},
            ${-center.x / 100},
        0,
          ${Math.log(distance) * 2}deg
        )
    `;

            card.querySelector('.glow').style.backgroundImage = `
        radial-gradient(
            circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
            #ffffff55,
            #0000000f
        )
    `;
        }

        cards.forEach((card) => {
            card.addEventListener('mouseenter', (e) => {
                bounds = card.getBoundingClientRect();
                card.addEventListener('mousemove', rotateToMouse);
            });

            card.addEventListener('mouseleave', (e) => {
                card.removeEventListener('mousemove', rotateToMouse);
                card.style.transform = '';
                card.querySelector('.glow').style.backgroundImage = '';
            });
        });
    },
};
</script>


<template>
    <div class="big-container">
        <div class="bg">
            <h1>Recent News & Articles</h1>
            <p>Important information about bikes</p>
        </div>
        <div class="articles-container">
            <article v-for="(article, index) in store.articles" :key="index" class="article-card card">
                <div class="glow"></div>
                <img :src="article.image" :alt="article.title" />
                <p class="data">{{ article.date }}</p>
                <h3 id="font">{{ article.title }}</h3>
                <p class="text-left" id="margin-b">{{ article.description }}</p>
                <button>More</button>
            </article>
        </div>
    </div>
</template>


<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

body {
    font-family: system-ui, sans-serif;
    perspective: 1500px;
    background: linear-gradient(white, #efefef);
}

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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: calc(100% / 5);
    position: relative;
    transition-duration: 300ms;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
    transform: rotate3d(0);
}

.article-card:hover {
    transition-duration: 150ms;
    box-shadow: 0 5px 20px 5px #00000044;
}

.article-card .glow {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
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
