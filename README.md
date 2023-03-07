# Grace Shopper

Full stack e-commerce app - allows users to buy puzzles.

## Features

- Homepage with staff picks and featured puzzles
- User Login, Account Creations and Authentication
- Fully functional cart
  - Users and guests are able to add, update, remove or clear their cart and checkout through a Stripe integration
    - upon logging in the guest cart is added to an existing user cart
- Admins are able to update, remove or add new puzzle options and view a list of users

## Technologies Used

- React
- Redux
- React Router
- Express
- Node
- Sequelize
- PostgreSQL
- Stripe
- JWT
- bcrypt
- Axios
- Webpack
- CSS
- CSS Modules
- HTML

## Collaborators

Meg Bickerstaff: [Github](https://github.com/orgs/graceshpopper-team-backend-protokol/people/megtb) | [LinkedIn](https://www.linkedin.com/in/meg-bickerstaff/)
Katrina Rossi: [Github](https://github.com/orgs/graceshpopper-team-backend-protokol/people/trinarossi) | [LinkedIn](https://www.linkedin.com/in/katrina-rossi-736069194)
Sarah Stephens: [Github](https://github.com/orgs/graceshpopper-team-backend-protokol/people/sstephens0907) | [LinkedIn](https://www.linkedin.com/in/sarahastephens/)
Vik Wedel: [Github](https://github.com/orgs/graceshpopper-team-backend-protokol/people/vik-wed) | [LinkedIn](https://www.linkedin.com/in/vikwedel/)

## Architecture

[Review our project architecture](/ARCHITECTURE.md)

## Run it on your local machine

- `npm install`
- Create a postgres database (grace-shopper):
- npm run start:dev to start the server, seed the database and run webpack
