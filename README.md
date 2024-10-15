## Debugging Process

During the development of this project, I utilized **React Developer Tools** to inspect, debug, and resolve issues in the app.

### Step-by-Step Debugging Process:

1. **Installed React Developer Tools:**

   - I installed the **React Developer Tools** extension for Chrome, which allowed me to inspect the React component tree directly in my browser.

2. **Opened the App in the Browser:**

   - Once the app was running (`npm start`), I opened it in the browser and accessed the **React Developer Tools** by navigating to the DevTools in Chrome.

3. **Inspected Component Hierarchy:**

   - Using the **Components** tab in React Developer Tools, I navigated through the app's component tree, which included `App.js`, `Filter.js`, `MovieList.js`, and `Movie.js`.
   - I checked the props and state for each component to ensure the values were being passed correctly.

4. **Debugged State Issues:**

   - **Filter Component:** I observed that the input fields were not properly updating the state (`inputValues`). By inspecting the `Filter` component in the developer tools, I identified that the `onChange` handlers were not triggering updates as expected. I resolved this by ensuring that `setInputValues` was called correctly within the `onChange` events.
   - **App Component:** I inspected the `filteredMovies` state in the `App.js` component to ensure the filtering logic worked properly when both the title and rating fields were updated in `Filter.js`. React Developer Tools helped confirm that the state updates were functioning as expected.

5. **Checked Props Passing:**

   - I inspected the props passed from `App.js` to `Filter.js` and `MovieList.js` to ensure the correct data was flowing between components. I used the React Developer Tools to verify that the `filteredMovies` prop was passed and rendered correctly in the `MovieList` component.

6. **Monitored State Changes in Real Time:**

   - As I interacted with the filter form, I used React Developer Tools to monitor changes in state and props in real-time. This allowed me to confirm that state updates triggered re-renders of the components, and the UI reflected the changes instantly.

7. **Resolved Issues:**

   - After identifying issues with state management in the `Filter.js` component, I corrected the `onChange` handlers and ensured that `setInputValues` was properly updating the component state. The state of the filter form (title and rating) was then reflected correctly in the `App.js` component and used for filtering movies.

8. **Final Check:**
   - After debugging and fixing the state update issues, I re-ran the application to verify that it worked as expected. The filter now successfully filters the movie list based on both title and rating.

### Conclusion:

By using **React Developer Tools**, I was able to efficiently inspect component state, props, and hierarchy. This allowed me to identify and resolve issues with state management and props passing, ensuring the app behaved as expected. Debugging with these tools made the process faster and more intuitive.

```

```
