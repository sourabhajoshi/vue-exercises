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

#### **Directive Hook**
When you create a custom directive, Vue gives you lifecycle hooks that let you control how the directive behaves at different times (like when it’s added to the DOM, updated, or removed).


| Hook Name        | When It Runs                            | Think of It Like...                   |
|------------------|-----------------------------------------|---------------------------------------|
| `created`        | Just before anything happens            | “Getting ready…”                   |
| `beforeMount`    | Right before it’s added to the DOM      | “Almost there…”                    |
| `mounted`        | After it’s in the DOM                   | “I’m alive!”                        |
| `beforeUpdate`   | Before something changes                | “Hold on, something’s changing…”   |
| `updated`        | After something changed                 | “Change complete!”                 |
| `beforeUnmount`  | Before the element is removed           | “I’m about to go…”                 |
| `unmounted`      | After the element is removed            | “I’m gone.”                        |

---

```
(el, binding, vnode, prevVnode)
```
Hook Arguments

| Name        | Meaning                                                        |
|-------------|----------------------------------------------------------------|
| `el`        | The actual DOM element the directive is bound to (`<div>`, `<input>`, etc.) |
| `binding`   | An object that provides details about how the directive was used |
| `vnode`     | The virtual DOM node representing the element (Vue's internal rendering system) |
| `prevVnode` | The previous virtual DOM node (only available in `beforeUpdate` and `updated`) |

---

```
<template>
  <div>
    <h2>Vue 3 Custom Directive Hook Demo</h2>
    <p v-log:hello.world="message">
      Message: {{ message }}
    </p>
    <button @click="updateMessage">Update Message</button>
    <button @click="toggleElement">Toggle Element</button>

    <p v-if="show" v-log:bye.again="message">
      This element will be removed when toggled.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive state
const message = ref("Hello Vue!")
const show = ref(true)

// Update reactive value
const updateMessage = () => {
  message.value += "!"
}

// Toggle visibility to test unmount hooks
const toggleElement = () => {
  show.value = !show.value
}

// Directive definition
const logDirective = {
  created(el, binding, vnode) {
    console.log("created", { el, binding, vnode })
  },
  beforeMount(el, binding) {
    console.log("beforeMount", { el, binding })
  },
  mounted(el, binding) {
    console.log("mounted", { el, binding })
  },
  beforeUpdate(el, binding, vnode, prevVnode) {
    console.log("beforeUpdate", { el, binding, vnode, prevVnode })
  },
  updated(el, binding, vnode, prevVnode) {
    console.log("updated", { el, binding, vnode, prevVnode })
  },
  beforeUnmount(el, binding) {
    console.log("beforeUnmount", { el, binding })
  },
  unmounted(el, binding) {
    console.log("unmounted", { el, binding })
  }
}
</script>

<script>
export default {
  directives: {
    log: logDirective
  }
}
</script>

<style scoped>
button {
  margin-right: 8px;
  margin-top: 12px;
}
</style>
```
