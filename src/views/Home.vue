<template>
  <div>
    <Header />
    <list />
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/SubscriptionList.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    'list': List,
    Header
  }
}
</script>
