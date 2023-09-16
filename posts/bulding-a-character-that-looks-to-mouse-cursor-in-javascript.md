---
title: "Building a Character That Looks to Mouse Cursor in JavaScript"
excerpt: "We are going to build a character that always looks at the mouse cursor everywhere it goes!"
image: "looking-guy-cover.jpg"
date: "2023-9-1"
isFeatured: true
---

In this tutorial, we will create a character whose eyes follow the mouse cursor, giving the illusion that the character is actively tracking the cursor's movement. This effect is achieved by rotating the character's eyes in response to the position of the mouse.

You can take a look at
[the final project](https://looking-guy.netlify.app/)
to gain a clear understanding of our ultimate goal.

## Algorithm

The most challenging aspect of this project lies in the algorithm. We will employ mathematical principles and trigonometry to calculate the precise degree of eye rotation needed to follow the cursor accurately.

![Rotation of eye regarding to mouse cursor algorithm](looking-guy-post-1.jpg)

As illustrated in the image, initially, the eye is oriented in a specific direction. Our goal is to modify its orientation to align with the desired direction. To accomplish this, we will calculate the angle and then adjust the eye's rotation accordingly to achieve the desired alignment.

![Rotation of eye regarding to mouse cursor algorithm](looking-guy-post-2.jpg)

```js
export function getStaticProps(context) {
  const { postSlug } = context.params;
  const post = readPost(postSlug);

  return {
    props: { ...post },
  };
}
```
