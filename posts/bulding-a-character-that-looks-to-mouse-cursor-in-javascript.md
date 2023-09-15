---
title: "Building a Character That Looks to Mouse Cursor in JavaScript"
excerpt: "We are going to build a character that always looks at the mouse cursor everywhere it goes!"
image: "looking-guy-cover.jpg"
date: "2023-9-1"
isFeatured: true
---

In this tutorial, we will create a character whose eyes follow the mouse cursor, giving the illusion that the character is actively tracking the cursor's movement. This effect is achieved by rotating the character's eyes in response to the position of the mouse.

## Algorithm

The most challenging aspect of this project lies in the algorithm. We will employ mathematical principles and trigonometry to calculate the precise degree of eye rotation needed to follow the cursor accurately.

![Rotation of eye regarding to mouse cursor algorithm](algorithm-1.png)

```js
export function getStaticProps(context) {
  const { postSlug } = context.params;
  const post = readPost(postSlug);

  return {
    props: { ...post },
  };
}
```
