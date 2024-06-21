<template>
    <div class="trainers-section">
        <div class="margin-bottom">
            <h2>Our Expert Trainers</h2>
            <p>Learn to ride bikes from the experts</p>
        </div>
        <div class="trainers-container">
            <div class="trainer-card" v-for="(trainer, index) in trainers" :key="index">
                <div class="image-container">
                    <img class="transition" :src="trainer.image" :alt="trainer.name">
                    <div class="info">
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
        </div>
    </div>
</template>

<script>
import Biker1 from '../assets/img/biker1.jpg';
import Biker2 from '../assets/img/biker2.png';
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
    margin-bottom: 2.6rem;
    padding-top: 3rem;

    h2 {
        font-size: 2rem;
    }
}

.trainers-container {
    max-width: 80%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-bottom: 3rem;
}

.trainer-card {
    position: relative;
    width: calc(100% / 4 - 2rem);
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.image-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.trainer-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease;
}

.info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(0, 0, 0, );
    color: #fff;
    text-align: center;
    padding: 1rem;
    transform: translateY(50%);
    transition: transform 0.5s ease;
    z-index: 1;
    margin-bottom: 2.5rem;
}

.trainer-card:hover .info {
    transform: translateY(35%);
}

.trainer-card img {
    transition: transform 0.5s, filter 0.5s;
}

.trainer-card:hover img {
    transform: scale(1.1);
    filter: brightness(35%);
}

.trainer-card h3 {
    font-size: 1.2rem;
    color: white;
    font-weight: bolder;
}

.trainer-card p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    font-weight: bolder;
    color: #b3b3b3;
}

.social-icons i {
    font-size: 0.8rem;
    margin: 0.5rem;
    cursor: pointer;
    color: white;
    margin-bottom: 1.5rem;
}
</style>