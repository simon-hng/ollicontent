[logo]: Resources/Public/Icons/Backend/logo.jpg "Logo Title Text 2"

![olli logo][logo]
# TYPO3 Website kit with common content elements
This is a TYPO3 sitepackage extension with commonly used elements in order to speed up the process of creating a website.

## Included elements
* Section
* Wrapper for horizontal margins
* Columns 2-4
* Accordion menu
* Arrow navigation
* Copy text/slider
* Image text/slider
* Image teaser
* Separation line
* Button
* Burger menu
* Footer

## Requirements
TYPO3 Extensions
* flux
* vhs
* fluidpages version 4.3 or 5.0 dev Branch 

## Modify elements
install the required extensions
clone this repository into your TYPO3 ext/ folder
```
$ cd ollicontent/Build/
  npm install
  grunt
```
The elements are in the Resources/Private/Templates/Content Folder with a corresponding sass file in Resources/Public/Sass.

## Built with
* [TYPO3 9.5.9](https://typo3.org/)
* [Fluid Powered TYPO3](https://fluidtypo3.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [GruntJS](https://gruntjs.com/)
* [Swiper](http://idangero.us/swiper/)
* [Sass](https://sass-lang.com/)