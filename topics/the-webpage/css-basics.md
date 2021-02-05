# CSS Basics {

---

## CSS

- Stands for __Cascading Style Sheets__
- It is the language we use to control the __visual style__ of web pages
- Targets HTML tags and attributes to select specific parts of a page to style
- Controls style via properties
- Generally lives in a text file with extension `.css` (often called `style.css`), but can be included in a `<style>` tag in `HTML` or via the `style` attribute on a specific tag

???

- We include the `<style>` tag approach in the `<head>` tag of our page:

```html
<head>
  <style>
  body {
    font-family: Helvetica, sans-serif;
  }

  #main-heading {
    font-size: 2em;
    color: red;
  }

  .game-icon {
    padding: 10px;
    max-width: 100px;
  }
  </style>
</head>
```

- We include the `style` attribute approach within specific HTML elements on our page:

```html
<p style="color: red; font-size: 2em">This is large, red text.</p>
```

---

```css
body {
  font-family: Helvetica, sans-serif;
}

#main-heading {
  font-size: 2em;
  color: red;
}

.game-icon {
  padding: 10px;
  max-width: 100px;
}
```

- Note the basic form of a __selector__ (`body`, `#main-heading`, `.main-text`) and a set of __properties__ and __values__ inside curly brackets
- Note that a selector can be
  - a __tag name__ (e.g. `body`)
  - an __id__ (prefixed with `#`, e.g. `#main-heading`)
  - a __class__ (prefixed with `.`, e.g. `.game-icon`)

???

- Other selectors include "pseudo-classes", prefixed with `:`,
  - e.g. `:hover` selects an element that has the mouse hovering over it
  - e.g. `:nth-child(2)` selects the elements that are the second child of their parent
  - e.g. `:invalid` selects form elements that are not validated successfully
  - More here: https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes
- Selectors can be __combined__ to create more specific ideas
  - `img.game-icon` selects `img` tags __with the class__ `game-icon`
  - `img .game-icon` selects children of `img` tags where those children have the class `game-icon`
  - There are more of these sorts of things, investigate as needed

---

## What you most need to know

- In order to use CSS in at least a basic fashion you need to

1. Be able to __select__ the element on the page you want to style
  - For this reason it's very common to give any element you want to style an __id__ or __class__ so that it's easy to target
1. Know what __properties__ you want to manipulate on that element
  - For this reason you will want to familiarize yourself with the available properties via a reference like [Mozilla's CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  - Be aware there are __many__ properties, you won't be able to learn them all, and you will almost certainly end up taking inspiration from examples (which is fine, though attribute if you take someone else's style)

---

## CSS-friendly HTML

As previously stated, it's generally a good idea to attach `id` and/or `class` attributes to your HTML elements to make them easily targetable via CSS.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Chess-a-likes</title>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <script src="js/script.js"></script>
</head>
<body>
  <h1 id="main-heading">Pippin Barr's Chess-a-likes!</h1>
  <div id="introduction">
    <h2 id="introduction-heading">Feeling the love</h2>
    <p id="introduction-text" class="introduction-paragraph">
      Pippin Barr <em>loves</em> making <a href="https://www.pippinbarr.com/category/games/">games</a> based on <strong>chess</strong>.
    </p>
  </div>
  <div id="images">
    <h2 id="images-heading">Game images</h2>
    <img class="game-icon"src="https://www.pippinbarr.com/assets/images/game_icons/chesses-300x300.png" alt="Image of chesses chess position">
    <img class="game-icon" src="https://www.pippinbarr.com/assets/images/game_icons/mobile-chogue-300x300.png" alt="Image of mobile chogue chess position">
  </div>
</body>
</html>

```

???

Try looking at this page without any CSS...

---

## More involved CSS

```css
body {
  font-family: Times, serif;
  width: 600px;
  margin: 0 auto;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Helvetica, sans-serif;
  color: rgb(50,50,50);
  text-align: center;
}

a:hover {
  background-color: yellow;
}

.game-icon {
  padding: 10px;
  max-width: 100px;
  transform: rotate(10deg);
}
```

---

## There is a lot more to CSS

- So, CSS is a whole thing
- The key is to remember it's there to style your content
- There are many resources to learn more, such as
  - Reference lists like the [Mozilla CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  - Tutorials like the [freeCodeCamp CSS lessons](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/)
  - Googling specific property names or questions and reading the documentation
  - Using your browser's "Inspector" option to look at the CSS of pages you're browsing
- Look up CSS animations, they are neat!
---

# }
