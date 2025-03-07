# Redux 

Redux is a state management library

## Core Concepts of Redux:

1. **Redux Store** : It stores the entire state of our application.
2. **Action** : An action is an object that represents an event or intent to modify the application state in Redux."
3. **Reducer**: A reducer is a function that takes the current state and an action as arguments, determines how the state should change based on the action type, and returns a new state without modifying the existing one.

    - Redux is a state manager for your app, like a notebook where you keep track of things.

    - It is just a function that takes two things:
        1) **state** (What’s written in the notebook right now).
        2) **Action** (An instruction that says what should change).
    - It reads the action and returns a new state without changing the old one.

## Principles of Redux

1. **Single Source of Truth**  
   The entire state of the application is stored in a single JavaScript object inside the Redux store.

2. **State is Read-only**  
   The state can only be changed by dispatching actions, ensuring predictability and preventing direct mutations.

3. **Changes are made with Pure Functions**  
   Reducers are pure functions that take the current state and an action, returning a new state without modifying the existing one.
