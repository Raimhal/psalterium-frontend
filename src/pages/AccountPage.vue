<template>
  <div class="user__page">
    <user-form :modified="modified">
      <template v-slot:header>
        <img src="@/assets/user_negate.png" height="32" width="32" class="mb-2"/>
        Account
      </template>
      <template v-slot:password>
        New password
      </template>
      <template v-slot:submit__name>
        Save
      </template>
    </user-form>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import UserForm from "@/components/UserForm";

export default {
  name: "AccountPage",
  components: {UserForm},
  mounted() {
    if(this.isAuth)
      this.getCurrentUser()
    else
      this.$router.push('/login')
  },
  beforeUnmount() {
    this.clearErrors()
  },
  data(){
    return{
      modified: true
    }
  },
  computed: {
    ...mapState({
      isAuth: state => state.isAuth,
      user: state => state.user.user,
    }),
  },
  methods: {
    ...mapActions({
      getCurrentUser: 'user/getCurrentUser',
      updateUser: 'user/updateUser',
    }),
    ...mapMutations({
      clearErrors: 'clearErrors'
    })
  }
}
</script>

<style scoped>

</style>