# Async Components in Vue3

In large applications, we may need to divide the app into smaller chunks and only load a component from the server when it's needed. To make that possible, Vue has a defineAsyncComponent function

An async component is a component that Vue will load only when needed, not during the app's first load.

This is useful when, we want to split our app into smaller chunks (code-splitting). We have large components that slow down initial load. We only show some components based on user actions or routes.

Think of an app like Flipkart or Amazon. When you first open it, it doesn't load every single screen (like Cart, Orders, Wishlist).
It only loads what you're currently seeing. When you click on “My Orders” only then it loads that page.

That’s what an async component does: Load the component on demand, not immediately.

Example :

Let's say you have a component called BigComponent.vue.

Instead of importing it like this:
```
import BigComponent from './BigComponent.vue'
```
You do this:
```
import { defineAsyncComponent } from 'vue'
const BigComponent = defineAsyncComponent(() => import('./BigComponent.vue'))
```
This tells to Vue Don’t load this component now. Load it only when it’s actually used.

Example : Leazy loading app
```
<!-- BigComponent.vue -->
<template>
  <h2>I was loaded lazily!</h2>
</template>

<!-- App.vue -->
<script setup>
import { defineAsyncComponent, ref } from 'vue'

// Lazy load the component
const BigComponent = defineAsyncComponent(() => import('./BigComponent.vue'))

const show = ref(false)
</script>

<template>
  <button @click="show = !show">Toggle Lazy Component</button>
  
  <div v-if="show">
    <BigComponent />
  </div>
</template>
```
When the app starts, BigComponent.vue is not loaded. When we click the button it shows <BigComponent />, and then Vue loads it. This saves time and makes your app load faster at the beginning.

