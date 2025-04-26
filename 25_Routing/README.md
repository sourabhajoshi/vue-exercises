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

#### **Step-by-Step Example**

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

### **Dynamic Route Matching in Vue Router (Vue 3)**

Dynamic route matching allows you to define routes that include dynamic segments using ``:``.

``
{ path: '/product/:id', component: ProductDetails }

// :id is a placeholder for dynamic data (like 123, abc, etc.)
``

Use dynamic routing when you:
- Need to load pages based on IDs (like users, products, blog posts).
- Have many similar pages but only the data changes. (Ex: /user/1, /user/2, /product/shoe123)

Example : Product Catalog. /products : list of products and /product/:id : single product details

Router Setup : router/index.js
```
import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetails from '../views/ProductDetails.vue'

const routes = [
  { path: '/products', name: 'ProductList', component: ProductList },
  // Dynamic route - :id can be any product ID
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```
Mock Product Data : composables/useProducts.js
```
export const products = [
  { id: '1', name: 'Smartphone', price: 699 },
  { id: '2', name: 'Laptop', price: 999 },
  { id: '3', name: 'Tablet', price: 499 }
]

export function getProductById(id) {
  return products.find(p => p.id === id)
}
```
Product List : views/ProductList.vue
```
<template>
  <div>
    <h1>All Products</h1>
    <ul>
      <!-- router-link to dynamic route -->
      <li v-for="product in products" :key="product.id">
        <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { products } from '../composables/useProducts'
</script>
```
Product Details : views/ProductDetails.vue
```
<script setup>
import { useRoute } from 'vue-router'
import { getProductById } from '../composables/useProducts'
import { ref, watch } from 'vue'

const route = useRoute()
const product = ref(getProductById(route.params.id))

// Watch for changes in dynamic :id (when navigating between products)
watch(() => route.params.id, (newId) => {
  product.value = getProductById(newId)
})
</script>

<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <p>Price: ${{ product.price }}</p>
  </div>
  <div v-else>
    <h2>Product not found</h2>
  </div>
</template>
```

#### **Multiple Dynamic Segments**
Vue Router allows you to define more than one dynamic segment in a route path. Each :segmentName becomes a key inside $route.params.
```
Route Pattern                  | Matched Path        | $route.params
/user/:username                | /user/evan          | { username: 'evan' }
/user/:username/post/:post_id  | /user/evan/post/123 | { username: 'evan', post_id: '123' }
```

### **Nested Routes**
Nested routes allow you to render a child component inside a parent route’s component, based on a nested path.

Think of them as "routes inside routes".
```
{
  path: '/dashboard',
  component: DashboardLayout,
  children: [
    { path: 'overview', component: Overview },
    { path: 'settings', component: Settings }
  ]
}
```
- /dashboard/overview renders DashboardLayout + Overview
- /dashboard/settings renders DashboardLayout + Settings

Example : Admin Dashboard
- /admin → parent layout
- /admin/users → child page
- /admin/settings → child page

Router Setup : router/index.js
```
import { createRouter, createWebHistory } from 'vue-router'

import AdminLayout from '../views/admin/AdminLayout.vue'
import UsersPage from '../views/admin/UsersPage.vue'
import SettingsPage from '../views/admin/SettingsPage.vue'

const routes = [
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'users', // becomes /admin/users
        component: UsersPage
      },
      {
        path: 'settings', // becomes /admin/settings
        component: SettingsPage
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
```
Admin Layout : views/admin/AdminLayout.vue
```
<template>
  <div>
    <h1>Admin Dashboard</h1>

    <!-- Links to child routes -->
    <nav>
      <router-link to="/admin/users">Users</router-link> |
      <router-link to="/admin/settings">Settings</router-link>
    </nav>

    <hr />

    <!-- Where child components will be rendered -->
    <router-view />
  </div>
</template>
```
Users Page : views/admin/UsersPage.vue
```
<template>
  <div>
    <h2>Manage Users</h2>
    <ul>
      <li>User A</li>
      <li>User B</li>
    </ul>
  </div>
</template>
```
Settings Page : views/admin/SettingsPage.vue
```
<template>
  <div>
    <h2>Settings</h2>
    <p>Change password, language, etc.</p>
  </div>
</template>
```

Example : Blog Website

Imagine a blog app with:
- / → Home page (latest posts)
- /posts → Posts listing
- /posts/:slug → View a single post dynamically
- /about → About the blog
- 404 handling
- Nested routes inside /posts
- Passing props to post detail component

router/index.js
```
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import PostsLayout from '../views/posts/PostsLayout.vue'
import PostsList from '../views/posts/PostsList.vue'
import PostDetail from '../views/posts/PostDetail.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/posts',
    component: PostsLayout,
    children: [
      { path: '', name: 'PostsList', component: PostsList },
      { path: ':slug', name: 'PostDetail', component: PostDetail, props: true }
    ]
  },
  { path: '/about', name: 'About', component: About },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```
Add Router to main.js
```
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

Pages Creation
```
//Home.vue
<template>
  <div>
    <h1>Welcome to the Blog!</h1>
    <router-link to="/posts">See All Posts</router-link>
  </div>
</template>


//PostsLayout.vue
<template>
  <div>
    <h1>Posts Section</h1>
    <router-view /> <!-- Child routes like PostsList or PostDetail render here -->
  </div>
</template>


//PostsList.vue
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const posts = [
  { title: 'Learn Vue 3', slug: 'learn-vue-3' },
  { title: 'Master Routing', slug: 'master-routing' }
]

const goToPost = (slug) => {
  router.push({ name: 'PostDetail', params: { slug } })
}
</script>

<template>
  <div>
    <h2>All Blog Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.slug" @click="goToPost(post.slug)">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

//PostDetail.vue
<script setup>
const props = defineProps(['slug'])
</script>

<template>
  <div>
    <h2>Reading Post: {{ slug }}</h2>
    <router-link to="/posts">← Back to all posts</router-link>
  </div>
</template>


//About.vue
<template>
  <div>
    <h1>About This Blog</h1>
    <p>This blog shares Vue tips and tutorials.</p>
  </div>
</template>


//NotFound.vue
<template>
  <div>
    <h1>404 - Page Not Found</h1>
    <router-link to="/">Back Home</router-link>
  </div>
</template>
```
