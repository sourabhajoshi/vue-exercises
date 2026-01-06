# Vue3 Project Folder Structure    

```
src/
├── assets/
│   ├── images/                # Static images
│   └── styles/                # Global styles (CSS/SCSS)
│       ├── main.css
│       └── variables.scss

├── components/
│   ├── common/                # Reusable UI components (buttons, modals, etc.)
│   │   ├── BaseButton.vue
│   │   └── BaseModal.vue
│   └── layout/                # Layout-specific components
│       ├── AppHeader.vue
│       └── AppSidebar.vue

├── views/                     # Route-level views
│   ├── HomeView.vue
│   ├── AboutView.vue
│   └── NotFoundView.vue

├── layouts/                   # Page layouts
│   └── DefaultLayout.vue

├── router/                    # Vue Router configuration
│   ├── index.js               # Router setup
│   └── routes.js              # Route definitions

├── store/                     # Pinia store modules
│   ├── index.js
│   └── userStore.js

├── composables/               # Reusable Composition API logic
│   ├── useAuth.js
│   └── useFetch.js

├── services/                  # API calls and service handlers
│   ├── api.js                 # Axios configuration
│   └── userService.js

├── models/                    # Data models or TypeScript interfaces
│   └── User.js

├── utils/                     # Helper/utility functions
│   └── formatDate.js

├── directives/                # Custom Vue directives
│   └── v-focus.js

├── plugins/                   # Vue plugins (e.g., Pinia, i18n)
│   └── pinia.js

├── App.vue                    # Root component
├── main.js                    # App entry point
└── env/                       # Environment configs (optional)
    ├── dev.js
    └── prod.js
```
