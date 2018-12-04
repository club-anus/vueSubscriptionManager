<template>
    <div>
        <div id="total">
            <span class="md-helper-text">合計金額</span>
            <div  class="md-title">
                {{total.toLocaleString()}}円
            </div>
        </div>
        <md-button id="add" class="md-fab md-raised md-primary" @click="goToCreateView()">
            <md-icon>add</md-icon>
        </md-button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters({
            total: 'totalAmount'
        })
    },
    methods: {
        goToCreateView() {
            const view = { name: 'edit' }
            this.$router.push(view)
        }
    }
}
</script>

<style scoped>
    #add {
        position: fixed;
        right: 0;
        bottom: 0;
        margin-bottom: 2vh;
        margin-right: 5vw;
    }
    #total {
        text-align: center;
        padding-top: 1vh;
    }
</style>
