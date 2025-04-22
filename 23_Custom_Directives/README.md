# Custom Directives

Custom Directives in Vue are a way to encapsulate low-level DOM behavior that can be reused across components. Vue has some built-in directives (like v-model, v-if, v-for, etc.), but you can define custom directives when you need to directly manipulate the DOM outside of what Vue provides.

In Vue, we use special attributes like:
```
<input v-model="name" />
```
That v-model is a directive, it adds special behavior to a DOM element.

A custom directive is when you create your own directive. For example, maybe you want an input to auto-focus when the page loads.

When to Use Custom Directives

Use them when:
- You want to touch the DOM directly (focus, scroll, resize, etc.)
- You need this behavior in many components
- Vue doesn’t already give you a built-in directive

Example: Auto Focus Input : input box that automatically gets focus when the page opens.

```
<template>
  <input v-autofocus />
</template>

<script setup>
// Define the directive
const autofocus = {
  mounted(el) {
    el.focus() // When the element is mounted, focus it
  }
}
</script>

<script>
// Register the directive
export default {
  directives: {
    autofocus
  }
}
</script>
```
v-autofocus is your custom directive. It focuses the <input> when it is added to the page. el refers to the DOM element (<input> in this case). You define it in <script setup>, and register it in export default.
