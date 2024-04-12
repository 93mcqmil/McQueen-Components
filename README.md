Jag har valt och göra en formulär som består av 3 komponenter,

- en knapp
- två inputfält

<u>Installation</u>

- npm install
- npm run dev

Lagt till check-box-lista med namn

---

# Carousel komponenten:

En carousel-komponent som tar emot ett object och visar upp antingen:

- titel och info
- titel, info och bild

Komponenten har tre färgval:

- - color-primary
- - color-background-hover
- - color-hover

Props?

- object{}
  Exempelobject finner du i src/Components/Carousel/carouselTypes

Bild?

- Den relativa sökvägen skall ses som att den är från index.html eller vara null
  Exempelbilder till myObj (src/Components/Carousel/carouselTypes) finner du i src/assets/img

Dependency?

-uuid -> npm instal -D react-uuid
-React icons -> npm i react-icons

---

***********************************************************************************

# Information if you want to use all the icons intended for this Navbar
* You need to install a patch which is

- * npm install react-icons

## then import from the following link
* import { FaBars, FaTimes } from "react-icons/fa";



- if you want to check more icons, go to =>
https://react-icons-v2.vercel.app/

**********************************************************************************


# If you want to use the share button code. 

* And you want to change the link where it should go, and if you want to change icons,
need to make changes in three places, 

* 1. App.tsx => here you change link to icon

* 2. buttens.scss => from line 118 downwards, you change the name of the link as well as the color name,
 
* 3. _colors.scss => here you change the color code for the icon and what it should be called.

* I recommend that you check this link => 
https://remixicon.com/
