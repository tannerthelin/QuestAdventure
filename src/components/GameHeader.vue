<template>
    <div class="header-container">
        <div class="player-content">
            <div class="player-image">
                <img v-if="currentCharacter === 'peasant'" class="character-image" src="../assets/char-peasant.png"  alt="Peasant Character" width="80px"/>
                <img v-if="currentCharacter === 'knight'" class="character-image" src="../assets/char-knight.png"  alt="Peasant Character" width="80px"/>
                <img v-if="currentCharacter === 'wizard'" class="character-image" src="../assets/char-wizard.png"  alt="Peasant Character" width="80px"/>
                <p class="player-name">{{this.$store.state.characterInfo.name}}</p>
            </div>
            <div class="player-info">
                <div class="health">
                    <img class="heart" src="../assets/heart.png" alt="heart" width="19px"/>
                    <img class="heart" src="../assets/heart.png" alt="heart" width="19px"/>
                    <img class="heart" src="../assets/heart.png" alt="heart" width="19px"/>
                </div>
                <div class="inventory">

                    <!-- the weapon item -->
                    <div class="inventory-item">
                        <img src="../assets/sword.png" alt="sword" width="42px"/>
                        <p>weapon</p>
                    </div>

                     <!-- the armor item -->
                    <div class="inventory-item">
                        <img src="../assets/armor.png" alt="armor" width="42px"/>
                        <p>Armor</p>
                    </div>

                     <!-- the potion item -->
                    <div class="inventory-item">
                        <img src="../assets/potion.png" alt="potion" width="42px"/>
                        <p>Potion</p>
                    </div>
                </div>
            </div> 
        </div> 
        <div></div>
        <div class="button-container">
            <div class="resetbutton">
                <router-link class="button" to="/Home">RESET</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        currentCharacter: 'peasant',
        };
     },
    mounted() {
        console.log('it was mounted.')

        if (this.$store.state.characterInfo.character === 'peasant') {
            console.log('your character is a peasant');
            this.currentCharacter = 'peasant';
        } else if (this.$store.state.characterInfo.character === 'knight') {
            console.log('your character is a knight');
            this.currentCharacter = 'knight';            
        } else if (this.$store.state.characterInfo.character === 'wizard') {
            console.log('your character is a wizard');
            this.currentCharacter = 'wizard';            
        } else {
            console.log('none of them, I guess.')
        }
    }
}
</script>

<style scoped>

.button-container {
    padding: 20px;
}

.button a {
    margin-top: 0px !important;
}

.header-container {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    width: 100vw;
}

.player-content {
    padding: 20px;
    display: flex;
    align-items: center;  
    flex-grow: 0;
}

.player-image {
    width: 80px;
    margin-right: 20px;
}

.player-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
}

.player-name {
    font-size: 14px;
    text-align: center;
    margin-top: -18px;
}

.heart {
    margin-right: 6px;
}

.inventory {
    display: flex;
}

.inventory-item {
    margin-right: 12px;
    height: 70px;
    width: 70px;
    border: 1px solid #333333;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.inventory-item p {
    line-height: 13px;
    opacity: 0.3;
}


</style>
