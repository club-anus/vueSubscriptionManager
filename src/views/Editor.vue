<template>
    <div>
        <input type="text" v-model="Title"/><br>
        <input type="number" v-model="Amount" /><br>
        <button v-if="Id == null" @click="add(Title, Amount)">追加</button>
        <button v-else @click="upd(Id, Title, Amount)">変更</button>
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
