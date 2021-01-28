#### [Home](../README.md) | [Schedule](schedule.md) | [Course Outline](outline.md) | [Repository](https://www.github.com/pippinbarr/cart263-2021)

# Schedule

#### Contents
- [Guides](#guides) - high level guides
- [Examples](../examples/) - full examples of code
- [Projects](#projects) - project briefs and due dates

---

- Week 1 - [Hello, World! Again!](#hello-world-again) - Getting settled
- Week 2 - [Review](#review) - Remembering JavaScript and p5.js
- Week 3 - [Voices](#voices) - Working with speech output and input
- Week 4 - [Data](#data) - Working with JSON data and browser-based storage
- Week 5 - [AI](#ai) - Playing with machine learning models
- Week 6 - [Project 1 Studio](#project-1-studio) - Studio support for Project 1
- Reading week
- Week 7 - [The webpage](#the-webpage) - Introduction to HTML, CSS, and the DOM
- Week 8 - [jQuery](#jquery) - Manipulating HTML and CSS via jQuery
- Week 9 - [jQuery UI](#jquery-ui) - Interface elements with jQuery UI
- Week 10 - [3D](#3d) - 3D graphics on the canvas with A-Frame
- Week 11 - [Project 2 Studio I](#project-2-studio-i) - Studio support for Project 2
- Week 12 - [Project 2 Studio II](#project-2-studio-ii) - Studio support for Project 2
- Week 13 - [Project 2 Studio III](#project-2-studio-iii) - Studio support for Project 2

---

#### Guides
- [Style Guide](../guides/style-guide.md)
- [Git Cheatsheet](../guides/git-cheatsheet.md)

#### Projects
- [Project 1: A Night at the Movies](../projects/project1/README.md)
- [Project 2: Anything](../projects/project2/README.md)

---

# Hello, World! Again!

Week of 18 January 2021

## Objectives
- Software setup
- Meeting each other
- Discussing the course

## Before class
- **Join** the Discord (invitation link at top of the course Moodle)
- **Watch** [1.1. Welcome to Creative Computation II](https://youtu.be/xlZvoxpDHvg)
- **Read** the [Course Outline](./outline.md)
- **Set up** your software
  * Follow the [Course Software Guide](../guides/course-software.md) guide
  * Set up your course repository on GitHub (follow the [GitHub Guide](../guides/github-repository.md)) if needed)
  * Review the [Version Control Guide](../guides/github-desktop.md) if needed
  * Review the [Git Cheatsheet](../guides/git-cheatsheet.md) for a condensed review of version control using GitHub Desktop or Atom or the command line
- **Get** pumped!?

## Classroom (in Discord classroom channels at 13:30 on the day of class)
* Welcome
* Introductions (don't forget your pronouns!)
* Reviewing the [Course Outline](./outline.md)
* Reviewing the [Course Schedule](./schedule.md)
* Time management (class scheduling, office hours)
* Waiting list? Is anyone on it?
* Software setup? Any problems?
* The [C-LAB](https://clab.concordia.ca/) is there to help you
  * Homepage: [https://clab.concordia.ca/](https://clab.concordia.ca/)
  * Email: [computation.lab@concordia.ca](mailto:computation.lab@concordia.ca)
  * Zoom office hours: [https://concordia-ca.zoom.us/my/the.computation.lab](https://concordia-ca.zoom.us/my/the.computation.lab) (Email first for the password)
  * Discord: Email for an invitation if needed
  * Workshops: [https://clab.concordia.ca/clab-workshops/](https://clab.concordia.ca/clab-workshops/)

## Studio (in Discord studio channels after classroom period)
- Instructor and TA available to help
- Start work on next week's material

## Homework
- Continue work on next week's material

---

# Review

Week of 25 January 2021

## Objectives
- Remembering JavaScript fundamentals
- Remembering p5.js

## Before class

### Topics

#### JavaScript Review
- (If needed) **Read** [JavaScript syntax review](../topics/javascript/syntax-review/javascript-syntax-review.md)
- (If needed) **Watch** [Creative Computation I videos](https://www.youtube.com/channel/UCgMMSLb6Zywjhk9JW6I00Aw) and **Review** [Creative Computation I materials](https://github.com/pippinbarr/cart253-2020/blob/master/course-information/schedule.md)

#### New JavaScript Concepts
- **Watch** [2.1. Constants](https://youtu.be/s5ewBmui8BU) and **read** the [notes](../topics/javascript/constants.md).
- **Watch** [2.2. Object parameters](https://youtu.be/pwx6-NSm-F0) and **read** the [notes](../topics/javascript/object-parameters.md).
- **Watch** [2.3. First-class functions](https://youtu.be/44NrX7VlErM) and **read** the [notes](../topics/javascript/first-class-functions.md).

### Activity
- **Complete** [Activity: Where's Sausage Dog?](../activities/wheres-sausage-dog.md) (**Watch** [2.4. Activity: Where's Sausage Dog?](https://youtu.be/r9ZCFCd4mjE) video to see Pippin doing it) ([Example final code](https://github.com/pippinbarr/cart263-2021/tree/main/activities/wheres-sausage-dog), [Play](https://pippinbarr.github.io/cart263-2021/activities/wheres-sausage-dog/))

### Exercise
* **Complete** [Exercise: Where's Sausage Dog? New Game+](../exercises/wheres-sausage-dog-new-game-plus.md) (due the night of class)

### Examples
- For various examples of JavaScript and p5, refer to the [CART253 Fall 2020 repository](https://www.github.com/pippinbarr/cart253-2020/).

## Classroom (in Discord classroom channels at 13:30 on the day of class)
* Q&A
* Review of the week's material
  * Inheritance?
* Office hours are: Wednesdays, 14:00-16:00
* Introducing [Project 1: A Night at the Movies](../projects/project1/README.md)
* The [C-LAB](https://clab.concordia.ca/) is there to help you

## Studio (in Discord studio channels after classroom period)
* Instructor and TA available to help
* Work on [Exercise: Where's Sausage Dog? New Game+](../exercises/wheres-sausage-dog-new-game-plus.md) (due the night of class)
* Start work on next week's material

## Homework
* Continue work on next week's material
* Work on [Project 1: A Night at the Movies](../projects/project1/README.md)

---

# Voices

Week of 1 February 2021

## Objectives
- Making the computer talk with ResponsiveVoice
- Making the computer listen with annyang!

## Before class

### Topics

#### **ResponsiveVoice**
* **Watch** [3.1. ResponsiveVoice](https://youtu.be/KwgEbGB21Xg) and **read** the [notes](../topics/voices/responsivevoice.md).
* References
  * [ResponsiveVoice Homepage](https://responsivevoice.org/)
  * [ResponsiveVoice API](https://responsivevoice.org/api/)

#### **annyang!**
* **Watch** [3.2. annyang!](https://youtu.be/Zww_5hd8umo) and read the [notes](../topics/voices/annyang.md).
* References
  * [annyang! Homepage](https://www.talater.com/annyang/)
  * [annyang! API](https://github.com/TalAter/annyang/blob/master/docs/README.md)

### Activity
* **Complete** [Activity: Slamina](../activities/slamina.md) (**Watch** [3.3. Activity: Slamina](https://youtu.be/RKhwJgtAlYE) video to see Pippin doing it, but be aware he **makes some impressive mistakes!** then fixes them, it's raw and truthful) ([Example final code](https://github.com/pippinbarr/cart263-2021/tree/main/activities/slamina), [Online](https://pippinbarr.github.io/cart263-2021/activities/slamina/))

### Exercise
* **Complete** [Exercise: Slamina New Game+](../exercises/slamina-new-game-plus.md) (due the night of class)

## [Examples](../examples/#voices)
Click through for examples of the topics covered in this section

## Classroom (in Discord classroom channels at 13:30 on the day of class)
* Q&A
* Review of the week's material
* [Project 1: A Night at the Movies](../projects/project1/README.md)
* The [C-LAB](https://clab.concordia.ca/) is there to help you

## Studio (in Discord studio channels after classroom period)
* Instructor and TA available to help
* Work on [Exercise: Slamina New Game+](../exercises/slamina-new-game-plus.md) (due the night of class)
* Start work on next week's material

## Homework
* Continue work on next week's material
* [Project 1: A Night at the Movies](../projects/project1/README.md)

---

# Data

Week of 8 February 2021

## Objectives
- Understanding the JSON format
- Playing with JSON data
- Saving and loading data in the browser

## Before class

### Topics

#### **JSON**
* **Watch** [4.1. JSON](https://youtu.be/po6d5FY9jFI) and **read** the [notes](../topics/data/json.md).
* References
  * [JSON Homepage](https://www.json.org/json-en.html)

#### **Web Storage API**
* **Watch** [4.2. Web Storage API](https://youtu.be/6KsC13w7yf4) and **read** the [notes](../topics/data/web-storage-api.md).
* References
  * [Web Storage API Documentation from Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

### Activity
* **Complete** [Activity: Spy Profile Generator](../activities/spy-profile-generator.md) (**Watch** [4.3. Activity: Spy Profile Generator](https://youtu.be/0HAZGpVUdRI) video to see Pippin doing it) ([Example final code](https://github.com/pippinbarr/cart263-2021/tree/main/activities/spy-profile-generator/), [Online](https://pippinbarr.github.io/cart263-2021/activities/spy-profile-generator/))

### Exercise
* **Complete** [Exercise: Spy Profile Generator++](../exercises/spy-profile-generator-plus-plus.md) (due the night of class)

## [Examples](../examples/#data)
Click through for examples of the topics covered in this section

## Classroom (in Discord classroom channels at 13:30 on the day of class)
* Q&A
* Review of the week's material
* [Project 1: A Night at the Movies](../projects/project1/README.md)
* The [C-LAB](https://clab.concordia.ca/) is there to help you

## Studio (in Discord studio channels after classroom period)
* Instructor and TA available to help
* Work on Exercise
* Start work on next week's material

## Homework
* Continue work on next week's material
* [Project 1: A Night at the Movies](../projects/project1/README.md)


---

# AI

Week of 15 February 2021

## Objectives
- Playing with ml5.js and Machine Learning

## Before class

### Topics

#### **ml5.js** (Machine Learning)
* **Watch** 5.1 Introducing ml5.js (coming soon) and **read** the [notes](../topics/ai/introducing-ml5js.md)
* 5.2 ml5.js: ObjectDetector
* 5.3 ml5.js: Facemesh
* 5.4 ml5.js: Handpose
* 5.5 ml5.js and the Google Teachable Machine
* References
  * [ml5.js Homepage](https://ml5js.org/)
  * [ml5.js Reference](https://learn.ml5js.org/#/reference/index) (API)
  * [Dan Schiffman's introduction to ml5.js](https://www.youtube.com/watch?v=jmznx0Q1fP0)

### Activity
* **Complete** [Activity: Bubble Popper](../activities/bubble-popper.md) (**Watch** [5.X. Activity: Bubble Popper](...) video to see Pippin doing it) ([Example final code](https://github.com/pippinbarr/cart263-2021/tree/main/examples/ai/bubble-popper/), [Online](https://pippinbarr.github.io/cart263-2021/examples/ai/bubble-popper/))

### Exercise
* **Complete** [Exercise: Bubble Popper++](../exercises/bubble-popper-plus-plus.md) (due the night of class)

## [Examples](../examples/#ai)
Click through for examples of the topics covered in this section

## Classroom (in Discord classroom channels at 13:30 on the day of class)
* Q&A
* Review of the week's material
* Example revamp
* [Project 1: A Night at the Movies](../projects/project1/README.md)
* The [C-LAB](https://clab.concordia.ca/) is there to help you

## Studio (in Discord studio channels after classroom period)
* Instructor and TA available to help
* Work on Exercise
* Work on Project
* Start work on next week's material

## Homework
* Continue work on next week's material
* [Project 1: A Night at the Movies](../projects/project1/README.md)

---

# Project 1 studio

Week of 22 February 2021

## Objectives
- Working on [Project 1: A Night at the Movies](../projects/project1/README.md)

## Submit [Project 1: A Night at the Movies](../projects/project1/README.md)

---

# Reading week

Week of 1 March 2021

---

# The Webpage

Week of 8 March 2021

## Objectives
- Understanding HTML and CSS
- Understanding JavaScript and the DOM (Document Object Model)

## Before class

### Topics
* **HTML/CSS**
  * [HTML Documentation from Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML)
  * [CSS Documentation from Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS)
* The **DOM** (Document Object Model)
  * [DOM Documentation from Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

---

# jQuery

Week of 15 March 2021

## Objectives
- Learning to use jQuery

## Before class

### Topics
* **jQuery**
  * [jQuery Homepage](https://jquery.com/)
  * [jQuery API](https://api.jquery.com/)
  * [JQuery Learning Center](https://learn.jquery.com/)

---

# jQuery UI

Week of 22 March 2021

## Objectives
- Learning to use jQuery UI
- Using form input in a program

## Before class

### Topics
* **jQuery UI**
  * [jQuery UI Homepage](https://jqueryui.com/)
  * [jQuery UI API](https://api.jqueryui.com/)
  * [jQuery UI Demos](https://jqueryui.com/demos/)

---

# A-Frame

Week of 29 March 2021

## Objectives
- Learning the A-Frame library
- Using jQuery with A-Frame

## Before class

### Topics
* **A-Frame**
  * [A-Frame Homepage](https://aframe.io/)
  * [A-Frame Documentation](https://aframe.io/docs/1.1.0/introduction/) (includes API)

---

# Project 2 studio

Week of 5 April 2021

## Objectives
- Working on Project 2

---

# Project 2 studio

Week of 12 April 2021

## Objectives
- Working on Project 2

---

# Project 2 studio

Week of 19 April 2021

## Objectives
- Working on Project 2

---
