<template>
    <v-app>
        <v-container
                fluid
                grid-list-md>
            <v-layout align-center justify-center wrap>
                <v-flex lg12 md12 sm12 text-xs-center xl12 xs12>

                    <div class="headline">
                        <u>Welcome To Pricerer</u>
                        <div class="subheading">Think More, Spend Less</div>
                    </div>

                    <v-flex lg8 mx-auto sm8 xs8>
                        <v-text-field
                                centered
                                key="main-content"
                                label="Your Product"
                                outline
                                style="text-align: center;"
                                v-model="userInput"
                                v-on:keyup.enter="sendQuery"
                        >
                        </v-text-field>
                    </v-flex>
                </v-flex>

                <div class="et-Footer">
                    <div
                            class="loader"
                            v-if="this.$store.state.dataRetriever.loading"></div>
                </div>

                <div key="dynamic" style="border: 2px solid rgba(0,0,0,0.54); border-radius: 4px; "
                     v-if="products.length">
                    <v-container fluid grid-list-sm>
                        <v-layout wrap>

                            <product-card

                                    :content="item"
                                    :key="item.id"
                                    v-for="item in products"

                            ></product-card>

                        </v-layout>
                    </v-container>
                </div>
                <div key="dynamic" style="border: 2px solid rgba(0,0,0,0.54); border-radius: 4px; "
                     v-if="noProd">
                    <v-container fluid grid-list-sm>
                        <v-layout wrap>
                            <h1>We do not have any {{this.info}}</h1>
                        </v-layout>
                    </v-container>
                </div>
            </v-layout>
        </v-container>
    </v-app>
</template>


<script>


    import ProductCard from "../components/ProductCard";

    export default {
        name: "index",
        components: {ProductCard},
        data() {
            return {
                productsExist: false,
                info:'',

            }
        },

        created() {
            console.log(this.$store.state.dataRetriever.loading)
        },

        methods: {

            sendQuery() {

                this.$store.dispatch('dataRetriever/DataSearcher');

            }

        },

        computed: {
            products() {
                return this.$store.state.dataRetriever.products;
            },
            userInput: {
                get() {
                    return this.$store.state.dataRetriever.data
                },
                set(value) {
                    if(value){
                        this.info=value;
                        this.$store.dispatch('dataRetriever/setData', value)
                    }

                }
            },
            noProd(){
                console.log(this.$store.state.dataRetriever.noProducts);
                return this.$store.state.dataRetriever.noProducts
            }

        }
    }
</script>

<style>

    .loader {
        margin: 5% auto;
        border: 10px solid #f3f3f3; /* Light grey */
        border-top: 10px solid grey; /* Blue */
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 0.5s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

</style>
