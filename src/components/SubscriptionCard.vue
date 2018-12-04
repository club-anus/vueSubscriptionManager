<template>
    <md-card>
        <md-card-header>
            <span class="md-helper-text">サービス名</span>
            <div class="md-title">{{title}}</div>
        </md-card-header>
        <md-card-content>
            <span class="md-helper-text">課金額</span>
            <div class="md-title">{{amount}}円</div>
        </md-card-content>
        <md-card-actions>
            <md-button class="md-primary" @click="goToUpdate(id, title, amount)">Edit</md-button>
            <md-button class="md-accent" @click="del(id)">Delete</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props: {
        id: Number,
        title: String,
        amount: Number
    },
    methods: {
        ...mapActions({
            del: 'subscriptionDel'
        }),
        goToUpdate(id, title, amount) {
            const view = { name: 'edit', params: { id, title, amount }}
            this.$router.push(view)
        }
    }
}
</script>

<style scoped>
    .md-card {
        margin: 5vw;
    }
</style>
