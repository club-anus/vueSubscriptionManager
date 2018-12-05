<template>
    <div>
        <md-dialog :md-active.sync="isShowDialog">
            <md-dialog-title>本当に {{title}} を削除しますか？</md-dialog-title>
            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog()">cancel</md-button>
                <md-button class="md-accent" @click="del()">delete</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-card>
            <md-card-header>
                <span class="md-helper-text">サービス名</span>
                <div class="md-title">{{title}}</div>
            </md-card-header>
            <md-card-content>
                <span class="md-helper-text">課金額</span>
                <div class="md-title">{{amount.toLocaleString()}}円</div>
            </md-card-content>
            <md-card-actions>
                <md-button class="md-primary" @click="goToUpdate(id, title, amount)">Edit</md-button>
                <md-button class="md-accent" @click="showDialog()">Delete</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            isShowDialog: false
        }
    },
    props: {
        id: Number,
        title: String,
        amount: Number
    },
    methods: {
        del(){
            this.$store.dispatch('subscriptionDel', this.id)
            this.closeDialog()
        },
        showDialog() {
            this.isShowDialog = true
        },
        closeDialog() {
            this.isShowDialog = false
        },
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
