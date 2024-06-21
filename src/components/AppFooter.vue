<script>

import {store} from '../store.js';

export default{
    data() {
        return{
            store,
        }
    },
    methods: {
        
    },
    mounted() {
    }
}

// codice per messaggio errore per il form nel footer
var name = document.querySelector("input");
console.log(name)
    // function setErrorMessage() {
    //     if ( name.validity.valueMissing ) {
    //         name.setCustomValidity( "Funziona" );
    //     }
    // };
    // setErrorMessage();
    // name.addEventListener( "change", setErrorMessage );
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
                    <!-- <i class="fa-solid fa-location-dot"></i> -->
                    {{ store.listaElementiFooter[index].indirizzo }}
                    {{ store.listaElementiFooter[index].li_1 }}
                </li>
                <li>
                    <!-- <i class="fa-solid fa-phone-volume"></i> -->
                    {{ store.listaElementiFooter[index].telefono }}
                    {{ store.listaElementiFooter[index].li_2 }}
                    <form action="" method="post">
                        <input type="email" class="input-field" name="email" id="email" placeholder="Your Email Address" required>
                        <span class="wpcf7-not-valid-tip" aria-hidden="true">The field is required.</span>
                        <input type="submit" value="Subscribe ->"></input>
                        <span class="wpcf7-spinner"></span>
                        <div class="wpcf7-response-output" aria-hidden="true">One or more fields have an error. Please check and try again.</div>
                    </form>
                </li>
                <li>
                    <!-- <i class="fa-solid fa-envelope"></i> -->
                    {{ store.listaElementiFooter[index].email }}
                    {{ store.listaElementiFooter[index].li_3 }}
                </li>
                <li>
                    {{ store.listaElementiFooter[index].li_4 }}
                    <!-- <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i> -->
                </li>
                <li>
                    {{ store.listaElementiFooter[index].li_5 }}
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
                        // visibility: hidden;
                        text-align: center;
                        color: #c62d2d;
                        font-size: 1em;
                        font-weight: normal;
                        display: block;
                    }

                    div {
                        // visibility: hidden;
                        padding:.5rem .3rem .5rem .3rem;
                        border: 2px solid #ffb900;
                    }

                    input[type="email"] {
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
                    width: 5.5rem;
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
                    width: 8rem;
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
