<script>
import {store} from '../store.js';

export default{
    data() {
        return{
            store,
            sliderVisible: [],
            scrollInterval: null,
        }
    },

    methods: {
        /* inizializzo lo slider con il doppio delle immagini per una corretta visualizzazione iniziale */
    startSlider() {
            for(let k = 0; k <= 1; k++) {
                for(let i = 0; i <= 4; i++) {
                    this.sliderVisible.push(store.slidesObject[i]);
                }
            }
            console.log(this.sliderVisible);
    },
    /* inserisco l'elemento successivo per poterlo visualizzare con uno scrollright */
    moveToEnd: function(arr, index) {
        if (index >= 0 && index < arr.length) {
            const [element] = arr.splice(index, 1);
            arr.push(element);
        }
    },
    /* inserisco l'elemento successivo (all'inizio dell'array) per poterlo visualizzare con uno scrollleft */
    moveToStart: function(arr, index) {
        if (index >= 0 && index < arr.length) {
            const [element] = arr.splice(index, 1);
            arr.unshift(element);
        }
    },
    scrollRight: function() {
        const container = this.$refs.toScrollEl;
        let scrollWidth = 324;

        container.scrollBy({ left: scrollWidth, behavior: 'smooth' });

        setTimeout(() => {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - scrollWidth) {
                this.moveToEnd(this.sliderVisible, 0);
                this.$nextTick(() => {
                    container.scrollBy({ left: -scrollWidth, behavior: 'auto' });
                });
            }
        }, 1000);
    },
    scrollLeft: function() {
        const container = this.$refs.toScrollEl;
        let scrollWidth = 324;

        container.scrollBy({ left: -scrollWidth, behavior: 'smooth' });

        setTimeout(() => {
            if (container.scrollLeft <= 0) {
                this.moveToStart(this.sliderVisible, this.sliderVisible.length - 1);
                this.$nextTick(() => {
                    container.scrollBy({ left: scrollWidth, behavior: 'auto' });
                });
            }
        }, 1000);
        },
        handleWheel(event) {
            event.preventDefault();
        }
},
    created() {
        this.startSlider();
    },
    beforeDestroy() {
        clearInterval(this.scrollInterval);
        const container = this.$refs.toScrollEl;
        container.removeEventListener('wheel', this.handleWheel);
    }
}

</script>

<template>
    <section class="container" ref="toScrollEl" >
        <article v-for="(item, index) in sliderVisible" :key="index">
            <div class="item">
                <p class="posizionItemText">{{ item.name }}</p>
                <img :src="item.image" alt="">
                <span class="tagText">View</span>
            </div>
        </article>
    </section>
    
    <div class="thumbs" >
                    <button class="prev" @click="scrollLeft"><i class="fa-solid fa-chevron-left"></i></button>
                    
                    <button class="next" @click="scrollRight" ><i class="fa-solid fa-chevron-right"></i></button>
    </div>

</template>

<style lang="scss" scoped>

@use '../styles/general.scss';
section::-webkit-scrollbar{
}
section{
        width: 80vw;
        display: flex;
        flex-direction: row;
        max-width: 1300px;
        overflow: scroll;
        scrollbar-width: none;
        position: relative;
        margin: 0 auto;
}
.tagText{
    display: none;
    padding: .5rem 1.5rem;
    background-color: black;
    color: white;
    position: absolute;
    bottom: 3%;
    left: 3%;
    
}
.posizionItemText{
    position: absolute;
    top: 4%;
    left: 5%;
    color: white;
    font-size: 1.5rem;
    font-weight: 900;
    z-index: 5;
}
.item{
    margin: 1rem;
    width: 100%;
    position: relative;
    img{
        border: 3px solid black;
    }
        &:hover > .tagText{
                display: inline;
        }
        &:hover > img{
            filter: grayscale(50%);
        }
}

.thumbs{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
        button{
            padding: 1.5rem;
            background-color: white;
            margin: 1rem;
        }
}

@media (max-width: 1600px) {
    section{
        max-width: 970px;
    }
}

</style>