# Calorie Tracker App (React Native)

![App Screenshot](screenshot.png)

A simple React Native app for tracking daily calorie consumption, with the ability to add and remove meals and see how many calories of the recommended daily total you have in a circular graph.

## Features

- Track daily calorie consumption, compare it to the recommended total, and visualize it on a circular chart.
- Add and remove meals for the day.
- Two screens: a main screen with the pie chart showing the percentage of recommended daily calories with the meals of the day and an "Add Meal" screen for adding generic meals with calories and portions.
- The "Add Food" screen presents a modal with inputs for calories, name, and portion.
- Implement food search and filtering functionality.
- Utilize the React Native Elements UI toolkit for components.
- Used the `canGoBack` and `goBack` parameters from the `useNavigation` hook for navigation control.
- Used Async Storage for asynchronous, persistent key-value storage in React Native, involving async/await, try-catch, and Promises for code handling.
- Created custom hooks to perform all the functions of the application.
- Managed date and time using the `date-fns` library.
- Utilize the `useFocusEffect` hook from `react-navigation` in combination with `useCallback` for performance optimization.
- Use the `react-native-circular-progress-indicator` package for the circular chart.

## Installation

1. Clone the repository: `git clone hhttps://github.com/pdelbarrio/appcalorias`
2. Navigate to the project directory: `cd appcalorias`
3. Install dependencies: `npm install`

## Usage

- Start the development server: `npm start`
- Launch the app on your preferred emulator or device.

Captura1: | Captura2: | Captura3:
--- | --- | ---
![Calorias1](https://res.cloudinary.com/getoutbcn/image/upload/v1697737826/portfolio/projects/caloriestracker/Calorias1_o7p0vg.png) | ![Calorias2](https://res.cloudinary.com/getoutbcn/image/upload/v1697737832/portfolio/projects/caloriestracker/Calorias2_rpt2u5.png) | ![Calorias3](https://res.cloudinary.com/getoutbcn/image/upload/v1697737838/portfolio/projects/caloriestracker/Calorias3_hgmhhz.png)

Captura4: | Captura5: | Captura6:
--- | --- | ---
![Calorias4](https://res.cloudinary.com/getoutbcn/image/upload/v1697737847/portfolio/projects/caloriestracker/Calorias4_c0w1rm.png) | ![Calorias5](https://res.cloudinary.com/getoutbcn/image/upload/v1697737848/portfolio/projects/caloriestracker/Calorias5_aeq3y5.png) | ![Calorias6](https://res.cloudinary.com/getoutbcn/image/upload/v1697737849/portfolio/projects/caloriestracker/Calorias6_mi5q9p.png)


