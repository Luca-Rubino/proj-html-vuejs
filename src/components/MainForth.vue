<template>
    <div class="trainers-section">
        <div class="margin-bottom">
            <h2>Our Expert Trainers</h2>
            <p>Learn to ride bikes from the experts</p>
        </div>
        <div class="trainers-container">
            <div class="trainer-card" v-for="(trainer, index) in trainers" :key="index">
                <img :src="trainer.image" :alt="trainer.name">
                <h3>{{ trainer.name }}</h3>
                <p>{{ trainer.role }}</p>
                <div class="social-icons">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Biker1 from '../assets/img/biker1.jpg';
import Biker2 from '../assets/img/biker2.jpg';
import Biker3 from '../assets/img/biker3.jpg';
import Biker4 from '../assets/img/biker4.jpg';

export default {
    data() {
        return {
            trainers: [
                {
                    image: Biker1,
                    name: 'Michael Lee',
                    role: 'Biker',
                },
                {
                    image: Biker4,
                    name: 'Robert Lee',
                    role: 'Biker',
                },
                {
                    image: Biker3,
                    name: 'John Doe',
                    role: 'Biker',
                },
                {
                    image: Biker2,
                    name: 'Emily Brown',
                    role: 'Biker',
                },
            ],
        };
    },
};

</script>

<style scoped lang="scss">
.trainers-section {
    text-align: center;
    margin-bottom: 8rem;
    background-color: #fbfbfb;
}

.margin-bottom {
    margin-bottom: 3rem;
}

.trainers-container {
    max-width: 80%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 0 auto;
}

.trainer-card {
    background: #fff;
    text-align: center;
    background-color: black;
    border: solid .8rem #f7f7f7;
    width: calc(100% / 4 - 2rem);
}

.trainer-card img {
    width: 100%;
    margin-bottom: 1.5rem;
}

.trainer-card h3 {
    font-size: 1.2rem;
    color: white;
    font-weight: bolder;
}

.trainer-card p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: white;
    color: #b3b3b3;
    font-size: .8rem;
    font-weight: bolder;
}

.social-icons i {
    font-size:.8rem;
    margin: 0 0.5rem;
    color: white;
    cursor: pointer;
    color: white;
    margin-bottom: 1.5rem
}
</style>