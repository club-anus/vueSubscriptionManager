<template>
    <div>
        <h3>
            {{total}}円
        </h3>
        <button @click="goToCreateView()">追加</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters({
            total: 'totalAmount'
        })
    },
    methods: {
        goToCreateView() {
            const view = { name: 'edit' }
            this.$router.push(view)
        }
    }
}
</script>
