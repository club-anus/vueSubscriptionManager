<template>
    <div>
        <div>{{title}}</div>
        <div>{{amount}}円</div>
        <button @click="goToUpdate(id, title, amount)">編集</button>
        <button @click="del(id)">削除</button>
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
