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
                <li>{{ listaElementiFooter[0].indirizzo }}</li>
                <li>{{ listaElementiFooter[0].telefono }}</li>
                <li>{{ listaElementiFooter[0].email }}</li>
                <li>icone</li>
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

    section:first-of-type {
        display: flex;
    }

    section {

        article {
            li {
                list-style: none;
            }
        }

        article:first-of-type {
            ul {
                li:first-of-type {
                    background-image: url("/src/assets/img/logo-footer-gobike.png");
                    background-repeat: no-repeat;
                    background-size: 7rem;
                    height: 2rem;
                }
            }
        }

    }
}


</style>
