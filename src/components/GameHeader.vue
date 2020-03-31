<template>
    <div class="header-container">
        <div class="player-content">
            <div class="player-image">
                <img class="character-image" src="../assets/char-peasant.png" alt="Peasant Character" width="80px"/>
                <p class="player-name">Samwise</p>
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
    </div>
</template>

<style scoped>

.header-container {
    padding: 20px;
}

.player-content {
    display: flex;
    align-items: center;
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
