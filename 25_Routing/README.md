# Vue Router

In a Vue 3 Single Page Application (SPA), routing means switching between different components (pages) based on the URL, without reloading the whole page. Vue Router is the official routing library for Vue.js. It enables building Single Page Applications (SPA) by mapping URLs to components without full page reloads.


It's the official routing library for Vue.js. It manages the mapping between URLs and components.

In a normal website, when you click a link, the browser loads a whole new page from the server. But in an SPA using Vue Router:
- You define routes that map URLs to Vue components
- When the URL changes, the router dynamically swaps components
- This gives the feeling of navigating a site, but it's all happening within one page.



#### **Install Vue Router**
If you are using Vue 3 with Vite, vue-router@4 is for Vue 3. Use @3 for Vue 2.
```
npm install vue-router@4
```

#### **Project Structure Example**
```
src/
├── main.js
├── App.vue
├── views/
│   ├── Home.vue
│   └── About.vue
└── router/
    └── index.js  
```

#### **Basic example to understand router**

1. main.js :  Setup Vue with Router
```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

2. router/index.js : Define Routes
```
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

3. App.vue – Setup Router View and Links
```
<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
```

4. views/Home.vue
```
<template>
  <h1>Home Page</h1>
</template>
```

5. views/About.vue
```
<template>
  <h1>About Page</h1>
</template>
```

output : 
- / → loads Home.vue
- /about → loads About.vue
No page reload! Smooth transitions between components.
