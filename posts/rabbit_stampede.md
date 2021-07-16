---
title: 'Rabbit Stampede!'
date: '2020-10-30'
---

It’s week 2 of Hack Reactor Pre Course and we’re learning about data structures (stacks and queues, graphs and trees, etc).

If I could characterize my experience at HR so far, it would be in the shape of a stampede—a stampede of rabbits!


![Rabbit Stampede](/rabbit_stampede.jpg "Rabbit Stampede")

Hannah Manfredi, Rabbit Stampede, 2020, Acrylic, clay, oil, cardboard, graphite, colored pencil on paper, 17X22"

All I want is to be a great software developer. Thus, I need to know how to walk or rather, run across the Internet.

```
  const getElementsByClassName = (className, element, contain) => {

  element = element || document.body;
  contain = contain || [];

  if (element.classList && element.classList.contains(className)) {
    contain.push(element);
  }

  if (element.hasChildNodes()) {
    var children = element.childNodes;
    children.forEach(kid=>getElementsByClassName(className, kid,
    contain));
 }

 return contain;

}
```

In my code example above, I reimplemented the native Document.getElementsByClassName method from scratch. This method allows us to ‘traverse’ the entire DOM in search of all elements with a specific className.

It turns out, the DOM is a tree and in order to traverse the entire tree from root (the first node or, top of the tree) to its depth, we need to step forward and to the side and down, in order to check every single node (including root, parent, child, grandchild…) to see if it contains the target className. The trouble with trees is that at the start of our traversal, we generally don't know how deeply nested it is (how many generations of nodes it contains).

There’s so much walking involved.

We traverse the DOM, recursively — walk on every node.

Also, step in, step over and step out of the code with Chrome Debugger! Walk through code, line by line, in order to find the bug (I know, computer, it’s not you, it’s me).

I love it.

So, what is recursion and how does it work?

If you Google ‘what is recursion,’ you’ll find a lot of definitions like, ‘recursion is when a function calls itself.’ I didn’t find this helpful at all. It lead me down a path of confusion where I tried memorizing recursive patterns, then applied them to problems they couldn’t solve.
Maybe this explanation will help you!
If we think about the sketch below of a copy of a still life by Morandi (I added the rabbit), as a tree data structure, a version of it might look like this:

```
var sketchData = {
 layer: 1,
 material: 'paper',
 marks: none,
 nextMove: [
 {
   layer: 2,
   material: 'graphite',
   marks: 'contours: roughly outline components of still life',
   nextMove: []
 },
 {
   layer: 3,
   material: 'more graphite (different hardnesses)',
   marks: 'define patterns of light and dark',
   nextMove: [
   {
    layer: 4,
    material: 'pastel',
    marks: 'add color',
    nextMove: [
    {
    layer: 5,
    material: 'colored pencil',
    marks: 'draw rabbit',
    nextMove: [

     {
      layer: 6,
      material: 'pastel',
      marks: 'add highlights',
      nextMove: []
        }
       ]
      }
     ]
    }
   ]
  }
 ]
};
```

To oversimplify, a tree is nonlinear (there are many different ways to traverse a tree) and has a hierarchical structure with a root (a starting point, aka parent) and subtrees (aka children), which can also have children of their own.
sketchData is an object with properties layer, material, marks and nextMove, that’s a representation of the materials used and steps taken to complete the sketch. The nextMove property is an array (child) that may or may not contain its own nested children (subtrees), which have all of the same properties as sketchData (with different values), showing the way a sketch is built up by layers over time with different materials and marks.
If we really wanted to write a function to determine which of the sketch’s layers were done in pastel, we could define a function draw and a test, test:

```
var draw = function (sketchData, test) {
 var layers = [];
 var traverse = function(node, test) {
  if (test(node)) {
   layers.push(node.layer);
  }
  var children = node.nextMove;
  for (var i = 0; i < children.length; i++) {
   traverse(children[i], test);
  }
 }
 traverse(sketchData, test);
return layers;
};
var test = function (layer) {
 return layer.material === 'pastel';
}
```
The inputs to our function would be the object, sketchData and the test, test, and our output would be an array containing only the layers where the material used was ‘pastel.’ draw makes use of an inner, recursive function, traverse that enables us to check each layer of the sketchData obj, and a closure variable, layers that will keep track of each layer that passes the test—the result would be the array, [ 4, 6 ]!

By the way, rabbits are actually a recursive animal type. If you wonder why, it’s because they create droppings that can be recycled and ‘fed’ back to them in the form of vegetables (nourished by the droppings). It’s one reason why I am obsessed with them (also gardening but more on that later).

Thanks for reading!

![Morandi Rabbit](/morandi.jpg "Morandi Rabbit")

Hannah Manfredi, Morandi Rabbit, 2020, Pastel, graphite, colored pencil on paper, 17X22"