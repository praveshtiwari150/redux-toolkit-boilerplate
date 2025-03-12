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

## Responsibilites of Store:

1) It is responsible for holding application state.

2) It exposes a method called **`getState()`** :
   It gives acess to current state.

3) Register Listeners via subscribe(listener).

4) It allows to update the state via dispatch(action).

5) Handles unregistering of listeners via the function returned by subscribe(listener).

## Redux Toolkit DNA(General Principle):

<div style="background-color: #2f2f2f; color: #ff7b7b; padding: 12px 16px; border-left: 4px solid #ff4d4d; border-radius: 6px; font-family: sans-serif; ">
  🔥 Slice-based modular state + central store + hooks for access.
</div>

<br/>

<div style="background-color: #2f2f2d; padding:12px 16px; border-radius:12px;">

   # ⚛️ Redux Toolkit – Memorable Flow (Step-by-Step)



## 1. Define a Slice
➤ `createSlice()` = state + reducers + actions (all in one)  
💡 *Think of it as grouping similar logic together*



## 2. Configure the Store
➤ `configureStore()` = create and combine slices  
🧬 *Like combining species into a genus*



## 3. Provide the Store
➤ `<Provider store={store}>` in your main `index.js` or `App.jsx`  
🌐 *Makes the state accessible everywhere*



## 4. Use in Components
➤ `useSelector()` to read state  
➤ `useDispatch()` + `slice.actions` to update state  
🧠 *Like accessing and modifying an organism's traits*

</div>

# Flow
1. createSlice
2. export reducer + actions
3. configureStore({ reducer })
4. wrap with <Provider store={store}>
5. useSelector(state => state.slice.value)
6. useDispatch() to call actions
7. (Optional) use createAsyncThunk for API

