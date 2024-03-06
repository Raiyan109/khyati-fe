# Weather Application

## Description

This Weather Application allows users to check the current weather and forecast for a given location. The front-end is developed using React.js, and the back-end API is built with Node.js. This application integrates with a free weather API for fetching weather data.

## Front-end Requirements

- **React Component**: Developed a component for displaying weather information.
- **User Input Form**: Implemented a form allowing users to input a location (city or coordinates).
- **Weather Display**: Showed the current weather information (temperature, description, etc.) for the provided location.
- **5-Day Forecast**: Provided a 5-day weather forecast for the location.
- **Styling**: Enhanced the user interface with appropriate styling.
- **Design System**: Used Ant Design for the frontend.

## Back-end Requirements

- **Node.js Server**: Created a server with an API for fetching weather data.
- **Weather API Integration**: Integrate with OpenWeatherMap API.
- **Error Handling**: Implement error handling for API requests.

## Additional Considerations

- Utilized React hooks for state management.
- Adopted a functional component approach in React.
- Ensured the code is modular and well-organized.
- Implemented basic validation for user inputs.

## Bonus Features

- Temperature Unit Switch: Added a feature to switch between Celsius and Fahrenheit.
- Geolocation: Implemented geolocation to automatically fetch the weather for the user's current location.
- Favorite Locations: Allowed users to save their favorite locations and view their weather.
- Loading Indicator: Added a loading indicator while fetching weather data.

## Running the Application Locally

### Prerequisites

- Node.js installed on your machine.
- An API key from a weather data provider (e.g., OpenWeatherMap).

### Setup

1. Clone the repository:
```
git clone https://github.com/Raiyan109/khyati-fe.git
```
2. Install dependencies for the back-end:

3. Set up environment variables:
- Create a `.env` file in the back-end directory.
- Add your weather API key: `WEATHER_API_KEY=[Your_API_Key]`

4. Run the back-end server: 
```
npm run dev
```
