<template>
    <!-- Stretches the height of the window -->
    <div class="main-container">
        
        <!-- Reset Button -->
        <div class="resetbutton">
            <router-link class="button" to="/Home">RESET</router-link>
        </div>

        <!-- Constrains the main content to 700px -->
        <div class="content-container">
             
            <p>Select your character</p><br>

            <!-- A character select element (PEASANT) -->
             <router-link class="char-select-router" to="/name">
            <div class="character-select" @click="changeCharacter('peasant')">
                <img class="triangle" src="../assets/triangle.svg" width="7px">
                <img class="character-image" src="../assets/char-peasant.png" alt="Peasant Character" width="81px">
                <div>
                    <p>Peasant</p>
                    <p class="light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
             </router-link>

            <!-- A character select element (KNIGHT) -->
            <router-link class="char-select-router" to="/name">
            <div class="character-select" @click="changeCharacter('knight')">
                <img class="triangle" src="../assets/triangle.svg" width="7px">
                <img class="character-image" src="../assets/char-knight.png" alt="Peasant Character" width="81px">
                <div>
                    <p>Knight</p>
                    <p class="light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
  </router-link>


            <!-- A character select element (WIZARD) -->
             <router-link class="char-select-router" to="/name">
            <div class="character-select" id="last-character" @click="changeCharacter('wizard')">
                <img class="triangle" src="../assets/triangle.svg" width="7px">
                <img class="character-image" src="../assets/char-wizard.png" alt="Peasant Character" width="81px">
                <div>
                    <p>Wizard</p>
                    <p class="light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>        
         </router-link>
         
        <!-- End of character list -->

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
    methods: {
        changeCharacter(char) {
                this.$store.dispatch("changeCharacter", char);
            },
    }
}
</script>

<style scoped>
    .character-select {
        display: flex;
        line-height: 120%;
        align-items: center;
        border-top: 1px solid #4E4E4E;
        padding: 8px 0px;
        display: relative;
        cursor: pointer;
    }

    .character-image {
        margin-right: 20px;
        opacity: .5;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        transition: .2s ease;
    }

    .character-select:hover .character-image {
        opacity: 1;
        -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%);
    }

    .character-select:hover .triangle {
        opacity: 1;
    }

    #last-character {
        border-bottom: 1px solid #4E4E4E;
    }

    .triangle {
        position: absolute;
        margin-left: -36px;
        opacity: 0;
    }

    .char-select-router {
        padding: 0;
        margin: 0;
        color: rgb(83, 83, 83);
        text-decoration: none;        
    }


    a:hover {
        color: white;
    }

    .resetbutton {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 5px;
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .main-container {
        position: relative;
    }

</style>
