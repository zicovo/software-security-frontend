<template>
    <div>
        <v-container>

          <v-alert
          v-if="showSuccess"
          type="success"
          >
          Your profile was updated successfully!
          </v-alert>

        <h2 class="mt-10 mb-10">Hi {{this.currentUser.firstname}}, welcome to your profile!</h2>
         <ValidationObserver>
      <v-form @submit.prevent="submit" :disabled="disabled">
       <validation-provider
        v-slot="{ errors }"
        name="firstName"
        rules="required"
      >
        <v-text-field
          v-model="currentUser.firstname"
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
          v-model="currentUser.lastname"
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
      <v-btn
        class="mr-4"
        color="secundary"
        dark
        @click="editForm"
      >
        Edit
      </v-btn>
       <v-btn
        class="mr-4"
        color="blue"
        dark
        @click="getUserData"
      >
      Get my data
     </v-btn>
      <v-btn
        class="mr-4"
        color="red"
        dark
        @click="deleteUser"
      >
      Delete my profile
     </v-btn>
      </v-form>
     </ValidationObserver>

    

<div class="custom-spacer"></div>
        </v-container>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { ValidationObserver, ValidationProvider } from 'vee-validate';
    import UserService from '@/services/UserService'

    export default {
    middleware: ['userInitialised','completelyRegistered'],
    components: {
        ValidationObserver: ValidationObserver,
        ValidationProvider: ValidationProvider
    },
    
    data() {
        return {
            currentUser: this.$store.state.Users.user,
            disabled: true,
            showSuccess: false
        }
    },

   computed: mapState({User: state => state.Users.user}),


    methods: {
      editForm(){
        this.disabled = false;
      },


      async submit(){

        const updatedUser = this.currentUser;
         
        this.$store.dispatch('Users/updateUser', updatedUser)

        this.showSuccess = true
      },

      async getUserData(){
        const token = await this.$auth.getTokenSilently()
        const userData = await UserService.getAllUserData(token, this.currentUser.id)

        //create json file with all user data
         let element = document.createElement('a');
          element.setAttribute(
            'href',
            'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(userData))
          );
          element.setAttribute('download', 'user_data.json');
          element.style.display = 'none';
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
            }, 

      async deleteUser(){
        console.log('delete my data')
        const token = await this.$auth.getTokenSilently()
        const deleteData = await UserService.deleteUser(token, this.currentUser.id)
        console.log(deleteData)
        this.$router.push({name: 'deletedProfile'})
        this.$auth.logout()
      }
    }

    }
</script>

<style lang="scss" scoped>

.custom-spacer{
  height: 250px;
}
</style>