<template>
    <v-container
            fluid
            grid-list-md
            v-bind:class=""
            class="et-Margin"
            v-bind="CheckItemListVisibility">

        <v-btn
            fixed
            v-on:click="triggerTransition"

        >TEST BUTTON</v-btn>
        <transition
                name="et-Transition"
        >
            <v-layout justify-center v-if="layoutVisible">
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
                layoutVisible: true,
            }
        },
        methods: {
            transitionToItems: function () {
                this.itemListVisible = !this.itemListVisible;
            },

            triggerTransition: function () {
                this.layoutVisible = !this.layoutVisible;
            }
        },

        computed: {
            CheckItemListVisibility() {

            }
        }
    }
</script>

<style>

    .et-Transitiont-enter {

    }

    .et-Transition-leave {

    }

    .et-Margin {
        margin-top: 25vh;


    }
</style>
