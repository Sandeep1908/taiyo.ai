name: Contact Management App with Maps and Charts

description: >
  A Contact Management application that integrates maps and charts to provide a visual representation of contact data and COVID-19 statistics. The app allows users to manage contacts, view their locations on a map, and analyze COVID-19 case fluctuations with charts.

features:
  - Contact Management: Add, update, and delete contacts.
  - Map Integration: Visualize contacts and COVID-19 data on an interactive map.
  - Charts: Display COVID-19 case fluctuations over time with a line graph.
  - Real-time Data: Fetch and display real-time COVID-19 data from external APIs.

technologies:
  - React: Front-end library for building user interfaces.
  - Redux Toolkit: State management for handling contacts.
  - React Router: For routing between different pages.
  - TanStack Query: For fetching data from APIs.
  - React Leaflet: For displaying maps.
  - Chart.js: For rendering charts.

apis:
  covid_data:
    endpoint: https://disease.sh/v3/covid-19/countries
    description: Provides COVID-19 statistics for all countries. Includes data on active cases, recovered cases, deaths, and country-specific information such as latitude, longitude, and flags.

  total_covid_statistics:
    endpoint: https://disease.sh/v3/covid-19/all
    description: Provides global COVID-19 statistics, including total cases, deaths, recovered, active cases, and critical cases.

installation:
  - Clone the Repository:
    ```bash
    git clone https://github.com/your-repo/contact-management-app.git
    cd contact-management-app
    ```

  - Install Dependencies:
    ```bash
    npm install
    ```

running:
  - Start the Development Server:
    ```bash
    npm start
    ```
    This will start the React development server and open the application in your default browser.

  - Access the App:
    Navigate to `http://localhost:3000` in your browser to view the app.

code_structure:
  - src/: Contains all source files.
    - api/: Contains API functions for fetching data.
    - components/: Contains reusable React components.
    - redux/: Contains Redux slices and hooks for state management.
    - pages/: Contains page components.
    - App.tsx: Main application component with routing.
    - index.tsx: Entry point of the React application.

key_components:
  - MapComponent.tsx: Displays an interactive map with markers.
  - LineChart.tsx: Renders a line chart showing case fluctuations.
  - Modal.tsx: Modal component for adding or editing contacts.
  - UpdateModal.tsx: Modal component for updating contact details.

usage_examples:
  - Adding a Contact:
    - Click the "Add Contact" button to open the modal.
    - Fill in the contact details and click "Add Contact" to save.

  - Viewing COVID-19 Data:
    - The dashboard will display a map with markers for each country.
    - The line chart shows COVID-19 case fluctuations over time.
    - The total count component displays global COVID-19 statistics.

comments_documentation:
  - Code Comments: The code is commented to explain key logic and functionality.
  - Documentation: Inline comments provide additional information about components and API usage.

contributing:
  - Feel free to open issues or submit pull requests if you want to contribute to this project. Ensure your changes are well-tested and follow the existing code style.

license:
  - This project is licensed under the MIT License.
