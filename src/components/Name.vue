<template>
    <!-- Stretches the height of the window -->
    <div class="main-container">
        <!-- Constrains the main content to 700px -->
        <div class="content-container">
            <p>What is your character's name?</p>
            <form action="/game">
                <input type="text" input placeholder="Enter name here...">
            </form>
        </div>
        <AppFooter />
    </div>
</template>

<script>
import AppFooter from './Footer.vue';

export default {
    components: {
        AppFooter
    }
    

}
</script>


<style scoped>
    input {
        width: 100%;
        font-family: 'CarbonBold', sans-serif;
        font-size: 20px;
        text-transform: uppercase;
        background-color: #1C1C1C;
        border: 1px solid #434343;
        padding: 20px 12px;
        color: white;
        margin-top: 16px;
    }

    input:focus {
        outline: none;
    }
</style>
