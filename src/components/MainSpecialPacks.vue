<script>
import {store} from '../store.js';

export default {
    data() {
        return {
            store,
            cardsPacks:[
                
        
                        {
                            image:'./src/assets/img/handshake.png',
                            title:'Basic',
                            text:'Learn to ride a bike from the professionals.',
                            cost:'$1800',
                            list: [{
                                id:0,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:1,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:2,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:3,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:4,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },

                            ],
                    
                        },
                        {
                            image:'./src/assets/img/helmetworker.png',
                            title:'Standard',
                            text:'Learn to ride a bike from the professionals.',
                            cost:'$2500',
                            list:[{
                                id:0,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:1,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:2,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:3,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:4,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },

                            ]

                        },
                        {

                            image:'./src/assets/img/f1-helmet.png',
                            title:'Premium',
                            text:'Learn to ride a bike from the professionals.',
                            cost:'$5000',
                            list:[{
                                id:0,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:1,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:2,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:3,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:4,
                                listype:'x',
                                text:'Phone Mountaineer bike training'
                            },

                            ]
                        },
                
                        ],
            isActive: false,
        };
    },
    methods:{
        popUp(){
            this.isActive = !this.isActive;
        }
    }
};
</script>


<template>

<div class="container" >
    <article :class="(isActive)? 'prova' : 'provadNone'" @click="popUp">
            <div>
                <p>asd</p>
            </div>
        </article>
    <section>

        <div class="logo-packs">
            <img src="../assets/img/badge.png" alt="">
        </div>
        <div class="title-packs">
            <h1>Special Packs</h1>
            <p>Select pricing plan to get more</p>
        </div>
    </section>

    <section class="my-card">

        <div class="flip-card" v-for="pack in cardsPacks">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="pack.image" alt="">
                <h2 class="title-front">{{ pack.title }}</h2>
                <p>{{ pack.text }}</p>
                <ul>
                    <li v-for="item in pack.list" >
                        <p>{{ item.listype }} {{ item.text }}</p>
                    </li>
                </ul>
            </div>
            <div class="flip-card-back">
                <h2 class="title-back">{{ pack.title }}</h2>
                <h1 class="cost">{{ pack.cost }}</h1>
                <button @click="popUp">
                    <h3>Send Request!</h3>
                </button>
            </div>
        </div>
    </div>
    </section>
        

</div>


</template>


<style lang="scss" scoped>

.container{
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    .my-card{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 3rem;
    }
    .logo-packs{
        margin: 0 auto;
        margin-bottom: 1rem;
        background-color: black;
        border-radius: .5rem;
        width: 100px;

            img{
                width: 100px;
                filter: invert(100%);
                padding: .8rem;
                
            }
    }

    .title-packs{
        text-align: center;
        margin-bottom: 1rem;
    }


    .flip-card {
        display: flex;
        justify-content: space-evenly;      
        background-color: transparent;
        width: 350px;
        height: 400px;
        perspective: 1000px;
        font-family: sans-serif;
        margin-right: 4rem;
}

.title-front {
    font-size: 1.2em;
    font-weight: 900;
    text-align: center;
    margin: 0;
}

.title-back {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
}

.cost{
    font-size: 2em;
    font-weight: 900;
    text-align: center;
    margin: 0;
    margin-bottom: 3rem;
}

.flip-card-inner {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid transparent;


  img{
    width: 70px;
    filter: invert(100%);
    padding-bottom: 2rem;
    margin: 0 auto;
  }
}

.flip-card-front {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background: linear-gradient(170deg, black 50%, white 50%);
    border: transparent;
    color: white;
    
}

.flip-card-back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    color: white;
    transform: rotateY(180deg);

    button{
        margin: 0 auto;
        padding: 1rem 2rem;
        background-color: black;
        color: white;
        border:solid  white;
        border-radius: 2px;
    }
}
}
.provadNone{
    display: none;
}

.prova{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
        div{
            padding: 10%;
            width: 100px;
            background-color: white;
        }
}



</style>