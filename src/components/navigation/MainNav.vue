<template>
  <header v-bind:class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-wrap border-b border-solid border-brand-gray-1 px-8">
        <router-link :to="{ name: 'home' }" class="flex h-full items-center text-xl">
          Seribu Tukang
        </router-link>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-9 h-full first:ml-0" v-for="menuItem in menuItems" :key="menuItem.text">
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">
                {{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button btnText="Sign in" v-else v-on:click="loginUser" />
        </div>
      </div>

      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue'
import ProfileImage from '@/components/navigation/ProfileImage.vue'
import SubNav from '@/components/navigation/SubNav.vue'
export default {
  name: 'MainNav',
  components: { ActionButton, ProfileImage, SubNav },
  data() {
    return {
      menuItems: [
        { text: 'Teams', url: '/' },
        { text: 'Locations', url: '/' },
        { text: 'Life at Seribu Tukang', url: '/' },
        { text: 'How we hire', url: '/' },
        { text: 'Students', url: '/' },
        { text: 'Jobs', url: '/jobs/results' },
      ],
      isLoggedIn: false,
    }
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn,
      }
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    },
  },
}
</script>
