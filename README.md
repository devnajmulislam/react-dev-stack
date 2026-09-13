# DevStack

DevStack is a React project where users can explore different technologies and build their own development stack. Users can add, remove, and clear technologies from their stack.

## Technologies that I used

* React
* TypeScript
* Tailwind CSS & DaisyUI
* React Icons
* React Toastify
* Vite
* JSON



## Features

* Explore different development technologies.
* Add technologies to your own stack.
* Remove one technology or clear the whole stack.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and update data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component. I used it in `ExpTechnologies` to store the selected technologies.

```tsx
const [stack, setStack] = useState([]);
```

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to handle side effects such as fetching data. However, I did not use `useEffect` in this project. I used React's `use()` and `Suspense` to load the JSON data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It helps React update the list correctly when items change.

In my project, I used the technology `id` as the key:

```tsx
key={stkSingleTech.id}
```

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it to show an empty message when no technology is selected:

```tsx
{stack.length <= 0 ? (
  <div>Your stack is empty.</div>
) : (
  ""
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child through props.

In my project, `ExpTechnologies` passes `technologies`, `stack`, and `handleChooseStack` to `ExpTechCard`.

The child can send data back by calling a function received through props.

For example, I used

```tsx
handleChooseStack(technology);
```