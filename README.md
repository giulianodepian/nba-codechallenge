# NBA Code Challenge

- [NBA Code Challenge](#nba-code-challenge)
  - [Installing the App (Only once)](#installing-the-app-only-once)
  - [Running the App](#running-the-app)
  - [Testing](#testing)
  - [Linting](#linting)
  - [Objetives](#objetives)
  - [Examples](#examples)

## Installing the App (Only once)
1. `npm i`
2. `npm start`
3. `emulator -avd <emulator-name>`
4. `npx react-native run-android` / `npx react-native run-ios`

## Running the App
1. `npm start`
2. `emulator -avd <emulator-name>`

## Testing
- `npm run test:watch`

## Linting
- `npm run lint:fix`

## Objetives
- [x] Read Sportsdata.io NBA [API docs](https://sportsdata.io/developers/api-documentation/nba).
- [x] Create Sportsdata.io NBA [API key](https://sportsdata.io/cart/free-trial).
- [x] Create a new Screen with a `<FlatList/>` component listing the active teams from the current season.
    - [ ] Tapping on a team should open the team detail screen.
- [ ] Create a new Screen with a `<FlatList/>` component listing players from certain team.
    - [ ] Tapping on a player should open the player detail screen.
- [ ] Create a new Screen with a detail view of a player.
- [ ] Manage the state using [Zustand](https://github.com/pmndrs/zustand)
- [ ] Add tests using [React Native Testing Library](https://callstack.github.io/react-native-testing-library/docs/getting-started/)

## Examples
<img src="https://cdn.dribbble.com/users/2539530/screenshots/8088320/media/cb83c6d48b6eae3d1c22190e662a77ee.jpg?compress=1&resize=400x300" alt="drawing" style="width:400px;"/>
<img src="https://cdn.dribbble.com/users/485682/screenshots/17474405/media/a4e888a7b3e45091327c3b2558922a15.jpg?compress=1&resize=400x300&vertical=top" alt="drawing" style="width:400px;"/>
