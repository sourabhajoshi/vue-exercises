<script setup>
import {ref} from "vue";

const name = ref('Joshi Sourabha')
const age = ref(25)
</script>

<template>
  <p>Text Interpolation : </p>
  <p>name : {{ name }}</p>
  <p>Age : {{ age }}</p>
  <p>Expression : {{ 2 + 5 * 8 }}</p>
  <p>Next year your age : {{age+1}}</p>
</template>
