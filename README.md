![](https://i.ibb.co/Y3692hJ/clonescript.png)


#### A lightning fast, ultra small javascript template engine
#### for when speed matters.


# Documentation

- [About](#about)
- [Installation](#initialization)
- [Setup](#build)
- [Element basic](#element-basic)
- [Element id](#element-id)
- [Element class](#element-class)
- [Element attributes](#element-attributes)
- [Element events](#element-events)
- [Element append](#element-append)
- [Nested Text Nodes](#nested-text-nodes)

# about

Clonescript works directly with the dom to allow you to produece event driven html. Each html element added to your list of used elements is only ever created once. This created element is from then onwards cloned at each call for increased speed.

* clonescript works directly with the dom
* less than 1kb in size
* no regex/unsafe functions
* about as close to using vanilla js speed as it gets.

# Installation

# Setup
The `eles` const should contain a list of all your used element tags.
These will be generated once and then cloned at every call for that element.

* The tag names `txt` and `default` are reserved and cannot be used.
* Tag names should be in order of usage
```js
  // clonescript.mjs

  // add used elements to create clones of
  const eles = ['div', 'span', 'p', 'input', 'label']

```

# API

```js
/**
 *  @cs.clone(tag, obj, txt)
 *  @param {string} tag ~ html tag
 *  @param {object|string} object ~ element options | string ~ element textContent
 *  @param {string} txt ~ element textContent
 **/

/**
 *  @cs.add(tag, obj, txt)
 *  @param {string} tag ~ html tag
 *  @param {object|string} object ~ element options | string ~ element textContent
 *  @param {string} txt ~ element textContent
 **/

/**
 *  @cs.val() ~ returns html object
 **/
```

# element basic

```js
// create a basic element with text

let x = cs.clone('p', 'example plain text').val();

console.log(x)
// <p>example plain text</p>

```

# element id
```js
// create an element with an id

let x = cs.clone('p', {
  id: 'test' // add id
}, 'example id').val();

console.log(x);
// <p id="test">example id</p>

```

# element class
```js
// create an element with an multiple classes

cs.clone('p', {
  class: ['class1', 'class2'], // array of class/es
}, 'example class').val();

console.log(x);
// <p class="class1 class2">example class</p>

```

# element attributes
```js
// create an element with an multiple attributes

cs.clone('input', {
  attr: { // attributes
    type: 'text',
    placeHolder: 'example attributes',
    style: 'color:red;background:black'
  }
}).val()

console.log(x)
// <input type="text" style="color:red;background:black" placeholder="example attributes">

```

# element events
```js

cs.clone('p', {
  fn: { // functions
    onclick: function(){
      console.log('item clicked!');
    },
    onmouseover: function(){
      console.log('item mouseover!');
    }
  }
}, 'example function').val();

console.log(x.click())
// item clicked!
console.log(x.onmouseover());
// item mouseover!
```

# element append
```js

let x = cs.clone('p', {
  append: [
    cs.add('p', 'level 2.1'),
    cs.add('p', 'level 2.2')
  ]
}, 'level 1').val();

console.log(x);
/*
<p>
    level 1
    <p>level 2.1</p>
    <p>level 2.2</p>
</p>
*/
```

# nested text nodes
```js

let x = cs.clone('p', {
  append: [
    cs.add('p', 'basic 1'),
    cs.add('txt','nested text'),
    cs.add('p', 'basic 2'),
    cs.add('txt', 'appended text text')
  ]
}, 'prepended text').val();

console.log(x);
/*
<p>
    prepended text
    <p>basic 1</p>
    nested text
    <p>basic 2</p>
    appended text text
</p>
*/
```
