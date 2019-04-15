<template>
    <v-container
            fluid
            grid-list-md
            v-bind:class=""

            v-bind="CheckItemListVisibility">

        <v-btn
                fixed
                v-on:click="triggerTransition"

        >TEST BUTTON
        </v-btn>

        <transition-group name="fade" class="wrapper" tag="div">

            <div v-if="switc" key="dynamic" style="border: 2px solid black">
                <p>
                    Text that could be of any length because it comes from a database.
                </p>
                <textarea>
        Textarea that the user can resize
      </textarea>
            </div>

            <button key="main-content" type="button" class="btn btn-secondary" style="width:100%"
                    @click="switc = !switc">
                <span>Switch</span>
            </button>

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
                            v-on:keyup.enter="transitionToItems"
                    >
                    </v-text-field>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout
                justify-center
                v-if="ItemListVisible"
        >
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

    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                ItemListVisible: false,
                switc: false
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

        >* {
                  transition: all 0.5s;
                  width: 100%;
        }
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
