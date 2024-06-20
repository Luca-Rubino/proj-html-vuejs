<script>

export default{
    data() {
        return{

            activeIndex:0,
            slidesObject:[
                {
                name:'Riding Lesson',
                image:'src/assets/img/training-box-1.jpg',
                view: true,
            },
            {
                name:'Safe Driving',
                image:'src/assets/img/training-box-2.jpg',
                view: true,
            },
            {
                name:'Mountain Bike',
                image:'src/assets/img/training-box-3.jpg',
                view: true,
            },
            {
                name:'Trail Drive',
                image:'src/assets/img/training-box-4.jpg',
                view: true,
            },
            //{
                //name:'Pedaling',
                //image:'src/assets/img/training-box-5.jpg',
                //view: true,
            //},
        ]
     
        }
    },

    methods:{
        prevSlide(){
            if(this.activeIndex===0){
                this.activeIndex=this.slidesObject.length-1;
            }else{
                this.activeIndex--;
            }
        },

        nextSlide(){
            if(this.activeIndex===this.slidesObject.length-1){
                this.activeIndex=0;
            }else{
                this.activeIndex++;
            }
    }
}

    
}
</script>

<template>
    <section>
        <div class="title-slides">
            <h2>Our Professional Cycling Trainings</h2>
            <p>Learn from the mountain biking expert.</p>
        </div>
      
        <div class="container">
            <div class="slider-wrapper">
                
                <div class="item" v-for="slide in slidesObject">
                    <div class="text">
                        <h3>{{ slide.name}}</h3>
                        <p>
                           {{slide.view }}
                        </p>
                    </div>
                    <img :src="slide.image" :alt="slide.name"/>
                   
                </div>

                
            </div>

            <div class="thumbs" >
                    <button class="prev" @click="prevSlide()"><i class="fa-solid fa-chevron-left"></i></button>
                    <button class="next" @click="nextSlide()"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    </section>
    
    
</template>

<style lang="scss" scoped>

.title-slides{
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.slider-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .item{
        border: solid 0.5rem black;

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