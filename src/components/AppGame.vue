<template>
<div class="game-wrapper">
    <GameHeader class="game-header" />
    <!-- Stretches the height of the window -->
    <div class="main-container">
        
        <!-- Constrains the main content to 700px -->
        <div class="content-container">

            <!-- Display the current story -->
            <p>{{currentStory.story}}</p>

            <!-- Display the current choices -->
            <div class="choices-container">
                <div v-for="choice in currentStory.choices" :key="choice.id" class="story-choice">
                    <img class="triangle" src="../assets/triangle.svg" width="7px">
                    <p>{{choice.choiceText}}</p>
                </div>
            </div>
        </div>
        <AppFooter />
    </div>
</div>
</template>

<script>
import AppFooter from './Footer.vue';
import GameHeader from './GameHeader.vue';

export default {
    components: {
        AppFooter,
        GameHeader
    },
    data () {
        return {
            currentStory: {
                id: '001',
                story: 'you come across a bear. the bear sees you and starts slowly walking towards you.',
                choices: [
                    {
                        id: '002',
                        choiceText: 'Run away from the bear'
                    },
                    {
                        id: '003',
                        choiceText: 'Fight the bear'
                    },
                ]
            }            
        }        
    }
}
</script>

<style scoped>

.game-wrapper {
    height: 100%;
}

.main-container {
    height: 100% !important;
}

.choices-container {
    border-top: 1px solid #4E4E4E;
    margin-top: 70px;    
}

.story-choice {
    padding: 26px 0px;
    border-bottom: 1px solid #4E4E4E;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.story-choice p{
    opacity: 0.3;
}

.triangle {
        position: absolute;
        margin-left: -36px;
        opacity: 0;
    }

.story-choice:hover .triangle {
    opacity: 1;
}

.story-choice:hover p {
    opacity: 1;
}

.game-header {
    position: absolute;
    top: 0;
}
</style>
