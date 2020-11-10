Welcome to the products-api-william wiki!
# **PRODUCTS API BY WILLIAM SONOMA** 👍 
This application is built as a front end coding challenge given by William Sonoma Company. 

**Demo** : "vercel Link"

**Requirements : **

Using the json file provided below, given an input of products, design a page
that:
· Consumes the JSON of products
· Builds the product details page with all products
· Displays the product details, including price, product name and the main********
hero image
· Interacts intuitively; if you click on the image, you should see an overlay
with a carousal of all thumbnail images

**JSON URL**
- https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json
**Guidelines**
· Use any view framework of your choice
· As much as possible, stick to vanilla JavaScript for DOM handling
(queries, events, etc.)
· Spend your time in design and implementation. We are not looking for
the quickest solution.
· Detail your build system and tests in README.md – how do we run the
tests and run the project?
· Showcase your ES6 skills and your UX/UI chops.

# **Installation**
To get the project up and running, and view components in the browser, complete the following steps:

1. Download and install Node: https://nodejs.org/
2. Clone this repo: git clone https://github.com/Prathyusha1993/products-api-william.git
3. Install project dependancies: npm install
4. Start the development environment: npm start
5. Open your browser and visit http://localhost:3000

**# Implementation steps**
Once there is clarity in requirements then follow the below steps to implement

Technology choices - get a clarity on what technology should be used and why

1. React JS
 a.Fast development with reusable UI components
2.Sass
 a. Clean, easy and less CSS
**Implementation**

i. Create react app
   a. Use some template builders to bootstrap the app with necessary artifacts
ii. Components design 
   a. Identify components
      1.Go through designs and identify all the components to write code
   b. Identify state vs stateless components
   c. Identify props to be passed to the components
iii. Write code
   a. Iteratively write code and improve it with code reviews
   b. Write reusable components and functions
iv. Add styling
   a. Style the components as per the designs
v. Run the code and verify
vi. Tests
   a. Unit tests
   b. Integration tests
vii. Deploy to production
   a. Verify if everything is fine
viii. Bugs
   a. If any bugs, fix them

**## Work Breakdown**
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
3. Service Layer
   a. Get all product details

**# Technical Details**
This project was bootstrapped with Create React App.

Check here for details on how to run and contribute to the app.
