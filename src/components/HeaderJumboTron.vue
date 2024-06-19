<script>
import {store} from '../store.js';

export default{
    data() {
        return{
            store,
            counter: 0,
            jumboTron:[
        {
        text: 'Learn Mountain Bike From The Expert',
        },
        {
        text: 'Professional Cycling club',
        }, 
        {
        text: 'Unforgettable Cycling Experience',
        },
    ],
        }
    },
    methods:{
        rightClick(){
            if( this.counter == 2){
                this.counter = 0
            }else{
                this.counter++;
            }  
            },
            leftClick(){
                if( this.counter == 0){
                    this.counter = 2
                }else{
                    this.counter--;
                }  
                },
        },

    
}
</script>

<template>
    <section>
        <i class="fa-solid fa-chevron-left leftClick myButton" @click="leftClick"></i>

        <div :class="'bg' + counter"></div>
        <div class="myText">
            <h1> {{ jumboTron[counter].text }}</h1>
            <p>Learn cycling from the pros.</p>
            <button>Learn More <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        <i class="fa-solid fa-chevron-right rightClick myButton" @click="rightClick"></i>
    </section>
    
</template>

<style lang="scss" scoped>
section{
    height: 100vh;
    width: 100vw;
    position: relative;
}
.leftClick{
    position: absolute;
    top: 50%;
    left: 5%;
}
.rightClick{
    position: absolute;
    top: 50%;
    right: 5%;
}
.myButton{
        font-size: 1.5rem;
        background-color: black;
        color: white;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        cursor: pointer;
}
.myText{
    position: absolute;
    top: 50%;
    left: 15%;
    color: white;
    width: 40%;
        h1{
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }
        p{
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        button{
            font-size: 1.3rem;
            padding: 1.5rem 2.5rem;
            background-color: black;
            color: white;
            border: 0px;
        }
}

    .bg0{
        background-image: url('../assets/img/slider-bike-12.jpg');
        height: 100vh;
        background-position: center;
    }
    .bg1{
        background-image: url('../assets/img/slider-bike-9.jpg');
        height: 100vh;
        background-position: center;
    }
    .bg2{
        background-image: url('../assets/img/slider-bike-4.jpg');
        height: 100vh;
        background-position: center;
    }
</style>