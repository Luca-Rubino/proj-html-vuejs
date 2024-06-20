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
    },
    methods: {
        setCustomValidity() {}
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
                    <form action="get" method="post">
                        <input type="email" name="email" placeholder="Your Email Address" required="true" oninvalid="this.setCustomValidity('The field is required')" onchange="this.setCustomValidity('')">
                        <span class="wpcf7-not-valid-tip" aria-hidden="true">The field is required.</span>
                        <input type="submit" value="Subscribe ->"></input>
                        <span class="wpcf7-spinner"></span>
                        <div class="wpcf7-response-output" aria-hidden="true">One or more fields have an error. Please check and try again.</div>
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

            li {
                display: flex;
                align-items: center;
                list-style: none;
                font-size: 1rem;
                font-weight: 100;

                input,
                span,
                div {
                    display: none;
                }

                i{
                    font-size: 1.7rem;
                    margin-right: 1rem;
                }
            }

            li:first-of-type {
                padding: 1.3rem 0;
                font-weight: 900;
                font-size: 1.5rem;
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

                li {
                    font-size: 1.1rem;
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

                li:nth-of-type(2)::before{
                    content: '\f14c';
                    margin-right: 1rem;
                }

                li:nth-of-type(3) {
                    margin-bottom: 1rem;
                }

                li:nth-of-type(3)::before{
                    content: '\f2a0';
                    margin-right: 1rem;
                }

                li:nth-of-type(4)::before{
                    content: '\f0e0';
                    margin-right: 1rem;
                }
            }
        }

        article:nth-of-type(2) {
            ul {

                li:nth-of-type(2) {
                    margin-bottom: 3rem;
                }

                li:nth-of-type(3) {
                    input,
                    span,
                    div {
                        display: block;
                    }

                    input {
                        width: 25rem;
                        padding: 1rem;
                        border-radius: 3px;
                        border: 0;
                    }

                    span {
                        text-align: center;
                        color: #c62d2d;
                        font-size: 1em;
                        font-weight: normal;
                        display: block;
                    }

                    div {
                        padding:.5rem .3rem .5rem .3rem;
                        border: 2px solid #ffb900;
                    }

                    input:first-of-type {
                        margin-bottom: .3rem;
                    }

                    input:nth-of-type(2) {
                        background-color: white;
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
        margin-bottom: 1rem;
    }

    section:nth-of-type(2) {
        text-align: center;

    }
}

.wpcf7-spinner {
    visibility: hidden;
    display: inline-block;
    background-color: #23282d;
    opacity: 0.75;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 100%;
    padding: 0;
    margin: 0 24px;
    position: relative;
}


.wpcf7-spinner::before {
    content: '';
    position: absolute;
    background-color: #fbfbfc;
    top: 4px;
    left: 4px;
    width: 6px;
    height: 6px;
    border: none;
    border-radius: 100%;
    transform-origin: 8px 8px;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
</style>
