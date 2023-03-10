# sustainable-fashion

Simply analyze the material of your product to determine what it rates on sustainability

## Wireframes

Main page includes:

- a display for the sustainability rating of the clothes
- a form to fill out with the percentage of material used (default is equal percentage of all items if percentage is not included)
- materials will be a dropdown with options of materials used -- will keep track if user provided similar materials selection, limit number of materials for demo purposes
- ability to hover over the materials to get more information on the materials user has entered

**wireframe of user interface**
<img src="public/fashion-wireframe-1.png"
     alt="wireframe1"
     style="float: left; margin-right: 10px;" />

**results visualization**
<br/>
<img src="public/fashion-wireframe-2.png"
     alt="wireframe2"
     style="float: left; margin-right: 10px;" />

## Technologies

The app uses the following technologies:

- nextjs
- react

## How to Use

<img src="public/screenshot1.png"
     alt="screenshot1"
     style="float: left; margin-right: 10px;" />

- User can select material from select dropdown
- User can update percentage of material
- User can remove a material
- User can add more material
- User is limited 5 materials total to analyze
- User can analyze material if the following is met:
  - all materials are unique
  - total of material percentage is 100%
  - all materials have a percentage
