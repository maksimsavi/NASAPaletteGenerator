# NASAPaletteGenerator
NASA Color Palette Generator

https://maksimsavi.github.io/NASAPaletteGenerator/

This app will generate a color palette from a picture input. 

At this point you can search through two of NASA's APIs: 
- Astronomy Picture Of The Day
    you can pick any date from the past.
- NASA's Image and Video library
    you can search for different tags and select an image to use.

You can also use a custom URL which should lead directly to a picture.

Once the app receives an image, it gets sent to Clarifai's API for color extraction.
Then you will see a page with the image used and color blocks below it with HEX codes.
You can use the codes for design tasks, or even if you want to check what color your pet is.

Technologies used:
HTML, CSS, jQuery, JS, NASA APIs, Clarifai API.