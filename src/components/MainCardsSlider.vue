<script>
import {store} from '../store.js';

export default{
    data() {
        return{
            store,
            startCounter :0,
            finelCounter: 3,
            sliderVisible: [],
        }
    },

    methods:{
        startSlider(){
            for(let i = 0; i < 4; i++){
                this.sliderVisible.push(store.slidesObject[i]);
            }
            console.log(this.sliderVisible);

        },
        /* prevSlide(){
            if(this.isInvisible = 0){
                this.isInvisible = 4;
                
            }else{  
                this.isInvisible--;
            }
        },

        nextSlide(){
            if(this.isInvisible >= 4){
                this.isInvisible = 0
            }else{  
                this.isInvisible++;
            }
            
            
    } */
},
created(){
        this.startSlider();
    },

}
</script>

<template>
    <section>
        <article>
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
    
                <div class="thumbs" >
                        <button class="prev" ><i class="fa-solid fa-chevron-left"></i></button>
                        <button class="next" ><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>

        </article>
    </section>

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
    width: 100%;
}
article{
    width: 80%;
    margin: 0 auto;
}
/* .animation-my{
    animation: slider .5s linear;
}
.invisible{
    display: none;
}
@keyframes slider {
    0%{
        left: 0;
    }
    100%{
        left: 500px;
    }
} */
/*
ul{
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: max-content;
}
li{
    width: calc((100% / 4) - 2rem);
    position: relative;
    
}
img{
    object-fit: contain;
    object-position: center;
    border: solid 0.5rem rgb(0, 0, 0);
    margin-right: 1rem;

}
p{
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2rem;
    width: 100%;
    height: 100%;
} */


.title-slides{
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}



.slider-wrapper{
    display: flex;
    
    justify-content: space-around;

    .item{
        border: solid 0.5rem black;
        position: relative;
    }

    .text{
        position:relative;
        top: 50px;
        left: 10px;
        align-content: space-between;
        color:white;
        z-index: 1;
        
    }
    
}

.thumbs{
text-align: center;
padding: 2rem 0rem;

button{
    background-color: white;
    margin-left: 1rem;
    height: 80px;
    width: 80px;
}

}

</style>