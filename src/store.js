import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		characterInfo: {
			name: "name here",
			character: "",
		},
		story: [
			{
				id: "0",
				story:
					"You wake up in your dusty room. Books and scrolls cover the walls. All of the sudden, you hear a knock at your door.",
				death: false,
				choices: [
					{
						id: "1",
						choiceText: "Answer the door",
					},
					{
						id: "2",
						choiceText: "Do not answer the door",
					},
				],
			},
			{
				id: "1",
				story:
					"You open the door to see a small goblin. He tells you that his goblin village has been raided by a dragon and that they need your help.",
				death: false,
				choices: [
					{
						id: "4",
						choiceText: "Agree to help the goblin village",
					},
					{
						id: "3",
						choiceText: "Slam the door in his face",
					},
				],
			},
			{
				id: "2",
				story:
					"You decide not to answer the door. After a few more knocks, you hear the visitor sigh and walk away from your door.",
				death: false,
				choices: [
					{
						id: "4",
						choiceText: "Peek outside the door",
					},
					{
						id: "3",
						choiceText: "Go back to sleep",
					},
				],
			},
			{
				id: "3",
				story:
					"You wake up to your house on fire. You try to escape but there is a chair against the door...you die.",
				death: true,
			},
			{
				id: "4",
				story:
					"The goblin leads you to their village where you see buildings burned and other goblins injured. He hands you a map with the location of the Dragons lair. He then proceeds to ask if he can join you in this quest to hunt the wretched dragon.",
				death: false,
				choices: [
					{
						id: "5",
						choiceText: "No, this is something I must do alone",
					},
					{
						id: "6",
						choiceText: "I’ll need all the help I can get",
					},
				],
			},
			{
				id: "5",
				story:
					"As you follow the path of Remwil on you way to the to the dragons lair you see ahead a group of bandits.",
				death: false,
				choices: [
					{
						id: "10",
						choiceText: "Go around Bandits",
					},
					{
						id: "9",
						choiceText: "Fight Bandits",
					},
				],
			},
			{
				id: "6",
				story:
					"As you follow the path of Remwil on you way to the to the dragons lair you see ahead a group of bandits.",
				death: false,
				choices: [
					{
						id: "8",
						choiceText: "Wait until nightfall and both attack bandits",
					},
					{
						id: "7",
						choiceText: "Send the Goblin to go talk to them",
					},
				],
			},

			{
				id: "7",
				story:
					"They Kill Billy the Goblin, take his stuff, and chase after you until you trip on a rock, fall down a mountain, and die. The city is then burned to ashes by the dragon",
				death: true,
			},
			{
				id: "8",
				story:
					"You Kill the 3 bandits and as you rummage through their things you happen to find a steel sword and a potion of healing. Since you brought Billy along, you need to share an item. Do you...",
				death: false,
				choices: [
					{
						id: "10",
						choiceText: "Keep the sword and give him the potion",
					},
					{
						id: "15",
						choiceText: "Keep the potion and give him the sword",
					},
				],
			},
			{
				id: "9",
				story:
					"You don’t have any weapons and there are 3 of them and 1 of you. You get in one punch, and then you are killed and left in some bushes on the Remwil trail to never be seen again..",
				death: true,
			},
			{
				id: "10",
				story:
					"You now make it to the base of the lair and you see a corpse with a plate of armour on it",
				death: false,
				weapon: true,
				choices: [
					{
						id: "12",
						choiceText: "Put on the armour",
					},
					{
						id: "11",
						choiceText: "Leave the armour out of respect for the corpse",
					},
				],
			},
			{
				id: "11",
				story:
					"You get to the dragon lair and he swallows you whole because you have no armour...",
				death: true,
			},
			{
				id: "12",
				story:
					"You now make it to the lair and the dragon wakes up from hearing your footsteps.",
				death: false,
				armor: true,
				choices: [
					{
						id: "13",
						choiceText: "Charge ?",
					},
					{
						id: "14",
						choiceText:
							"Stand back and play let the dragon make the first move while you hold up your shield",
					},
				],
			},
			{
				id: "13",
				story:
					"You get to the dragon lair and he swallows you whole because you have no armour...",
				death: true,
			},
			{
				id: "14",
				story:
					"You now make it to the lair and the dragon wakes up from hearing your footsteps.",
				death: false,
				choices: [
					{
						id: "100",
						choiceText: "Boss Fight!",
					},
				],
			},
			{
				id: "15",
				story:
					"You now make it to the base of the lair and you see a corpse with a plate of armour on it",
				death: false,
				potion: true,
				choices: [
					{
						id: "12",
						choiceText: "Put on the armour",
					},
					{
						id: "11",
						choiceText: "Leave the armour out of respect for the corpse",
					},
				],
			},
		],
	},
	mutations: {
		CHANGE_CHARACTER(state, payload) {
			state.characterInfo.character = payload;
		},
		CHANGE_NAME(state, payload) {
			state.characterInfo.name = payload;
		},
	},
	actions: {
		changeCharacter(context, char) {
			context.commit("CHANGE_CHARACTER", char);
		},
		changeName(context, name) {
			context.commit("CHANGE_NAME", name);
		},
	},
});
