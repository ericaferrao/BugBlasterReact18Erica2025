# Bug Blaster — 2025

Bug Blaster is a lightweight React web application for creating, viewing, and managing bug tickets locally in the browser. It uses client-side state management to let users submit bug reports with priorities, edit existing reports, and maintain a clear tickets list — all through a simple, responsive UI.

## Key Features
- Create bug tickets: Submit a new bug with title, description, and priority (Low / Medium / High).
- Edit tickets inline: Select a ticket to pre-fill the form, update fields, and save changes.
- Delete tickets: Remove tickets from the list with a single click.
- Tickets list view: Browse all reported bugs with priority affordances and quick actions.
- Priority visualization: Tickets are styled to reflect priority levels for faster triage.
- Local client-side state: Uses React’s `useReducer` to manage tickets and editing state (no backend required).
- Responsive UI: Mobile-friendly layout for quick reporting on any device.

## Tech Stack
- React
- JavaScript (ES6+)
- React Hooks (`useReducer`, `useEffect`)
- HTML5, CSS3

## Getting Started (Local Development)
Run these commands in PowerShell or your preferred shell:

```powershell
npm install
npm start
```

Open `http://localhost:3000` in your browser to view the app.

## Implementation Notes
- Ticket ids are generated client-side using an ISO timestamp: `new Date().toISOString()`.
- The reducer supports `ADD_TICKET`, `UPDATE_TICKET`, `DELETE_TICKET`, `SET_EDITING_TICKET`, and `CLEAR_EDITING_TICKET` action types.
- The app is single-page and does not use a persistent backend; data is reset on page refresh unless you add storage (localStorage or a backend API).

## Project Structure (selected files)
- `src/components/TicketForm.js` — form for adding/updating tickets.
- `src/components/TicketList.js` — lists tickets and renders `TicketItem`.
- `src/components/TicketItem.js` — ticket display with Delete/Update actions.
- `src/reducers/ticketReducer.js` — reducer managing tickets and editing state.

## Contributing
Feel free to open issues or pull requests. Good first improvements:
- Persist tickets to `localStorage`.
- Add unit tests for the reducer.
- Improve accessibility and keyboard navigation.

## License
Add a license file if you wish to make this project open source.

---

Repository: add your GitHub repo URL here

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
