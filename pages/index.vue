<template>
    <v-container
            fluid
            grid-list-md
            v-bind:class=""
            class="et-Margin"
            v-bind="CheckItemListVisibility">

        <transition >
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
                                v-on:keyup.enter="transitionToItems"
                        >
                        </v-text-field>
                    </v-card>
                </v-flex>
            </v-layout>
        </transition>

        <v-fade-transition>
            <v-layout
                    justify-center
                    v-if="ItemListVisible"
            >
                <v-flex xs2>
                    <v-card>
                        <v-card-text>one</v-card-text>
                    </v-card >
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
        </v-fade-transition>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                ItemListVisible: false,

            }
        },
        methods: {
            transitionToItems: function () {
                if (!this.ItemListVisible) {
                     this.ItemListVisible = true
                }
            }
        },

        computed: {
            CheckItemListVisibility() {

            }
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .et-Margin {
        margin-top: 25vh;
    }
</style>
