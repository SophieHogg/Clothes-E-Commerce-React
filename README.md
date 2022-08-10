# E-Commerce Website (React)

## Clothes E-Shop configured using React.

![alt text](./src/images/ClothingStoreInterface.png)

## MVP

    Home Page
        This will contain:
            A Grid of products
            Carousel of featured products
            Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
    All products should be stored in Firestore:
        You should store the following information:
            quantity
            variants (could be colors, sizes, etc)
            price per unit
            name
            image url
            favourited or not (boolean)
    All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

## Design & Styling

The colour palette, as always, was based on Australian flora - in this case, gum tree flowers. I tried to use contrasting colours to make the page more eye-catching to the users, with the differing colours clearly representing different parts of the page.

## Layout

There is a homepage with a welcome message and there is a product list page which contains all of the product cards. Eventually, I would like there to be a cart page which updates with user input (I have added the link here but not the logic etc. that goes with it.)

You can click on any of the cards on the Product List page to go to a specific clothing item, where you can find more information. At the moment, you can only add to favourites or add to cart on the homepage.

All data is stored in Firestore, including the stock information.

## Logic

There is some logic incorporated into this app - favourited items will appear in the favourite items catalogue at the top of the product list page. This needs to be a rotating carousel.

## Things to be added

### MVP Items

-   Rotating carousel
-   Ability to add specific colours to cart, and adding to cart/favourites from Product Page screen.
-   Remove 'inCart' from fireStore and solely use React logic to define how many is inCart.

### Extension Items

-   Adding a cart with logic
-   Changing the url input in the database to be an array and mapping out the images in the product page.

## Changes Made 10/08

-   Update cart display, stock display, favourited bool on click
-   Stopped people from adding negative numbers of items to cart
-   Stopped people from adding more to cart than there are in stock.
