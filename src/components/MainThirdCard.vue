<script>
import {store} from '../store.js';
import axios from 'axios';

export default{
    data() {
        return{
            store,
            isActive: true,
        }
    },
    methods:{
        eventList(){
            axios.get('http://152.89.170.170:3000/events/bike').then(response => {
                this.store.thirdCardsApi = response.data;
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        },
        styleListGrid(){
            this.isActive = true;
        },
        styleList(){
            this.isActive = false;
        },

},
created(){
        this.eventList();
    },
}
</script>

<template>
    <h1>
        Don't Miss Our Events!
    </h1>
    <p class="subTitle">

        Get the amazing cycling experience.
    </p>
    <div class="myRadioButton">
        <p>Events</p>
        <div>
            <i class="fa-solid fa-square" @click="styleListGrid" :class="(isActive) ? 'active':'' "></i>
            <i class="fa-solid fa-bars" @click="styleList" :class="(!isActive) ? 'active':''"></i>
        </div>
    </div>
    <section v-if="isActive">
        <article :class="(isActive) ? 'myArticleGrid' : 'myArticleList'" v-for="card in store.thirdCardsApi">
            <img :src="card.image" :alt="card.event_name">
            <h2>{{ card.event_name }}</h2>
            <p>
                <i class="fa-regular fa-clock"></i>{{ card.start_date + ' - ' + card.end_date }} 
            </p>
            <p>
                <i class="fa-solid fa-location-dot"></i>{{ card.location }}
            </p>
            <p class="myBike">{{ card.type }}</p>
            <span class="dateClip">{{ card.start_date[8] + card.start_date[9] }} <br> {{ store.months[((card.start_date[5] + card.start_date[6]) - 1) + 1] }}</span>
        </article>
    </section>
    <section v-else>
        <article :class="(isActive) ? 'myArticleGrid' : 'myArticleList'" v-for="card in store.thirdCards">
            <img :src="card.img" :alt="card.title">
            <span class="myNumberBig"><h2>{{ card.numberClip[0]  }}</h2>  <p>{{ card.monthClip[0] }}</p></span>
            <span class="myNumberBig"><h2>{{ card.numberClip[1]  }}</h2>  <p>{{ card.monthClip[1] }}</p></span>
            
            <div>
                <h2>{{ card.title }}</h2>
                <p>
                    <i class="fa-regular fa-clock"></i>{{ card.date }} 
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>{{ card.location }}
                </p>
                <p class="myBike">{{ card.bike }}</p>
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>
    h1{
        text-align: center;
    }
    .subTitle{
        text-align: center;
    }
    .active{
        color: white;
        background-color: black;
        padding: 0.5rem;
        font-size: .8rem;
    }
    i{
        margin-right: .8rem;
    }
    .myRadioButton{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
            div{
                margin-right: .7rem;
                    i{
                        margin-right: .5rem;
                    }
            }
    }
    section{
        width: 80%;
        margin: 1rem auto 3rem auto;
        display: flex;
        flex-wrap: wrap;
        
            .myArticleGrid{
                position: relative;
                width: calc((100% / 3) - 1rem);
                margin-right: 1rem;
                margin-bottom: 1rem;
                border: 1px solid #f5f5f5;
                img{
                    width: 100%;
                    aspect-ratio: 1/1;
                    margin-bottom: .5rem;
                    object-fit: cover;
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
            .myArticleList{
                width: 100%;
                height: 200px;
                border: 1px solid #f5f5f5;
                display: flex;
                align-items: center;
                    &:hover{
                        padding-left: 1rem;
                    }
                img{
                    width: 50%;
                    height: 100%;
                    background-size: cover;
                    object-fit: none;
                    padding: 1rem;
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
                span{
                    margin-right: 1rem;
                }
                .myNumberBig{
                    text-align: center;
                        h2{
                            font-size: 3.5rem;
                        }
                        p{
                            font-size: .8rem;
                        }
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
        background-color: #f5f5f5;
        width: fit-content;
        padding: .3rem ;
    }
    
</style>