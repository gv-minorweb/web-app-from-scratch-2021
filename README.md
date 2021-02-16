# What to watch?

Can't decide what movie or TV show you should watch next? Scrolling endlessly on Netflix to find something you like? No more! This application allows you to binge watch all of the latest and greatest trailers to find that perfect match with ease.

![](docs/preview.png)

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

## Live demo
[What To Watch](https://gv-minorweb.github.io/what-to-watch/src/)

## Actor diagram
![Actor Diagram v1.0](docs/actor-diagram.png)

## Interface diagram
![Interaction Diagram v1.0](docs/interaction-diagram.png)

## Methodologies

### Atomic Design
Whenever I start a new project, I lay out the foundation first and think about how I can make things as structured and easy to understand as possible. Whether I'm building a small one pager or an enterprise app, scalability is key and that applies to the way code is written as well. This app is structured using Brad Frost's [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) principles.

Atomic design is a methodology for creating design systems, it splits up the application in five distinct levels:

1. Atoms
2. Molecules
3. Organisms
4. Templates
5. Pages

The basic idea is that your application is made up of pages, which are made up of organisms, which in turn utilize molecules that are made up of atoms.

*For simplicity and the nature of this app I've opted out of using #4, templates.*

#### Atoms
Atoms are the smallest building blocks of the interface. Atoms are small elements such as a button, an input or a heading, that are meant to be reused further up the tree, more about this below. They generally don't include any of the logic of your application.

#### Molecules
Molecules are the next level up from Atoms and can be a little more complex. They are made up of groups of atoms, for example a form molecule that's made up of atoms such as inputs, labels and buttons.

#### Organisms
Organisms are groups of molecules joined together to form a distinct section of an interface.

#### Pages
--

---

### BEM

Another principle or methodology I like to use is [BEM](http://getbem.com/), which stands for **B**lock **E**lement **M**odifier. It helps create reusable components and is designed to be modular and flexible.

On the surface, BEM is nothing more than a naming convention and can be applied to a wide range of different projects. It ensures that everyone who participates in the development of a single codebase speaks the same language and makes sure code is written in a consistent manner.

Often you would use either Atomic Design or BEM, but as said earlier, BEM is flexible and can be applied on top of other methodologies, so I'm combining the two in this project.

**So what are Blocks, Elements and Modifiers?**

**A block** is a standalone entity that is meaningful on its own.   For example: `header`, `button`, `card`.

**An element** is part of a block that has no standalone meaning and is semantically tied to its block. For example: `header__nav`, `button__text`, `card__header`.

**A modifier** is a flag on a block or element and is used to change the appearance or behavior. For example: `header--small` or `card--big`.

Naming conventions with BEM are flexible, but the most common notation and the one that's used in this project, is two underscores for elements (`BLOCK__ELEMENT`) and two dashes to indicate something is a modifier (`BLOCK--MODIFIER`). It's important that whatever naming convention you use stays consistent throughout the project.

So how is this used in practice, in this project?

One of the components in this project is a modal, an organism. I use BEM's naming convention for the classes of the elements the component is made up of.

```html
<!-- The "modal" is the block -->
<div class="modal">
  <!-- Elements inside a block -->
  <div class="modal__inner">
    <div class="modal__inner__header"></div>
    <div class="modal__inner__content"></div>
  </div>
  <div class="modal__bg"></div>
</div>
```
Let's say 90% of the modals in the application use a specific width and height, but there is one case where the modal needs to be full width. This is where the **modifier** of BEM comes in. For example:
```html
<div class="modal modal--fullwidth> ... </div>
```

## API
This application uses data from [TheMovieDB](https://developers.themoviedb.org/3/).

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
