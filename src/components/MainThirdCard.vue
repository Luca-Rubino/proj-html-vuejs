<script>
import {store} from '../store.js';

export default{
    data() {
        return{
            store,
        }
    }
}
</script>

<template>
    <h1>
        Don't Miss Our Events!
        Get the amazing cycling experience.
    </h1>
    <section>
        <article v-for="card in store.thirdCards">
            <img :src="card.img" alt="">
            <h2>{{ card.title }}</h2>
            <p>
                <i class="fa-regular fa-clock"></i>{{ card.date }} 
            </p>
            <p>
                <i class="fa-solid fa-location-dot"></i>{{ card.location }}
            </p>
            <p class="myBike">{{ card.bike }}</p>
            <span class="dateClip">{{ card.numberClip }} <br> {{ card.monthClip }}</span>
        </article>
    </section>
</template>

<style lang="scss" scoped>
    h1{
        text-align: center;
    }
    i{
        margin-right: .5rem;
    }

    section{
        width: 80%;
        margin: 1rem auto;
        display: flex;
        flex-wrap: wrap;
        
            article{
                position: relative;
                width: calc((100% / 3) - 1rem);
                margin-right: 1rem;
                margin-bottom: 1rem;
                border: 1px solid #f5f5f5;
                img{
                    width: 100%;
                    margin-bottom: .5rem;
                }
                h2{
                    margin-bottom: .5rem;
                    margin-left: .5rem;
                }
                p{
                    margin-bottom: .5rem;
                    margin-left: .5rem;
                }
            }
    }
    .dateClip{
        position: absolute;
        text-align: center;
        top: 5%;
        left: 5%;
        background-color: white;
        border-radius: 4px;
        padding: 10px 15px;
        box-shadow: 5px 3px 15px rgba(0,0,0,.2);
    }
    .myBike{
        margin-top: 1rem;
    }
</style>