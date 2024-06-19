<script>
export default{
    data() {
        return{
            
        }
    }
}
</script>

<template>
    <section>
        <article class="bikerImg">
            <div class="myPosition">
                <div>
                    <img src="../assets/img/bike-circle.png" alt="">
                </div>
                <img src="../assets/img/bike-player.png" alt="">

            </div>
        </article>
        <article class="bikertext">
            <h2>Do you want to be a professional cyclist?</h2>
            <p>
                Webone About
                Do you want to be a professional cyclist?
                We offer 6 courses of varying difficulty and beautiful scenery that cyclists of all levels can enjoy. You will learn cycling from professionals with our competent and experienced staff. You will have a lot of fun with our amazing space.
            </p>
            <img src="../assets/img/divider.jpg" alt="">
            <div class="helmet">
                <div>
                    <img class="myIcon" src="../assets/img/f1-helmet.png" alt="">
                </div>
                <div>
                    <h3>Professional Team</h3>
                    <p>We make you professional by adding your sincerity as well as professionalism.</p>
                </div>
            </div>
            <div class="helmet">
                <div>
                    <img class="myIcon" src="../assets/img/helmet.png" alt="">
                </div>
                <div>
                    <h3>Professional training</h3>
                    <p>We always ride with the best equipment, respecting nature and fun.</p>
                </div>
            </div>
            <button>Get to know us <i class="fa-solid fa-arrow-right"></i></button>
        </article>
    </section>
</template>

<style lang="scss" scoped>

    section{
        width: 80%;
        margin: 0 auto;
        height: 100vh;
        display: flex;
        justify-content: center;
    }
    button{
            font-size: 1.3rem;
            padding: 1rem 2.5rem;
            background-color: black;
            color: white;
            border: 0px;
        }
    .bikertext{
        width: 40%;
        padding: 3rem 2rem;
        
            h2{
                font-size: 2rem;
                margin-bottom: 1.5rem;
            }
            p{
                margin-bottom: 1.5rem;
            }
            img{
                margin-bottom: 1.5rem;
            }
            
    }
    .bikerImg{
        width: 60%;
    }

    .myPosition{
        position: relative;
        width: 100%;
        animation: appear 2s linear;
        div{
        width: 100%;
        position: absolute;
            z-index: 0;
            left: 0;
            top: 2rem;
                img{
                    animation: spin 15s linear infinite;
                }
        }
        img{
        width: 100%;
        position: absolute;
            z-index: 1;
        }
    }
    .helmet{
        display: flex;
        div{
            margin-right: 1rem;
                h3{
                    margin-bottom: 1.5rem;
                }
        }
    }
    .myIcon{
        width: 50px;
    }

    @keyframes spin {
        0%{
            rotate: 0deg;
        }
        100%{
            rotate: 360deg;
        }
    }
    @keyframes appear{
        0%{
            right: 100%;
        }
        100%{
            right: 0;
        }
    }
</style>