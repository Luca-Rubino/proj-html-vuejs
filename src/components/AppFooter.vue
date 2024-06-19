<script>

import {store} from '../store.js';

export default{
    data() {
        return{
            store,
            listaElementiFooter: [
                { indirizzo: 'New Jersey, USA', telefono: '+1 (234) 567 89 10', email: 'example@exemple.com', },
                { titolo: 'Join Our Newsletter', sottotitolo: 'Subscribe to receive ureful infotmation.'},
                { titolo: 'Join Our Newsletter', punto1: 'Riding Lesson',  punto2: 'Safe Driving', punto3: 'Mountain Bike', punto4: 'Trail Drive', punto5: 'Pedaling' },
                { titolo: 'Quick Links', punto1: 'Home',  punto2: 'About Us', punto3: 'Blog', punto4: 'Packages', punto5: 'Contact' }
            ],
            index: 0,

        }
    }
}

</script>

<template>

<footer>

    <section>

        <article>

            <ul>
                <li></li>
                <li>
                    <i class="fa-solid fa-location-dot"></i>
                    {{ listaElementiFooter[0].indirizzo }}
                </li>
                <li>
                    <i class="fa-solid fa-phone-volume"></i>
                    {{ listaElementiFooter[0].telefono }}
                </li>
                <li>
                    <i class="fa-solid fa-envelope"></i>
                    {{ listaElementiFooter[0].email }}
                </li>
                <li>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                </li>
            </ul>

        </article>

        <article>

            <ul>
                <li>{{ listaElementiFooter[1].titolo }}</li>
                <li>{{ listaElementiFooter[1].sottotitolo }}</li>
                <li>
                    <input type="email" placeholder="Your Email Address">
                </li>
                <li>
                    <button>Subscribe -></button>
                </li>
            </ul>

        </article>

        <article>

            <ul>
                <li>{{ listaElementiFooter[2].titolo }}</li>
                <li>{{ listaElementiFooter[2].punto1 }}</li>
                <li>{{ listaElementiFooter[2].punto2 }}</li>
                <li>{{ listaElementiFooter[2].punto3 }}</li>
                <li>{{ listaElementiFooter[2].punto4 }}</li>
                <li>{{ listaElementiFooter[2].punto5 }}</li>
            </ul>

        </article>

        <article>

            <ul>
                <li>{{ listaElementiFooter[3].titolo }}</li>
                <li>{{ listaElementiFooter[3].punto1 }}</li>
                <li>{{ listaElementiFooter[3].punto2 }}</li>
                <li>{{ listaElementiFooter[3].punto3 }}</li>
                <li>{{ listaElementiFooter[3].punto4 }}</li>
                <li>{{ listaElementiFooter[3].punto5 }}</li>
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

    section:first-of-type {
        display: flex;
        justify-content: space-between;
    }

    section {

        article {

            li {
                display: flex;
                align-items: center;
                list-style: none;
                margin-bottom: 1.2rem;
                font-size: 1.2rem;
                font-weight: 100;

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
            }
        }

        article:nth-of-type(3) {
            ul {
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

        article:nth-of-type(4) {
            ul {
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

    section:nth-of-type(2) {
        text-align: center;

    }
}


</style>
