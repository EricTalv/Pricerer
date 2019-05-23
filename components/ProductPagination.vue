<template>

        <v-container fluid grid-list-sm>
            <v-layout wrap>
                <product-card
                        :content="item"
                        :key="item.id"
                        v-for="item in content.pageItems"
                ></product-card>
                <v-pagination
                        :length="content.totalPages"
                        v-model="page"
                        v-on:input="changePage"
                ></v-pagination>
            </v-layout>
        </v-container>
</template>

<script>
    export default {
        name: "ProductPagination",
        props: ['content'],

        data() {
            return {
                page: 1

            }
        },


        methods: {
            changePage(page) {
                this.page = page
                this.$store.dispatch('dataRetriever/getDefaultPage', {page: this.page});

            }
        }

    }
</script>

<style scoped>

</style>