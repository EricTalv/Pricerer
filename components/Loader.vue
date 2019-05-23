<template>
    <div class="et-Footer">
        <div class="loader"
        ></div>
    </div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style>
    .loader {
        margin: 5% auto;
        border: 10px solid #f3f3f3; /* Light grey */
        border-top: 10px solid grey; /* Blue */
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 0.5s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>