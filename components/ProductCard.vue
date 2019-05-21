<template>
    <v-flex>
        <v-card>
            <v-card-title>
                <div class="headline">
                    Product {{ title }}
                </div>
            </v-card-title>
            <v-card-text>Product {{ data }}</v-card-text>
        </v-card>
    </v-flex>

</template>

<script>
    export default {
        name: "ProductCard",
        props: ['title', 'data']
    }
</script>

<style scoped>

</style>