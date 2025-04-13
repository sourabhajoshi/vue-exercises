# Composables in vue3 

Composables are reusable functions built using the Composition API. They let you encapsulate logic and state so you can share it across multiple components.

Think of Composables as the Vue 3 equivalent of React Hooks, but they can contain reactive state, lifecycle hooks, computed properties, etc.

Before Vue 3, logic sharing was often done with:
- Mixins: but they had naming collisions and poor readability.
- Higher-order components: overly complex for most use cases.

Composables solve this by:
- Keeping logic and state encapsulated in functions.
- Avoiding component bloat.
- Promoting separation of concerns and DRY code.
