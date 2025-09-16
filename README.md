# Lord of the Rings API Project

This is a **React-based API consumer** designed to explore and display information from [The One API](https://the-one-api.dev/), which provides detailed data about the Lord of the Rings universe.

The project demonstrates how to fetch and display data from an external API, manage state in React, and create an interactive user interface with search and responsive design.

---

## Live Demo

Check out the live version of this project on Vercel: [lotr-api.vercel.app](https://lotr-api.vercel.app)

This is a React-based API consumer designed to explore and display information from The One API, which provides detailed data about the Lord of the Rings universe.

---

## Features

- Fetches **movies** and **characters** using the `/movie` and `/character` endpoints.
- Displays **movie details**:
  - Duration
  - Awards and nominations
  - Budget
  - Revenue
- Displays **character details**:
  - Name
  - Race
  - Gender
  - Wiki URL (when available)
- **Dynamic search** to filter movies in real-time.
- Interactive **dropdown search results**.
- Responsive layout for desktop, tablet, and mobile devices.
- Component-based architecture with React.
- State management using `useState` and API calls with `useEffect`.
- Props are used to pass data between components efficiently.

---

## Notes

- Menu buttons **Notification**, **Night Mode**, and **Profile** are still under construction.
- Side buttons **All Category** and **Years** next to the search bar are also under construction.

---

## Tech Stack

- React
- Axios
- CSS Modules
- Vite / CRA (depending on your setup)

---

## Setup

1. Clone the repository:

```
git clone https://github.com/gvserpa/lotr-api-react.git
cd lotr-api-react
```

2. Install dependencies:

```
npm install
# or
yarn install
```

3. Create a .env file in the root directory:

```
REACT_APP_API_URL=https://the-one-api.dev/v2
REACT_APP_API_KEY=your_api_key_here
```

4. Start the development server:

```
npm start      # if using CRA
npm run dev    # if using Vite
```

5. Open the app in your browser:

```
CRA: http://localhost:3000

Vite: http://localhost:5173
```

---





