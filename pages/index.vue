<template>
    <v-container
            fluid
            grid-list-md
            v-bind:class=""

            v-bind="CheckItemListVisibility">

        <v-btn
            fixed
            v-on:click="triggerTransition"

        >TEST BUTTON</v-btn>

        <transition-group
                name="fade"
                class="wrapper"
                tag="div"
        >
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
        </transition-group>

            <v-layout
                    justify-center
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
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                ItemListVisible: false
            }
        },
        methods: {

        },

        computed: {

        }
    }
</script>

<style>

    .et-transition-enter {
        opacity: 0;
        transform: rotateY(50deg);
    }

    .et-transitiont-enter-to {
        opacity: 1;
        transform: rotateY(0deg);
    }

    .et-transitiont-enter-active {
        transition: opacity, transform 200ms ease-out;
      }

    .et-transition-leave {

    }

</style>
