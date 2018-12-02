<template>
  <div>
    <list />
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/SubscriptionList.vue'

export default {
  components: {
    'list': List
  }
}
</script>
