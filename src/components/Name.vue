<template>
    <!-- Stretches the height of the window -->
    <div class="main-container">
        <!-- Constrains the main content to 700px -->
        <div class="content-container">
            <p>What is your character's name?</p>
            <form action="">
                <input type="text" placeholder="Enter name here..." v-model="name">
            </form>
            <div class="button" @click="changeName(name)">Change Name</div>
        </div>
        <AppFooter />
    </div>
</template>

<script>
import AppFooter from './Footer.vue';

export default {
    components: {
        AppFooter
    },
    data () {
        return {
            name: ''
        }
    },
    methods: {
        changeName(name) {
            this.$store.dispatch("changeName", name);
        },
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

    .button {
        display: inline-block;
        font-size: 16px;
        margin-top: 12px;
        padding: 6px 10px;
        background-color: #393939;
        color: #757575;
        border-radius: 3px;
        -moz-box-shadow:    inset 0 -4px 0px #252525;
        -webkit-box-shadow: inset 0 -4px 0px #252525;
        box-shadow:         inset 0 -4px 0px #252525;
        transition: .15s ease;
    }

    .button:hover {
        color: #949494;
        background-color: #494949;
    }
</style>
