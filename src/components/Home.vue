<template>
  <div class="home-container">
    <img src="../assets/logo.png" alt="Simple Dungeon Logo" width="182px" />
    <p>
      Welcome to <span class="light-text">Simple Dungeon</span> -- a text
      adventure game created for DGM-3780 at Utah Valley University.
    </p>
    <br />

  <router-link class="button" to="/character">Click to get started</router-link>
  <p class="button" @click="showAdmin = !showAdmin">Toggle Admin</p>
  <br />

    <!-- This is where we can store things in the databade (may need to be moved later) -->
    <div v-if="showAdmin">
      <div class="form-group">
        <label>Username</label>
        <input class="form-control" type="text" v-model="user.username" />
      </div>
      <div class="form-group">
        <label>Mail</label>
        <input class="form-control" type="text" v-model="user.email" />
      </div>
      <button class="btn btn-primary" @click="submit">Submit</button>
    </div>
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
