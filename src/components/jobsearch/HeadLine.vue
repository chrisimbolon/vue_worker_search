<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span v-bind:class="actionclasses">{{ action }}</span
      ><br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next worker at Seribu Tukang</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList'

export default {
  name: 'HeadLine',
  data() {
    return {
      action: 'Build',
      interval: null,
    }
  },
  computed: {
    actionclasses() {
      return {
        [this.action.toLowerCase()]: true,
      }
    },
  },

  created() {
    this.changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ['Build', 'Design', 'Create', 'Code']

        this.action = nextElementInList(actions, this.action)
      }, 3000)
    },
  },
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
