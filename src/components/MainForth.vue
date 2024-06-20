<template>
    <div class="trainers-section">
        <h2>Our Expert Trainers</h2>
        <p>Learn to ride bikes from the experts</p>
        <div class="bordo-grigio">
            <div class="trainers-container">
            <div class="trainer-card" >
                <img src="../assets/img/biker1.jpg">
                <h3>nomeeeee</h3>
                <p>lavoroooooo</p>
                <div class="social-icons">
                    <i class="fa-brands fa-facebook-f"></i>                  
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
};
</script>

<style scoped lang="scss">
.trainers-section {
    text-align: center;
    margin: 2rem 0;
}

.trainers-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.trainer-card {
    background: #fff;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 250px;
    background-color: black;
}

.trainer-card img {
    width: 100%;
    height: auto;
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
}
</style>