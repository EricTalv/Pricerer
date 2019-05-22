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

                    <v-flex sm8 xs8 lg8 mx-auto>
                        <v-text-field
                                centered
                                key="main-content"
                                label="Your Product"
                                outline
                                style="text-align: center;"
                                v-on:keyup.enter="sendQuery"
                                v-model="userInput"
                        >
                        </v-text-field>
                    </v-flex>
                </v-flex>

                <div key="dynamic" style="border: 2px solid rgba(0,0,0,0.54); border-radius: 4px; "
                     v-if="products.length">
                    <v-container fluid grid-list-sm>
                        <v-layout wrap>

                            <product-card

                                v-for="item in products"
                                :content="item"
                                :key="item.id"

                            ></product-card>

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
                ItemListVisible: true,
                loading: true,
            }
        },

        created() {



        },

        methods: {

            sendQuery(){

                this.$store.dispatch('dataRetriever/DataSearcher');
            }

        },

        computed: {
            products() {
                return this.$store.state.dataRetriever.products;
            },
            userInput: {
                get () {
                    return this.$store.state.dataRetriever.data
                },
                set (value) {
                    this.$store.commit('dataRetriever/SET_DATA', value)
                }
            }

        }
    }
</script>

<style>

    .wrapper {
        display: flex;
        flex-direction: column;
    }

    .wrapper > * {
        transition: all 0.5s;
        width: 100%;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
        transform: translateY(-10px);
    }

    .fade-leave-active {
        position: absolute;
    }

</style>
