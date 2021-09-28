<template>
    <v-app :dark="$vuetify.theme.dark">
        <v-navigation-drawer 
            v-model="leftNavOpen"
            :clipped="true"
            app 
            overflow
        >
            <v-list nav>
                <v-list-item exact :to="{name: 'Home' }">
                    <v-list-item-action>
                        <v-icon large>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span>Home</span>
                        </v-list-item-title>
                        <v-list-item-action-text>
                            <span class="title-2">View network summary</span>
                        </v-list-item-action-text>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item exact :to="{name: 'Blockchain' }">
                    <v-list-item-action>
                        <v-icon large>mdi-link-box-variant</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span>Blockchain</span>
                        </v-list-item-title>
                        <v-list-item-action-text>
                            <span class="title-2">View blockchain info</span>
                        </v-list-item-action-text>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item exact :to="{name: 'Blocks' }">
                    <v-list-item-action>
                        <v-icon large>mdi-checkbox-multiple-blank</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span>Blocks</span>
                        </v-list-item-title>
                        <v-list-item-action-text>
                            <span class="title-2">View specific blocks</span>
                        </v-list-item-action-text>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item exact :to="{name: 'Transactions' }">
                    <v-list-item-action>
                        <v-icon large>mdi-swap-horizontal-circle</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span>Transactions</span>
                        </v-list-item-title>
                        <v-list-item-action-text>
                            <span class="title-2">View specific transactions</span>
                        </v-list-item-action-text>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item exact :to="{name: 'About' }">
                    <v-list-item-action>
                        <v-icon large>mdi-help-circle</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span>About</span>
                        </v-list-item-title>
                        <v-list-item-action-text>
                            <span class="title-2">Get more information</span>
                        </v-list-item-action-text>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar :clipped-left="true" app>
            
            <v-btn @click.stop="leftNavOpen = !leftNavOpen" icon class="ml-0">
                <v-icon>{{leftNavOpen?'mdi-backburger':'mdi-menu'}}</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <div class="d-flex align-center">
                <div class="display-1 font-weight-bold grey--text"><v-icon large class="mr-2">mdi-recycle</v-icon>blockchain-explore<v-icon large class="ml-2">mdi-recycle</v-icon></div>
            </div>

            <v-spacer></v-spacer>

            <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark" class="mr-0">
                <v-icon large :color="$vuetify.theme.dark?'warning':'primary'">mdi-theme-light-dark</v-icon>
            </v-btn>

        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>

        <v-footer app padless>
            <v-container class="pb-1 pt-1">
                <v-layout class="text-center" align-content-center>
                    <v-flex xs12>
                        <span class="subtitle-1 font-weight-bold grey--text">&copy;{{ moment().format('YYYY') }} blockchain-explore - All Rights Reserved - </span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "App",

        data: () => ({
            leftNavOpen: false,
        }),
        created() {
            //   this.currentLocation = navigator.geolocation.getCurrentPosition((location) => {
            //       this.currentLocation = location.coords;
            //   })
        }
    };
</script>
