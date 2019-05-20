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

                    <v-flex lg12 mx-auto sm10 xs8>
                        <v-text-field
                                centered
                                key="main-content"
                                label="Your Product"
                                outline
                                style="text-align: center;"
                                v-on:keyup.enter="ItemListVisible = !ItemListVisible"
                        >
                        </v-text-field>
                    </v-flex>
                </v-flex>

                <div key="dynamic" style="border: 2px solid rgba(0,0,0,0.54); border-radius: 4px; "
                     v-if="ItemListVisible">
                    <v-container fluid grid-list-sm>
                        <v-layout wrap>
                            <product-card></product-card>

                        </v-layout>
                    </v-container>
                </div>
            </v-layout>
        </v-container>
    </v-app>
</template>

<!--https://35.205.172.130/getAll-->


<script>


    import ProductCard from "../components/ProductCard";

    export default {
        name: "index",
        components: {ProductCard},
        data() {
            return {
                ItemListVisible: false,
            }
        },

        created() {
            if (this.$store.dispatch('retrieveData')){
                console.log('success')
            } else {

                console.log('fail')
            }

        },

        methods: {

        },

        computed: {

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
