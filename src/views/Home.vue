<template>
    <v-container fluid grid-list-lg>
        <v-layout wrap>
            <v-flex shrink>
                <v-btn large @click="createNewBlock">
                    <v-icon class="pl-0 pr-2">mdi-plus</v-icon> Create New Block
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout wrap>
            <v-flex xs3 v-for="block in blockchain.blocks" :key="block.header">
                <v-card>
                    <v-card-title>
                        <span class="subtitle-2">{{block.header}}</span>
                    </v-card-title>
                    <v-divider />
                    <v-card-text>
                        Data: <br/>
                        {{block.data}}
                    </v-card-text>
                    <v-divider />
                    <v-card-text>
                        Previous Header: <br/>
                        {{block.prevHeader}}
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<style>
    .lower-case {
        text-transform: none !important;
    }
</style>

<script>

    import { WeatherRepository } from '../repositories';
    import ConditionTypes from '../utilities/ConditionTypes';

    import { Blockchain } from '../blockchain-library';
    // import Block from '../models/Block';

    export default {
        name: "Home",

        components: {
            
        },

        data: () => {
            return {
                conditions: ConditionTypes,
                weather: new WeatherRepository(),

                blockchain: new Blockchain(),
            }
        },
        created() {

        },
        computed: {
            forecastChartOptions() {
                return {
                    theme: {
                        mode: this.$vuetify.theme.dark? 'dark' : 'light',
                        monochrome: {
                            enabled: false,
                            color: '#abcdef'
                        }
                    },
                    chart: {
                        sparkline: {
                            enabled: false
                        },
                        group: 'forecast',
                        toolbar: {
                            show: false
                        }
                    },
                    grid: {
                        padding: {
                            top: 0,
                            left: 5,
                            right: 5,
                            bottom: 0
                        }
                    },
                    stroke: {
                        lineCap: 'round'
                    },
                    yaxis: {
                        labels: {
                            minWidth: 5
                        }
                    }
                }
            },
            forecastChartSeries() {
                var seriesCollection = [];
                seriesCollection.push({});
                return [];
            }
        },
        methods: {
            getConditionIcon(conditionCode) {
                return this.conditions.getCondition(conditionCode).DAY_ICON;
            },
            async createNewBlock() {
                var result = await this.blockchain.addBlock({
                    number: this.blockchain.blocks.length
                })
                console.log(result);
            }
        },
        mounted() {
            // for (var i = 0; i < 4; i++) {
            //     this.blockchain.addBlock({
            //         number: i
            //     });
            // }
        }
    };
</script>
