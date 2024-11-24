<template>
  <input
    type="text"
    v-bind:value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    v-on:input="handleInput"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    handleInput($event) {
      this.$emit('update:modelValue', $event.target.value)
    },
  },
}
</script>
