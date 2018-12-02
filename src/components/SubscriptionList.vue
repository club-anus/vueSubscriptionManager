<template>
    <ul>
        <li v-for="item in list" v-bind:key="item.id">
        <card 
            :id="item.id"
            :title="item.title"
            :amount="item.amount"
        />
        </li>
    </ul>
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
