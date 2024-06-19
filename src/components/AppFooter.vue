<script>

import {store} from '../store.js';

export default{
    data() {
        return{
            store,


        }
    }
}

</script>

<template>

<footer>
    <h1>footer</h1>

    <section>

        <article>

            <ul>
                <li>1</li>
            </ul>

        </article>

        <article>

            <ul>
                <li>2</li>
            </ul>

        </article>

        <article>

            <ul>
                <li>3</li>
            </ul>

        </article>

        <article>

            <ul>
                <li>4</li>
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

    section {
        article:first-of-type {
            ul {
                li:first-of-type {
                    background-image: url("/src/assets/img/logo-footer-gobike.png");
                    background-repeat: no-repeat;
                    background-size: 3.5rem;
                }
            }
        }
    }
}


</style>
