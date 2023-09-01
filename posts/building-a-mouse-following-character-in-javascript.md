---
title: "Building a Mouse-Following Character in JavaScript"
excerpt: "We are going to build a character that looks at the mouse everywhere it goes!"
image: "looking-guy-cover.jpg"
date: "2023-9-1"
isFeatured: true
---

Content is ipsum dolor\n\n consectetur adipisicing elit. Consequatur, ex. Ullam repudiandae id alias nihil enim modi commodi, voluptatum iusto ipsum atque quae et debitis. Dolore laborum quasi ratione. The end.

## Wow it's a title

Consequatur, ex. Ullam repudiandae id alias nihil enim modi commodi, voluptatum iusto ipsum atque quae et debitis. Dolore laborum quasi ratione. The end.

```js
export function getStaticProps(context) {
  const { postSlug } = context.params;
  const post = readPost(postSlug);

  return {
    props: { ...post },
  };
}
```
