<!--<template>-->
<!--  <div class="q-pa-md">-->
<!--    &lt;!&ndash; Welcome Section &ndash;&gt;-->
<!--    <div class="text-center q-mb-xl">-->
<!--      <h1 class="text-h3 text-primary">Vue Tutorial</h1>-->
<!--      <p class="text-body1 q-mt-sm">-->
<!--        Built with Vue 3 and Quasar framework.-->
<!--        Choose a topic to learn with examples and explanations.-->
<!--      </p>-->
<!--    </div>-->

<!--    &lt;!&ndash; Interactive Cards &ndash;&gt;-->
<!--    <div class="row q-col-gutter-lg justify-center">-->
<!--      <q-card-->
<!--        v-for="topic in topics"-->
<!--        :key="topic.title"-->
<!--        class="my-card col-12 col-sm-5 col-md-3 cursor-pointer hover-card"-->
<!--        flat-->
<!--        bordered-->
<!--        @click="$router.push(topic.link)"-->
<!--      >-->
<!--        <q-card-section class="text-center">-->
<!--          <q-icon :name="topic.icon" size="40px" color="primary"/>-->
<!--          <div class="text-h6 q-mt-sm">{{ topic.title }}</div>-->
<!--          <div class="text-body2 text-grey-7">{{ topic.desc }}</div>-->
<!--        </q-card-section>-->
<!--      </q-card>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--const topics = [-->
<!--  {-->
<!--    title: "Getting Started",-->
<!--    desc: "Basics of Vue and project setup",-->
<!--    icon: "school",-->
<!--    link: "/introduction"-->
<!--  },-->
<!--  {-->
<!--    title: "Essentials",-->
<!--    desc: "Learn components, props, events & reactivity",-->
<!--    icon: "layers",-->
<!--    link: "/essentials"-->
<!--  },-->
<!--  {-->
<!--    title: "Router",-->
<!--    desc: "Navigation and dynamic routing in Vue",-->
<!--    icon: "alt_route",-->
<!--    link: "/router"-->
<!--  },-->
<!--  {-->
<!--    title: "Pinia Store",-->
<!--    desc: "State management with Pinia",-->
<!--    icon: "store",-->
<!--    link: "/pinia"-->
<!--  }-->
<!--]-->
<!--</script>-->

<!--<style scoped lang="sass">-->
<!--.my-card-->
<!--  transition: transform 0.3s, box-shadow 0.3s-->

<!--.hover-card:hover-->
<!--  transform: translateY(-5px)-->
<!--  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2)-->
<!--</style>-->


<template>
  <div class="q-pa-md">
    <!-- Welcome Section -->
    <div class="q-mb-xl">
        <h1 class="text-h4 text-primary">Vue Tutorial</h1>
        <p class="q-mt-sm">
            Built with Vue 3 and Quasar framework.
            Choose a topic to learn with examples and explanations.
        </p>
    </div>
  </div>
</template>

<script setup>
// const topics = [
//   {
//     title: "Getting Started",
//     desc: "Basics of Vue and project setup",
//     icon: "school",
//     link: "/introduction"
//   },
//   {
//     title: "Essentials",
//     desc: "Learn components, props, events & reactivity",
//     icon: "layers",
//     link: "/essentials"
//   },
//   {
//     title: "Router",
//     desc: "Navigation and dynamic routing in Vue",
//     icon: "alt_route",
//     link: "/router"
//   },
//   {
//     title: "Pinia Store",
//     desc: "State management with Pinia",
//     icon: "store",
//     link: "/pinia"
//   }
// ]
</script>

<style scoped lang="sass">
.my-card
  transition: transform 0.3s, box-shadow 0.3s

.hover-card:hover
  transform: translateY(-5px)
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2)
</style>
