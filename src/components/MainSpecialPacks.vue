<script>
import {store} from '../store.js';

export default {
    data() {
        return {
             store,
             cardsPacks:[
                
        
                        {
                            image:'src/assets/img/handshake.png',
                            title:'Basic',
                            text:'Learn to ride a bike from the professionals.',
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

                            ],
                    
                        },
                        {
                            image:'src/assets/img/helmet.png',
                            title:'Standard',
                            text:'Learn to ride a bike from the professionals.',
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

                            image:'src/assets/img/f1-helmet.png',
                            title:'Premium',
                            text:'Learn to ride a bike from the professionals.',
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
                
                        ]
              
        };
    },
};
</script>


<template>
   
   <div class="container" >
    <div class="logo-packs">
        <img src="../assets/img/badge.png" alt="">
    </div>
    <div class="title-packs">
        <h1>Special Packs</h1>
        <p>Select pricing plan to get more</p>
    </div>
    
    <div class="flip-card" v-for="pack in cardsPacks">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <img :src="pack.image" alt="">
            <h2 class="title">{{ pack.title }}</h2>
            <p>{{ pack.text }}</p>
            <ul>
                <li v-for="item in list" :key="id">
                    <p>{{ item.listype }} {{ item.text }}</p>
                    
                </li>
            </ul>
        </div>
        <div class="flip-card-back">
            <p class="title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>

   </div>
  

</template>


<style lang="scss" scoped>

.container{

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
  flex-direction: row;
  justify-content: space-evenly;      
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;


  img{
    width: 100px;
    margin: 0 auto;
  }
}

.flip-card-front {
  color: coral;
}

.flip-card-back {
  background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
     bisque 40%, rgb(255, 185, 160) 78%);
  color: white;
  transform: rotateY(180deg);
}


}


</style>