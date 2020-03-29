<template>
  <div class="home-container">
    <img src="../assets/logo.png" alt="Simple Dungeon Logo" width="182px" />
    <p>
      Welcome to <span class="light-text">Simple Dungeon</span> -- a text
      adventure game created for DGM-3780 at Utah Valley University.
    </p>
    <br /><br />
    <p class="light-text">Press any key to begin.</p>

    <!-- This is where we can store things in the databade (may need to be moved later) -->
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
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      }
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
</style>
