---
path: /<%- content_name_kebab %>/item
published: true
date: 2020-12-12
description: ''
keywords: foo, bar
displayPageTitle: true
images:
    - image: ./photos/00.jpg
---

import { Container, ImageGallery } from 'components';

<Container>

Some info here.

<ImageGallery
    images={props.pageContext.frontmatter.images}
    marginTop="3rem"
    marginBottom="3rem"
/>

</Container>
