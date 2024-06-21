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

    methods:{
        startSlider(){
            for(let k=0; k <=1;k++ ){
                for(let i = 0; i <= 4; i++){
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
        scrollRight: function() {
            const container = this.$refs.toScrollEl;
            let scrollWidth = 352;

            container.scrollBy({ left: scrollWidth, behavior: 'smooth' });

            setTimeout(() => {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - scrollWidth) {
                    this.moveToEnd(this.feedbacks, 0);
                    this.$nextTick(() => {
                        container.scrollBy({ left: -scrollWidth, behavior: 'auto' });
                    });
                }
            }, 1000);
        },
        startScrolling: function(){
            this.scrollInterval = setInterval(() => {
                this.scrollRight();
            }, 1000);
        },
        handleWheel(event) {
            event.preventDefault();
        }
},
created(){
        this.startSlider();
    },
    mounted(){
        this.startScrolling();
        const container = this.$refs.toScrollEl;
        container.addEventListener('wheel', this.handleWheel);
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
    <!-- <section>
        
            <div class="title-slides">
                <h2>Our Professional Cycling Trainings</h2>
                <p>Learn from the mountain biking expert.</p>
            </div>
            <div class="container">
                <div class="slider-wrapper">
                    
                    <div class="item" v-for="slide, index in sliderVisible" :key="index">
                        <div class="text">
                            <h3>{{ slide.name}}</h3>
                        </div>
                        <img :src="slide.image" :alt="slide.name"/>
                    </div>
                    
                </div>
            </div>

        
    </section> -->
    <div class="thumbs" >
                    <button class="prev" @click="prevSlide"><i class="fa-solid fa-chevron-left"></i></button>
                    
                    <button class="next" @click="nextSlide" ><i class="fa-solid fa-chevron-right"></i></button>
            </div>

<!--  <section>
        <ul>
            <li v-for="card in slidesObject">
                <img :src="card.image" alt="">
                <p>{{ card.name }}</p>
            </li>
        </ul>
    </section> -->
    
    
</template>

<style lang="scss" scoped>

@use '../styles/general.scss';
section{
        width: 80vw;
        margin: 0 auto;
        margin-bottom: 3rem;
        display: flex;
        flex-direction: row;
}


</style>