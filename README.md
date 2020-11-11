Welcome to the products-api-william wiki!
# **PRODUCTS API BY WILLIAM SONOMA** 👍 
This application is built as a front end coding challenge given by William Sonoma Company. 

**Demo** : https://products-api-william.vercel.app/

**Requirements : **

Using the json file provided below, given an input of products, design a page
that:
   1. Consumes the JSON of products
   2. Builds the product details page with all products
   3. Displays the product details, including price, product name and the main********
hero image
   4. Interacts intuitively; if you click on the image, you should see an overlay
with a carousal of all thumbnail images

###### JSON URL
- https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json

## Guidelines
   1. Use any view framework of your choice
   2. As much as possible, stick to vanilla JavaScript for DOM handling
(queries, events, etc.)
   3. Spend your time in design and implementation. We are not looking for
the quickest solution.
   4. Detail your build system and tests in README.md – how do we run the
tests and run the project?
   5. Showcase your ES6 skills and your UX/UI chops.

##  Installation
To get the project up and running, and view components in the browser, complete the following steps:

1. Download and install Node: https://nodejs.org/
2. Clone this repo: git clone https://github.com/Prathyusha1993/products-api-william.git
3. Install project dependancies: npm install
4. Start the development environment: npm start
5. Open your browser and visit http://localhost:3000
6. For testing used Jest and Enzyme - npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer

**# Implementation steps**
###### Once there is clarity in requirements then follow the below steps to implement

Technology choices - get a clarity on what technology should be used and why

   1. React JS
      a.Fast development with reusable UI components
   2.Sass
      a. Clean, easy and less CSS
**Implementation**
    1. Create react app
      - Use some template builders to bootstrap the app with necessary artifacts
    2. Components design 
      - Identify components
         1.Go through designs and identify all the components to write code
      - Identify state vs stateless components
      - Identify props to be passed to the components
   3. Write code
      - Iteratively write code and improve it with code reviews
      - Write reusable components and functions
   4. Add styling
      - Style the components as per the designs
   5. Run the code and verify
   6. Tests
      - Unit tests
      - Integration tests
   7. Deploy to production
      - Verify if everything is fine
   8. Bugs
      - If any bugs, fix them

## Work Breakdown
We have to breakdown the work into smaller stories to be worked to collaborate with the team. In this phase, we go through low level details to make sure we have all the necessary info to build the application, and find out proactively if there are any challenges.

According to the designs, the following React components and interactions have been identified
This UI page is build by using "react-responsive-carousel"

### ## React Components
    a. Navbar
       William Sonoma
    b. Body
       1. Product details
          a. hero image
          b. product name
       2. Thumbnails
       3. this UI page should appear in the form of carousel  
       
 ######Service Layer
   - Get all product details
   
## UNIT TEST USING JEST:
   - Written unit test for following files using Jest and Enzyme.
   - npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer

         1. App.js
         2.Navbar.js
         3.fetchService.js

**# Technical Details**
This project was bootstrapped with Create React App.

Check (here) for details on how to run and contribute to the app.
