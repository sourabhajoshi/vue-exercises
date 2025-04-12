# Components in Vue

Components are reusable building blocks in Vue apps. They are like custom HTML elements you define and reuse across your app.


we need Watchers
- Reuse code
- Organize big projects
- Separate logic into meaningful chunks
- Easy to maintain and scale

That’s where watchers shine. Unlike computed, which is for deriving values, watchers are for doing something when values change.

#### **Structure of a Vue Component**

A Vue component usually has three main parts: template, script and style

<template> Block this is where you write the HTML (the user interface).

<script setup> Block
This is where you write your JavaScript logic: variables, functions, props, events, etc.

<style> Block
This is where you write CSS to style your component.

  ```
  <template>
    <h2>Hello World!</h2>
  </template>

  <script setup>
  // you can write logic here
  </script>
  
  <style scoped>
  /* styles go here */
  </style>
  ```

