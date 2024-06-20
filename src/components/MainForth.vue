<template>
    <div class="trainers-section">
        <div class="margin-bottom">
            <h2>Our Expert Trainers</h2>
            <p>Learn to ride bikes from the experts</p>
        </div>
        <div class="trainers-container">
            <div class="trainer-card" v-for="(trainer, index) in trainers" :key="index">
                <img src="../assets/img/biker1.jpg">
                <h3>{{ trainers.name }}</h3>
                <p>{{ trainers.role }}</p>
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
export default {
    data() {
        return {
            trainers: [
                {
                    image: require('../assets/img/biker1.jpg'),
                    name: 'Michael Lee',
                    role: 'Biker',
                },
                {
                    image: require('../assets/img/biker2.jpg'),
                    name: 'Robert Lee',
                    role: 'Biker',
                },
                {
                    image: require('../assets/img/biker3.jpg'),
                    name: 'John Doe',
                    role: 'Biker',
                },
                {
                    image: require('../assets/img/biker4.jpg'),
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
    margin: 2rem 0;
}

.margin-bottom{
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: calc(100%/5);
    background-color: black;
}

.trainer-card img {
    width: 100%;
    margin-bottom: 1.5rem;
}

.trainer-card h3 {
    font-size: 1.2rem;
    color: white;
}

.trainer-card p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: white;
}

.social-icons i {
    margin: 0 0.5rem;
    color: #555;
    cursor: pointer;
    color: white;
    margin-bottom:1.5rem
}
</style>