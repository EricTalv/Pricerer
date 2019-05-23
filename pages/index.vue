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

                <loader v-if="this.$store.state.dataRetriever.loading"></loader>

                <div key="dynamic" style="border: 2px solid rgba(0,0,0,0.54); border-radius: 4px; "
                     v-if="!products.length">
                    <v-container fluid grid-list-sm>
                        <v-layout wrap>

                            <product-card
                                    :content="item"
                                    :key="item.id"
                                    v-for="item in defaultProducts.pageItems"
                            ></product-card>

                            <div class="mx-auto">

                                <v-pagination
                                        :length="defaultProducts.totalPages"
                                        v-model="page"
                                        total-visible="10"
                                        v-on:input="changePage"
                                ></v-pagination>

                            </div>
                        </v-layout>
                    </v-container>
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
                            <div class="display-1">Sorry! We do not have any <b><u>'{{this.info}}'</u></b> in our store!
                            </div>
                        </v-layout>
                    </v-container>
                </div>
            </v-layout>
        </v-container>
    </v-app>
</template>


<script>


    import ProductCard from "../components/ProductCard";
    import Loader from "../components/Loader";

    export default {
        name: "index",
        components: {Loader, ProductCard},
        data() {
            return {
                productsExist: false,
                info: '',
                page: 1

            }
        },

        created() {

            // Get default 20 products
            this.$store.dispatch('dataRetriever/getDefaultPage', this.page);

        },

        methods: {

            sendQuery() {
                this.$store.dispatch('dataRetriever/dataSearcher');
            },

            changePage(page) {
                this.page = page
                this.$store.dispatch('dataRetriever/getDefaultPage', {page: this.page});


            }

        },

        computed: {

            defaultProducts() {
                return this.$store.state.dataRetriever.default_products;
            },

            products() {
                return this.$store.state.dataRetriever.products;
            },
            userInput: {
                get() {
                    return this.$store.state.dataRetriever.data
                },
                set(value) {
                    if (value) {
                        this.info = value;
                        this.$store.dispatch('dataRetriever/setData', value)
                    }

                }
            },
            noProd() {
                return this.$store.state.dataRetriever.noProducts
            }

        }
    }
</script>

<style>


</style>
