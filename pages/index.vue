<template>
    <v-container
            fluid
            grid-list-md>

        <transition-group name="fade" class="wrapper" tag="div">
            <v-text-field
                    key="main-content"
                    style="text-align: center; margin-top: 15vh;"
                    outline
                    label="Your Product"
                    centered
                    v-on:keyup.enter="ItemListVisible = !ItemListVisible"
            >
            </v-text-field>


            <div v-if="ItemListVisible" key="dynamic" style="border: 2px solid black">
                <v-layout justify-center>
                    <v-flex xs2>
                        <v-card>
                            <v-card-text>one</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs2>
                        <v-card>
                            <v-card-text>two</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs2>
                        <v-card>
                            <v-card-text>three</v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </div>

        </transition-group>


        <v-layout justify-center>
            <v-flex shrink>
                <v-card flat>
                    <v-card-title primary-title>
                        <div class="text-xs-center">
                            <div class="headline">
                                <u>Welcome To Pricerer</u>
                            </div>
                            <div class="grey--text">Think More, Spend Less</div>
                        </div>
                    </v-card-title>
                    <br>
                    <v-text-field
                            style="text-align: center"
                            outline
                            label="Your Product"
                            centered
                    >
                    </v-text-field>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                ItemListVisible: false,
            }
        },
        methods: {},

        computed: {}
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
