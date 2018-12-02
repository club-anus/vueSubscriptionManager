<template>
    <div>
        <card 
            v-for="item in list" 
            v-bind:key="item.id"
            :id="item.id"
            :title="item.title"
            :amount="item.amount"
        />
    </div>
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
