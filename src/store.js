import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        characterInfo: {
            name: '',
            character: ''
        },
        story: {
            // Story Elements will go here
        }
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
