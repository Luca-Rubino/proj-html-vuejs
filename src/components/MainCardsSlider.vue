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
            {
                name:'Pedaling',
                image:'src/assets/img/training-box-5.jpg',
                view: true,
            },
        ]
     
        }
    },

    methods:{
        prevSlide: function(){
            if(this.activeIndex===0){
                this.activeIndex=this.slidesObject.length-1;
            }else{
                this.activeIndex--;
            }
        },

        nextSlide: function(){
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
        <h2>Our Professional Cycling Trainings</h2>
        <p>Learn from the mountain biking expert.</p>
        <div class="container">
            <div class="slider-wrapper" tabindex="0">
                <div class="item" v-for="(slide,index) in slidesObject" :key="index">
                    <img :src="slide.image" :alt="slide.name"/>
                    <div class="text">
                        <h3>{{ slide.name}}</h3>
                        <p>
                           {{slide.view }}
                        </p>
                    </div>
                </div>

                
            </div>

            <div class="thumbs">
                    <button class="prev" @click="prevSlide()"><i class="fa-solid fa-arrow-right"></i></button>
                    <button class="next" @click="nextSlide()"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </section>
    
    
</template>

<style lang="scss" scoped>

.slider-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
}

.thumbs{
background-color: greenyellow;
}

</style>