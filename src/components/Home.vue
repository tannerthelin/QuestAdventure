<template>
  <div class="home-container">
    <img src="../assets/logo.png" alt="Simple Dungeon Logo" width="182px" />
    <p>
      Welcome to <span class="light-text">Simple Dungeon</span> -- a text
      adventure game created by Tanner Thelin & Friends.
    </p>
    <br />

  <router-link class="button" to="/character">Click to get started</router-link>
  <br />

    <!-- This is where we can store things in the databade (may need to be moved later) -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      showAdmin: false
    };
  },
  methods: {
    submit() {
      this.$http
        .post(
          "https://questadventure-46622.firebaseio.com/data.json",
          this.user
        )
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>

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

.click {
  padding: 7px 12px;
  border-radius: 5px;
  margin: 12px 0;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: rgb(105, 105, 105);
}


</style>
