# Lord of the Rings API Project

This is a **React-based API consumer** designed to explore and display information from [The One API](https://the-one-api.dev/), which provides detailed data about the Lord of the Rings universe.

The project demonstrates how to fetch and display data from an external API, manage state in React, and create an interactive user interface with search and responsive design.

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

```bash
git clone https://github.com/gvserpa/lotr-api-react.git
cd lotr-api-react
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Create a .env file in the root directory:

env
Copy code
REACT_APP_API_URL=https://the-one-api.dev/v2
REACT_APP_API_KEY=your_api_key_here
Start the development server:

bash
Copy code
npm start
# or, if using Vite
npm run dev
Open http://localhost:3000 (CRA) or http://localhost:5173 (Vite) in your browser to view the project.

Deployment
This project can be deployed on Vercel:

Log in to Vercel and click New Project → Import Git Repository.

Select the repository lotr-api-react.

Configure build settings (React is auto-detected).

Add Environment Variables:

ini
Copy code
REACT_APP_API_URL=https://the-one-api.dev/v2
REACT_APP_API_KEY=your_api_key_here
Click Deploy and wait for the live URL.

GitHub Repository
For full access to the source code, documentation, and setup instructions, visit the repository:
https://github.com/gvserpa/lotr-api-react/
