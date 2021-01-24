<template>
    <div>
        <v-footer padless height="75px" class="mt-5">
            <v-card
             flat
             tile
             width="100%"
             height="100%"
             class="red lighten-1 text-center">
                
                   
                <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong> &copy; Zaci All rights reserved</strong>
                    <v-divider v-if="$vuetify.breakpoint.smAndDown" class="mt-1"></v-divider>
                    <v-btn text dark :to="{name: 'privacyPolicy'}">Privacy policy.</v-btn>

                 <v-btn text dark icon>
                        <v-icon>fa4 fa-facebook</v-icon>
                    </v-btn>
                    <v-btn text dark icon>
                        <v-icon>fa4 fa-instagram</v-icon>
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>