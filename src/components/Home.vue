<template>
    <div class="home-container">
        <img src="../assets/logo.png" alt="Simple Dungeon Logo" width="182px">
        <p>Welcome to <span class="light-text">Simple Dungeon</span> -- a text adventure game created for DGM-3780 at Utah Valley University.</p>
        <br><br>
        <p class="light-text">Press any key to begin.</p>
    </div>
</template>

<style scoped>

    .home-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img {
        margin-bottom: 60px;
    }

    p {
        max-width: 616px;
    }

</style>
