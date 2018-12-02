<template>
    <div>
        <div id="total" class="md-title">
            TOTAL:{{total}}円
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
        margin-bottom: 3vh;
        margin-right: 5vw;
    }
    #total {
        position: fixed;
        left: 0;
        bottom: 0;
        margin-left: 5vw;
        margin-bottom: 5vh;
    }
</style>
