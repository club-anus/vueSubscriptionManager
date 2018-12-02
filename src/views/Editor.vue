<template>
    <div>
        <input type="text" v-model="title"/><br>
        <input type="number" v-model="amount" /><br>
        <button v-if="Id == null" @click="add({ Title, Amount })">追加</button>
        <button v-else @click="upd({ Id, Title, Amount })">変更</button>
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
        console.log(this)
        return {
            Id: this.id,
            Title: this.title == null ? "": this.title,
            Amount: this.amount == null ? 0: this.title
        }
    },
    methods: {
        ...mapActions({
            add: 'subscriptionAdd',
            upd: 'subscriptionUpd'
        })
    }
}
</script>
