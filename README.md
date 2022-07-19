# React-Redux Essential Concepts

These are Redux’s main pillars:

## Store

A store is an object that holds the application's state tree. There should only be a single store in a Redux app, as the composition happens at the reducer level.

### dispatch()

dispatch() dispatches an action. It is the only way to update the application state.

## Action

An action is a plain object that represents an intention to change the state. They must have a property to indicate the type of action to be carried out.

Actions are payloads of information that send data from your application to your store.

Any data, whether from UI events or network callbacks, needs to eventually be dispatched as actions.

Actions must have a type field, indicating the type of action being performed.

## Reducers

Reducers are pure functions that specify how the application's state changes in response to actions sent to the store.

Actions only describe what happened, not how the application's state changes.

A reducer is a function that accepts the current state and action, and returns a new state with the action performed.

combineReducers() utility can be used to combine all the reducers in the app into a single index reducer which makes maintainability much easier.

# React-Redux New Project Guide

Install React Redux package:

`npm install --save redux react-redux`

When working with Redux, you will need three main things:

Make a folder in src folder and name it 'redux'

`mkdir src\redux`

Now make two folder in redux folder and name it 'actions' and reducers.

`mkdir src\redux\actions`

`mkdir src\redux\reducers`


## Show Your Support

- [Recommend Me On LinkedIn](https://www.linkedin.com/in/imalisheraz/) - I will realy Appriciate this
- Don't forget to star ⭐ the repo 😉, it's FREE.
