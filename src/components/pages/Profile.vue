<template>
  <div class="profile">
    <div v-if="isAuthenticated">
      <h1>SECRET ZONE</h1>
      <div>Authenticated: {{ isAuthenticated }}</div>
      <button @click="logout()">Logout</button>
    </div>
    <div v-if="!isAuthenticated">
      <h1>No Authorized</h1>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        isAuthenticated : 'isAuthenticated'
      }),
    },
    methods: {
      ...mapActions({
        logoutStore: 'logout'
      }),
      logout(){
        this.logoutStore()
      }
    }
  }
</script>

<style>
  .profile{
    height: 200px;
    background-color: yellow;
  }
</style>
