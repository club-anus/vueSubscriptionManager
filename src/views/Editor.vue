<template>
    <div id="input">
        <md-field>
            <label>Service Name</label>
            <md-input v-model="Title"></md-input>
            <span v-if="!IsTitleValid" class="md-helper-text"><font color="red">サービス名を入力してください</font></span>
        </md-field>
        <md-field>
            <label>Amount</label>
            <md-input v-model.number="Amount" type="number"></md-input>
            <span v-if="!IsAmountValid" class="md-helper-text"><font color="red">課金額を入力してください</font></span>
        </md-field>
        <div id="button">
            <md-button class="md-raised md-primary" v-if="Id == null" @click="add(Title, Amount)">ADD</md-button>
            <md-button class="md-raised md-primary" v-else @click="upd(Id, Title, Amount)">UPDATE</md-button>
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
            Amount: this.amount,
            IsTitleValid: true,
            IsAmountValid: true
        }
    },
    methods: {
        add(title, amount) {
            if (!this.isValid(title, amount)) {
                return
            }
            this.$store.dispatch('subscriptionAdd', {title, amount})
            const view = { name: 'home' }
            this.$router.push(view)
        },
        upd(id, title, amount) {
            if (!this.isValid(title, amount)) {
                return
            }
            this.$store.dispatch('subscriptionUpd', {id, title, amount})
            const view = { name: 'home' }
            this.$router.push(view)
        },
        isValid(title, amount) {
            if (title === "") {
                this.IsTitleValid = false
            } else {
                this.IsTitleValid = true
            }

            if (amount == null || amount < 0 || amount === "") {
                this.IsAmountValid = false
            } else {
                this.IsAmountValid = true
            }

            if (!this.IsTitleValid || !this.IsAmountValid) {
                return false
            } else {
                return true
            }
        }
    }
}
</script>

<style scoped>
    #input {
        padding: 10vw;
    }
    #button {
        text-align: center;
    }
</style>
