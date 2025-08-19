<script setup>
import myPic from "src/assets/owner.png"

const owner = {
  name: "Sourabha Joshi",
  role: "Developer & Creator of Vue Tutorial",
  bio: "Passionate about building web applications with Vue 3, Quasar, and modern JavaScript. I enjoy teaching others and simplifying complex concepts.",
  avatar: "https://i.pravatar.cc/150?img=12",
  links: [
    {icon: "code", url: "https://github.com/sourabhajoshi"},   // GitHub
    {icon: "work", url: "https://linkedin.com/in/yourprofile"}, // LinkedIn
    {icon: "language", url: "https://your-portfolio.com"}    // Website
  ]
};
</script>

<template>
  <div class="q-pa-md flex flex-center">
    <q-card class="owner-card q-pa-lg" flat bordered>
      <div class="flex column items-center">
        <q-avatar size="100px">
          <img :src="myPic" alt="Owner Avatar">
        </q-avatar>

        <h2 class="text-h5 q-mt-md">{{ owner.name }}</h2>
        <p class="text-subtitle2 text-grey-7">{{ owner.role }}</p>

        <p class="text-body2 text-center q-mt-sm">{{ owner.bio }}</p>

        <div class="row q-mt-md">
          <q-btn
            v-for="link in owner.links"
            :key="link.url"
            flat
            round
            size="md"
            :icon="link.icon"
            color="primary"
            @click="window.open(link.url, '_blank')"
          />
        </div>
      </div>
    </q-card>
  </div>
</template>

<style scoped lang="sass">
.owner-card
  max-width: 400px
  border-radius: 16px
</style>
