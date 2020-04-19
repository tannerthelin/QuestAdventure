import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        characterInfo: {
            name: 'name here',
            character: ''
        },
        story: [
            {
                id: '0',
                story: 'You wake up in your dusty room. Books and scrolls cover the walls. All of the sudden, you hear a knock at your door.',
                death: false,
                choices: [
                    {
                        id: '1',
                        choiceText: 'Answer the door'
                    },
                    {
                        id: '2',
                        choiceText: 'Do not answer the door'
                    },
                ]
            },
            {
                id: '1',
                story: 'You open the door to see a small goblin. He tells you that his goblin village has been raided by a dragon and that they need your help.',
                death: false,
                choices: [
                    {
                        id: '3',
                        choiceText: 'Agree to help the goblin village'
                    },
                    {
                        id: '3',
                        choiceText: 'Slam the door in his face'
                    },
                ]
            },
            {
                id: '2',
                story: 'You decide not to answer the door. After a few more knocks, you hear the visitor sigh and walk away from your door.',
                death: false,
                choices: [
                    {
                        id: '3',
                        choiceText: 'Peek outside the door'
                    },
                    {
                        id: '3',
                        choiceText: 'Go back to sleep'
                    },
                ]
            },
            {
                id: '3',
                death: false,
                story: 'PLACEHOLDER: this is the end of the story for now.',
            }
        ]
    },
    mutations: {
        'CHANGE_CHARACTER' (state, payload) {
            state.characterInfo.character = payload;
        },
        'CHANGE_NAME' (state, payload) {
            state.characterInfo.name = payload;
        },
    },
    actions: {
        changeCharacter(context, char) {
            context.commit('CHANGE_CHARACTER', char);
        },
        changeName(context, name) {
            context.commit('CHANGE_NAME', name);
        }
    }
});
