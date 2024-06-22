<script>
import {store} from '../store.js';

export default {
    data() {
        return {
            store,
            form: {
                name: '',
                email: '',
                number: ''
            },
            cardsPacks:[
                
                        {
                            image:'./src/assets/img/handshake.png',
                            title:'Basic',
                            text:'Learn to ride a bike from the professionals.',
                            cost:'$1800',
                            list: [{
                                id:0,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:1,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:2,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:3,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:4,
                                listype:'./src/assets/img/check.png',
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
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:1,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:2,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:3,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:4,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },

                            ]

                        },
                        {

                            image:'./src/assets/img/f1-helmet.png',
                            title:'Premium',
                            text:'Learn to ride a bike from the professionals.',
                            cost:'$5000',
                            list:[
                            {
                                id:0,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:1,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:2,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:3,
                                listype:'./src/assets/img/check.png',
                                text:'Phone Mountaineer bike training'
                            },
                            {
                                id:4,
                                listype:'./src/assets/img/check.png',
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
        },

        submitForm() {
            this.form.name = '';
            this.form.email = '';
            this.form.number = '';
        }
    }
};
</script>


<template>

<div class="container" >
    <article :class="(isActive)? 'active-form' : 'off-form'" >
        <div class="form">
            <form @submit.prevent="submitForm">
                <div class="title-pack-form">
                    <h1>
                    Basic Packs
                    </h1>
                    <p>Application Form</p>
                </div>
                <button class="close" @click="popUp">X</button>
                
                <div >
                    <input type="text" id="name" v-model="form.name" required placeholder="Full Name" />
                </div>
                <div>
                    <input type="email" id="email" v-model="form.email" required placeholder="Email Address"  />
                </div>
                <div>
                    <input type="number" v-model="form.number" id="number" required placeholder="Phone Number">
                </div>
                <button type="submit">
                    Submit Form 
                    &#129122;
                </button>
            </form>
        </div>
        </article>
    <section>

        <div class="logo-packs">
            <img src="../assets/img/badge.png" alt="">
        </div>
        <div class="title-packs">
            <h2>Special Packs</h2>
            <p>Select pricing plan to get more</p>
        </div>
    </section>

    <section class="my-card">

        <div class="flip-card" v-for="pack in cardsPacks">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img id="filter" :src="pack.image" alt="">
                <h2 class="title-front">{{ pack.title }}</h2>
                <p>{{ pack.text }}</p>
                <ul>
                    <li v-for="(item, index) in pack.list" :key="index" :class="(index < 3)? 'check' : 'cross'">
                        <div class="img">
                            <img class="check cross"  :src="item.listype" alt="">
                        </div>
                        
                        <p> {{ item.text }}</p>
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
        margin-bottom: 2.5rem;

        h2{
            font-size: 2rem;
            margin-bottom: .8rem;
        }
    }


    .flip-card {
        display: flex;
        justify-content: space-evenly;      
        background-color: transparent;
        width: 350px;
        height: 500px;
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
    padding-bottom: 1rem;
    margin: 0 auto;
    }
}

img#filter{
    filter: invert(100%);
}

.flip-card-front {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(175deg, black 0px, black 25vh, white 25vh,   white 100%);
    border: transparent;
    color: white;
    font-size: .8rem;

    p{
        margin-bottom: 2rem;
    }

    ul{
        color: black;
        li{
            margin-bottom: .5rem;
            display: flex;
            border-bottom: solid 0.1rem rgb(170, 165, 165);
            img{
                margin: 0;
                width: 10px;
            }

            p{
                margin-left: 1rem;
            }
        }
    }
    
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
.off-form{
    display: none;
}

.active-form{
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
        .form{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10%;
            height: 450px;
            width: 450px;
            background-color: rgb(254 254 254);
            

            .title-pack-form{
                padding: 0 ;
                text-align: center;
                margin-bottom: 3rem;
                h1{
                    font-size: 2rem;
                }
            }

            .close{
                width: 5%;
                position: fixed; 
                z-index: 5;
                top: 23%;
                left: 60%;
                font-size: 1.5rem;
                background-color:transparent ;
                color: black;
                padding: .5rem 1rem;
            }

            
            input {
                color: rgb(169 169 169);
                background-color: rgb(255 255 255);
                box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
                border: solid transparent;
                border-bottom: solid black;
                border-radius: .3rem;
                margin-bottom: .1rem;
                width: 350px;
                padding: 1.5rem 2rem;
                font-size: 1rem;
            }

            button {
                font-size: 1rem;
                width: 100%;
                padding: 1.5rem 2rem;
                background-color: black;
                color: white;
                border: none;
            }
        }
}

</style>