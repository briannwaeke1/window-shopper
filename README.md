# window-shopper

## Description
An e-commerce web application. This is a personal project to showcase my ability to build an enterprise level application from scratch completing all tasks in the development lifecycle.


## Tech Stack
- ReactJS
- NodeJS
- Redux
- SASS
  -   Converted styling from SASS to Styled-Components
- Firebase

## Main Features
- Navigation / Header
- Home (List of all categories)
- Product Category Preview (List of 4 product items for each product category)
- Product Category (List of all product items for each category)
- Shopping Cart (Dynamic icon and floating shopping cart)
- Login / Sign-up (Google Firebase)
- Checkout (Stripe API)


## Deployment
- This buildpack deploys a React UI as a static web site. The Nginx web server provides optimum performance and security for the runtime.
- https://github.com/mars/create-react-app-buildpack

## Demo
Please see deployed website [here](https://window-shopper-live.herokuapp.com/).


## Testing
- Unit tests
  - UI Components
- Integration tests
  - Fetch product and add to cart properly
- e2e
  - Add and remove product from cart



## Future Roadmap
- Full product and category search
- Server-side processing of payments using AWS Lambda
- Migrate from SASS to Styled Components
- Migrate from Redux to Hooks and ContextAPI
- Store product data in AWS DynamoDB
- Fetch data using GraphQL and Apollo
