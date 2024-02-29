# SNHU_CS_465

## Getting Started

### Install dependencies
npm install

### Start Webserver
SET DEBUG=travlr:*
npm start

navigate to localhost:3000

### Seeding Database
npx seedgoose seed

### Start Admin Site
cd app_admin
ng serve

## Architecture
The SPA was made from Angular. Angular allows for the project to be broken down into reusable components. The Express site was made up of controllers and views.

The backend used a NoSQL database because the trip data could be stored as a collection and wasn’t relational.

## Functionality

The difference between JSON and Javascript is that JSON is Javascript, but Javascript is not JSON. Javascript is a language that can do more than just store data. JSON is commonly used to store and pass data. For example, data can be passed from the backend to the frontend using a JSON object.

Reusable interface components greatly simplify maintenance of a site. If a bug is found in a component, then it only has to be patched in one spot. A modal bug is a good example of this. They’re often used throughout the site. A modal component also keeps styling consistent and a developer just needs to call the component to implement it.


## Testing

Methods and endpoints are similar. They both can run blocks of logic. A big difference is that endpoints are externally accessible so that other applications can call them. Methods are callable by endpoints internally or by other methods. Security is used to protect endpoints from unauthorized access.

## Reflection

I’ve become better using a MEAN stack through this course. The knowledge of different stacks will help architect different solutions depending on the situation. Diversity also helps to make me more marketable in my field. I’ve also seen an improvement in my Angular skills. A skill that’s also very marketable.