# Conditional Rendering

Conditional rendering in Vue allows you to dynamically show or hide elements based on certain conditions in your app’s state or logic.

Vue Directives Used

- v-if :-	Renders the element only if the condition is true
- v-else-if	: Adds extra condition in an if-else chain
- v-else : Renders when all previous v-if/v-else-if are false
- v-show : Toggles visibility via CSS (display: none)

#### **1. v-if / v-else-if / v-else**

Example : Show different messages based on user role
```
<script setup>
import { ref } from 'vue'

const userRole = ref('admin') // try 'editor', 'guest', or 'banned'
</script>

<template>
  <h2>User Role Access</h2>

  <p v-if="userRole === 'admin'">Welcome Admin! You have full access.</p>
  <p v-else-if="userRole === 'editor'">Hello Editor! You can manage content.</p>
  <p v-else-if="userRole === 'guest'">Hi Guest! Please log in to continue.</p>
  <p v-else>You are not allowed to access this site.</p>
</template>
```

#### **2. v-show**

Example : Toggle form fields (client-side display only)
```
<script setup>
import { ref } from 'vue'

const showAdvanced = ref(false)
</script>

<template>
  <h2>Form Settings</h2>

  <label>
    <input type="checkbox" v-model="showAdvanced" />
    Show Advanced Settings
  </label>

  <div v-show="showAdvanced" class="advanced-box">
    <h3>Advanced Settings</h3>
    <label>
      Debug Mode: <input type="checkbox" />
    </label>
    <label>
      Enable Beta Features: <input type="checkbox" />
    </label>
  </div>
</template>

<style>
.advanced-box {
  margin-top: 10px;
  padding: 10px;
  border: 1px dashed gray;
}
</style>

```

#### **v-if vs. v-show in Vue.js**

| Feature               | `v-if`                                        | `v-show`                                   |
|-----------------------|-----------------------------------------------|---------------------------------------------|
| **Rendering Logic**   | Conditional rendering in the DOM              | Always rendered, toggled via `display: none` |
| **DOM Presence**      | Element **does not exist** when false         | Element **always exists** in DOM            |
| **Performance (initial)** | Slightly **slower** on first render       | Faster initial rendering                    |
| **Performance (toggle)**  | **Better** when condition rarely changes  | **Better** when condition changes frequently |
| **Use Case**          | Use when condition is rarely true or rarely changes | Use when toggling visibility often (e.g., tabs) |
| **CSS Effects**       | Does not work if element is not in DOM        | Works well with transitions/animations      |
| **Supports `v-else`** |  Yes                                         |  No                                        |
| **Example**           | `<p v-if="show">Hello</p>`                    | `<p v-show="show">Hello</p>`                |

Note:
- Use `v-if` for conditional creation of DOM elements.
- Use `v-show` for toggling visibility without destroying the element.


