<script>

import {store} from '../store.js';

export default{
    data() {
        return{
            store,
            listaElementiFooter: [
                { id: 0, indirizzo: 'New Jersey, USA', telefono: '+1 (234) 567 89 10', email: 'example@exemple.com' },
                { id: 1, titolo: 'Join Our Newsletter', li_1: 'Subscribe to receive ureful infotmation.' },
                { id: 2, titolo: 'Training', li_1: 'Riding Lesson',  li_2: 'Safe Driving', li_3: 'Mountain Bike', li_4: 'Trail Drive', li_5: 'Pedaling' },
                { id: 3, titolo: 'Quick Links', li_1: 'Home',  li_2: 'About Us', li_3: 'Blog', li_4: 'Packages', li_5: 'Contact' }
            ],
            index: 0,

        }
    }
}

</script>

<template>

<footer>

    <section>

        <article v-for="(listaElementiFooter, index) in listaElementiFooter" :key="index" v-show="listaElementiFooter">

            <ul>
                <li>
                    {{ listaElementiFooter.titolo }}
                </li>
                <li>
                    <!-- <i class="fa-solid fa-location-dot"></i> -->
                    {{ listaElementiFooter.indirizzo }}
                    {{ listaElementiFooter.li_1 }}
                </li>
                <li>
                    <!-- <i class="fa-solid fa-phone-volume"></i> -->
                    {{ listaElementiFooter.telefono }}
                    {{ listaElementiFooter.li_2 }}
                    <form action="" method="post">
                        <input type="email" placeholder="Your Email Address">
                        <input type="submit" value="Subscribe ->"></input>
                    </form>
                </li>
                <li>
                    <!-- <i class="fa-solid fa-envelope"></i> -->
                    {{ listaElementiFooter.email }}
                    {{ listaElementiFooter.li_3 }}
                </li>
                <li>
                    {{ listaElementiFooter.li_4 }}
                    <!-- <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i> -->
                </li>
                <li>
                    {{ listaElementiFooter.li_5 }}
                </li>
            </ul>

        </article>

        <article>

            <ul>
                <li></li>
                <li></li>
                <li>
                    
                </li>
                <li>
                    
                </li>
            </ul>

        </article>

    </section>

    <section>

        <p>@ 2024 Gobike - All Rights Reserved</p>

    </section>

</footer>

</template>

<style lang="scss" scoped>

footer {
    background-color: black;
    color: white;
    padding: 2rem 10%;

    section {

        article {

            li:first-of-type {
                    padding: 1.5rem 0;
                    font-weight: 900;
                }

            li {
                display: flex;
                align-items: center;
                list-style: none;
                margin-bottom: 1.2rem;
                font-size: 1.2rem;
                font-weight: 100;

                input {
                    display: none;
                }

                i{
                    font-size: 1.7rem;
                    margin-right: 1rem;
                }
            }
        }

        article:first-of-type {
            ul {
                li:first-of-type {
                    background-image: url("/src/assets/img/logo-footer-gobike.png");
                    background-repeat: no-repeat;
                    background-size: 13rem;
                    width: 13rem;
                    height: 5rem;
                    margin-bottom: 1rem;
                }
                li:nth-of-type(2)::before{
                    content: '\f14c';
                    margin-right: 1rem;
                }
            }
        }

        article:nth-of-type(2) {
            ul {
                li:nth-of-type(3) {
                    input {
                        display: block;
                    }
                }
            }
        }

        article:nth-of-type(3) {
            ul {
                li:first-of-type {
                    font-weight: 900;
                    width: 4rem;
                }

                li:first-of-type::before {
                    content: "";
                    width: auto;
                    height: auto;
                    display: block;
                    background: transparent;
                    margin-right: auto;
                }

                li::before {
                    content: "";
                    width: 11px;
                    height: 4px;
                    display: inline-block;
                    background: #ffffff;
                    margin-right: 9px;
                }
            }
        }

        article:nth-of-type(4) {
            ul {
                li:first-of-type {
                    font-weight: 900;
                }

                li:nth-of-type(1)::before {
                    content: "";
                    width: auto;
                    height: auto;
                    display: block;
                    background: transparent;
                    margin-right: auto;
                }

                li::before {
                    content: "";
                    width: 11px;
                    height: 4px;
                    display: inline-block;
                    background: #ffffff;
                    margin-right: 9px;
                }
            }
        }
    }

    section:first-of-type {
        display: flex;
        justify-content: space-between;
    }

    section:nth-of-type(2) {
        text-align: center;

    }
}


</style>
