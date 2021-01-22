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
    </div>
</template>

<script>

  import { required } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

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
        this.user.firstName = ''
        this.user.lastName = ''
        this.$refs.observer.reset()
    },

  }
  }
</script>

