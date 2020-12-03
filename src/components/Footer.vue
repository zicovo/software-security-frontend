<template>
    <div>
        <v-footer padless height="70px">
            <v-card
             flat
             tile
             width="100%"
             height="100%"
             class="red lighten-1 text-center">
                
                   
                <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong> &copy; Zaci All rights reserved</strong>
                    <v-btn text dark>Privacy policy.</v-btn>

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