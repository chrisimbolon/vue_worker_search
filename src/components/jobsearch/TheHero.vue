<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>

        <div class="col-span-5 col-start-2">
          <head-line />
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img class="h-80 w-80 object-contain" src="../../../public/logo1.png " />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import HeadLine from '@/components/jobsearch/HeadLine.vue'
import JobSearchForm from '@/components/jobsearch/JobSearchForm.vue'
export default {
  name: 'TheHero',
  components: {
    HeadLine,
    JobSearchForm,
  },
}
</script>
