# List Rendering

List rendering in Vue refers to dynamically rendering a list of elements or components using data from an array or object. Vue uses the v-for directive to efficiently render and update lists.

Vue Directives Used
- v-for :-	Render and update lists

Syntax
```
<ul>
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</ul>
```

Example : Loop Over Array Values
```
<script setup>
// Import ref to define reactive variables
import { ref } from 'vue'

// A simple array of city names
const cities = ref(['Delhi', 'Bangalore', 'Mumbai'])
</script>

<template>
  <h2>Cities</h2>
  <!-- Loop through each city and display it -->
  <ul>
    <li v-for="city in cities" :key="city">
      {{ city }}
    </li>
  </ul>
</template>
```

Example : Access Index While Looping
```
<script setup>
// An array of colors
const colors = ref(['Red', 'Green', 'Blue'])
</script>

<template>
  <h2>Colors with Index</h2>
  <!-- Loop through colors and also get index -->
  <ul>
    <li v-for="(color, index) in colors" :key="index">
      Index: {{ index }} → Color: {{ color }}
    </li>
  </ul>
</template>
```

Example : Loop Over an Object (Key-Value Pairs)
```
<script setup>
import { reactive } from 'vue'

// A reactive object representing a student
const student = reactive({
  name: 'Joshi',
  age: 25,
  grade: 'A'
})
</script>

<template>
  <h2>Student Info</h2>
  <!-- Loop through the object using key-value pair -->
  <ul>
    <li v-for="(value, key) in student" :key="key">
      {{ key }}: {{ value }}
    </li>
  </ul>
</template>
```

Example : Nested Loops (Loop Inside Loop)
```
<script setup>
import { ref } from 'vue'

// A list of categories with nested items
const categories = ref([
  {
    name: 'Fruits',
    items: ['Apple', 'Banana', 'Cherry']
  },
  {
    name: 'Vegetables',
    items: ['Carrot', 'Broccoli']
  }
])
</script>

<template>
  <h2>Categories</h2>

  <!-- Outer loop: looping through categories -->
  <div v-for="(category, index) in categories" :key="index">
    <h3>{{ category.name }}</h3>

    <!-- Inner loop: looping through items inside each category -->
    <ul>
      <li v-for="item in category.items" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
```
