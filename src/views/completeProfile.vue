<template>
    <div>
        <h1>Please complete your profile before continuing</h1>

     <ValidationObserver
       ref="observer"
     >
      <form @submit.prevent="submit">
       <validation-provider
        v-slot="{ errors }"
        name="firstName"
        rules="required"
      >
        <v-text-field
          v-model="user.firstName"
          :error-messages="errors"
          label="Firstname"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="lastName"
        rules="required"
      >
        <v-text-field
          v-model="user.lastName"
          :error-messages="errors"
          label="Lastname"
          required
        ></v-text-field>
      </validation-provider>


      <v-btn
        class="mr-4"
        type="submit"
        color="green"
        dark
      >
        submit
      </v-btn>
      </form>
     </ValidationObserver>

     <div class="custom-spacer"></div>
    </div>
</template>

<script>

  import { required } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import UserService from '../services/UserService'

  setInteractionMode('eager')


  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

export default {

   components: {
      ValidationProvider,
      ValidationObserver,
    },

  data() {
    return {
      user: {
          firstName: '',
          lastName: '',
      }
      
    }
  },

  methods: {

    async submit(){
        this.$refs.observer.validate()
        try {
          const user = {
            id: this.$auth.user.sub,
            firstname: this.user.firstName,
            lastname: this.user.lastName,
            completedProfile: true
          }
          const token = await this.$auth.getTokenSilently()
          const data = await UserService.updateUser(token, user)
          this.$router.push({ name : 'Profile' });

          console.log(data)
        } catch (error) {
          console.log(error)
        }
        this.clear()
    },

    clear(){
        this.user.firstName = ''
        this.user.lastName = ''
        this.$refs.observer.reset()
    }

  }
  }
</script>
<style>
  .custom-spacer{
    height: 350px;
  }
</style>
