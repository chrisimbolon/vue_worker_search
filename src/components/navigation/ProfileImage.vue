<template>
  <img v-bind:src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="User profile Image" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return { imageLink: '/public/IMG_0894.jpeg' }
  },
}
</script>
