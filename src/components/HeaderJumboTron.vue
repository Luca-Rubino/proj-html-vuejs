<script>
import {store} from '../store.js';

export default{
    data() {
        return{
            store,
            counter: 0,
            isActive: false,
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
            this.isActive = true;
            setTimeout(() =>{
                this.isActive = false;
            }, 750)
            },
            leftClick(){
                if( this.counter == 0){
                    this.counter = 2
                }else{
                    this.counter--;
                }  
                this.isActive = true;
            setTimeout(() =>{
                this.isActive = false;
            }, 750)
                },
        },

    
}
</script>

<template>
    <section :class="(isActive) ? 'myAnimated' : ''">
        <i class="fa-solid fa-chevron-left leftClick myButton" @click="leftClick"></i>

        <div :class="'bg' + counter" ></div>
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
    margin-bottom: 5rem;
}

.leftClick{
    position: absolute;
    top: 50%;
    left: 3%;
}

.rightClick{
    position: absolute;
    top: 50%;
    right: 3%;
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
    top: 40%;
    left: 10%;
    color: white;
    width: 32%;
        h1{
            font-size: 3.5rem;
            margin-bottom: 1rem;
            font-weight: 800;
        }
        p{
            font-size: 1rem;
            margin-bottom: 1rem;
            font-weight: 800;
        }
        button{
            font-size: 1rem;
            font-weight: 800;
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
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bg1{
        background-image: url('../assets/img/slider-bike-9.jpg');
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

    }
    .bg2{
        background-image: url('../assets/img/slider-bike-4.jpg');
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

    }
    .myAnimated{
        animation: immageMovie .75s linear;
    }

    @keyframes immageMovie{
    /* opacity per ottimizzazione e gradevolezza */
    0%{opacity: 0.1;}
    50%{opacity: 0.5;}
    100%{opacity: 1;}
}
</style>