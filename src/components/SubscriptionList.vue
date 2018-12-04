<template>
    <md-content class="md-scrollbar">
        <div v-for="item in list" v-bind:key="item.id">
            <card 
                :id="item.id"
                :title="item.title"
                :amount="item.amount"
            />
        </div>
    </md-content>
</template>

<script>
import Card from './SubscriptionCard'
import {mapGetters} from 'vuex'

export default {
    components: {
        'card': Card
    },
    computed: {
        ...mapGetters({
            list: 'subscriptionList'
        })
    }
}
</script>

<style scoped>
    .md-content {
        height: 78vh;
        overflow: auto;
    }
</style>
