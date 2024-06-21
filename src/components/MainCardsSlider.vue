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
    startSlider() {
            for(let k = 0; k <= 1; k++) {
                for(let i = 0; i <= 4; i++) {
                    this.sliderVisible.push(store.slidesObject[i]);
                }
            }
            console.log(this.sliderVisible);
    },
    moveToEnd: function(arr, index) {
        if (index >= 0 && index < arr.length) {
            const [element] = arr.splice(index, 1);
            arr.push(element);
        }
    },
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
                <img :src="item.image" alt="">
            </div>
        </article>
    </section>
    
    <div class="thumbs" >
                    <button class="prev" @click="scrollLeft"><i class="fa-solid fa-chevron-left"></i></button>
                    
                    <button class="next" @click="scrollRight" ><i class="fa-solid fa-chevron-right"></i></button>
    </div>

<!-- <section>
        <ul>
            <li v-for="card in sliderVisible">
                <img :src="card.text" alt="">
                <p>{{ card.name }}</p>
            </li>
        </ul>
    </section>  -->
    
    
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
.item{
    margin: 1rem;
    width: 100%;
    img{
        border: 3px solid black;
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