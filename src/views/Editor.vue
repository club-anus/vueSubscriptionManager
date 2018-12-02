<template>
    <div>
        <md-field>
            <label>Service Name</label>
            <md-input v-model="Title"></md-input>
        </md-field>
        <md-field>
            <label>Amount</label>
            <md-input v-model.number="Amount" type="number"></md-input>
        </md-field>
        <div id="button">
            <md-button class="md-raised" v-if="Id == null" @click="add(Title, Amount)">ADD</md-button>
            <md-button class="md-raised" v-else @click="upd(Id, Title, Amount)">UPDATE</md-button>
        </div>
    </div>
</template>


<script>
import {mapActions} from 'vuex'

export default {
    props: {
        id: Number,
        title: String,
        amount: Number
    },
    data() {
        return {
            Id: this.id,
            Title: this.title == null ? "": this.title,
            Amount: this.amount == null ? 0: this.amount
        }
    },
    methods: {
        add(title, amount) {
            this.$store.dispatch('subscriptionAdd', {title, amount})
            const view = { name: 'home' }
            this.$router.push(view)
        },
        upd(id, title, amount) {
            this.$store.dispatch('subscriptionUpd', {id, title, amount})
            const view = { name: 'home' }
            this.$router.push(view)
        }
    }
}
</script>

<style scoped>
    #button {
        text-align: center;
    }
</style>
