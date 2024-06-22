<script>

import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>

<template>

    <footer>

        <section>

            <article v-for="(item, index) in store.listaElementiFooter" :key="index" v-show="store.listaElementiFooter">

                <ul>
                    <li>
                        {{ store.listaElementiFooter[index].titolo }}
                    </li>
                    <li>
                        {{ store.listaElementiFooter[index].indirizzo }}
                        {{ store.listaElementiFooter[index].li_1 }}
                    </li>
                    <li>
                        {{ store.listaElementiFooter[index].telefono }}
                        {{ store.listaElementiFooter[index].li_2 }}
                        <form action="" method="post">
                            <input type="email" class="input-field" name="email" id="email"
                                placeholder="Your Email Address" onchange="'ci sono'" required>
                            <input type="submit" value="Subscribe &#8594;"></input>
                        </form>
                    </li>
                    <li>
                        {{ store.listaElementiFooter[index].email }}
                        {{ store.listaElementiFooter[index].li_3 }}
                    </li>
                    <li>
                        {{ store.listaElementiFooter[index].li_4 }}
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                        {{ store.listaElementiFooter[index].li_5 }}
                    </li>
                </ul>

            </article>

        </section>

        <section>

            <p>&copy; 2024 Gobike - All Rights Reserved.</p>

        </section>

    </footer>

</template>

<style lang="scss" scoped>
footer {
    background-color: black;
    color: white;
    padding: 2rem 12%;
    margin-bottom: -26px;

    section {

        article {

            li {
                display: flex;
                align-items: center;
                list-style: none;

                input,
                span,
                div {
                    display: none;
                }

                i {
                    display: none;
                }
            }

            li:first-of-type {
                font-weight: 900;
                font-size: 1.5rem;
                padding: 1rem 0;
            }

            li:nth-of-type(2),
            li:nth-of-type(3),
            li:nth-of-type(4),
            li:nth-of-type(5) {
                margin-bottom: .8rem;
            }
        }

        article:first-of-type {
            ul {

                i {
                    display: block;
                    font-size: 1.7rem;
                    margin-right: 1rem;
                    border: 1px solid #424242;
                    padding: .3rem 1.3rem;
                }

                li {
                    font-size: 1.1rem;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    font-weight: 300;
                    align-items: baseline;
                    justify-content: flex-start;
                }

                li::before {
                    font-size: 1.7rem;
                    font-family: FontAwesome;
                    margin-right: 1rem;
                    width: 1.5rem;
                    text-align: center;
                }

                li:first-of-type {
                    background-image: url("/src/assets/img/logo-footer-gobike.png");
                    background-repeat: no-repeat;
                    background-size: 13rem;
                    width: 13rem;
                    height: 5rem;
                    margin-bottom: 1rem;
                }

                li:nth-of-type(2) {
                    margin-bottom: 1rem;
                }

                li:nth-of-type(2)::before {
                    content: '\f3c5';
                }

                li:nth-of-type(3) {
                    margin-bottom: 1rem;
                }

                li:nth-of-type(3)::before {
                    content: '\f2a0';
                }

                li:nth-of-type(4)::before {
                    content: '\f0e0';
                }
            }
        }

        article:nth-of-type(2) {
            ul {
                margin-left: 8rem;

                li:nth-of-type(2) {
                    margin-bottom: 2.3rem;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    font-size: 1.1rem;
                }

                li:nth-of-type(3) {
                    input {
                        display: block;
                        width: 28.4rem;
                        padding: 1.3rem 1rem;
                        border-radius: 3px;
                        border: 0;
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    }

                    input[type="email"] {
                        margin-bottom: .3rem;
                        font-size: 1rem;
                        font-family: sans-serif;
                    }

                    input:nth-of-type(2) {
                        background-color: white;
                        font-size: 1.2rem;
                        font-weight: 300;
                        color: #062860;
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    }

                    input:nth-of-type(2)::after {
                        content: '/f061';
                        font-family: FontAwesome;
                    }
                }
            }
        }

        article:nth-of-type(3) {
            ul {
                margin-left: 9.5rem;

                li:first-of-type {
                    font-weight: 900;
                    font-size: 1.9rem;
                    width: 6.4rem;
                }

                li:first-of-type::before {
                    content: "";
                    width: auto;
                    height: auto;
                    display: block;
                    background: transparent;
                    margin-right: auto;
                }

                li {
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    font-weight: 300;
                    font-size: 1.04rem;
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
                margin-left: 8rem;

                li {
                    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
                    font-weight: 300;
                    font-size: 1.04rem;
                    margin-bottom: .849rem;
                }

                li:nth-of-type(1) {
                    font-size: 1.7rem;
                    font-weight: 900;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    align-items: baseline;
                    margin-bottom: 0;
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
        margin-bottom: 1rem;
    }

    section:nth-of-type(2) {
        text-align: center;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.1rem;
    }
}
</style>
