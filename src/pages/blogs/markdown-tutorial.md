---
layout: ../../layouts/Layout.astro
title: Markdown tutorial
date: 31/8/2023
---

# Markdown tutorial

Markdown is a very important thing to learn. Whether if you are into web development or not, you must touch markdown someday because:

- It is popular
- Github's readme file uses markdown
- Markdown can help you format text

I'm also using markdown to create this blog. So today I will help you learn markdown.

## How to write markdown

Create a .md file and you can start writing markdown.

In VSCode, you can preview markdown files by opening up th command pallete using ctrl + shift + p (or cmd + shift + p on mac). You can also drag them up to the side to view the file and the preview together.

## Markdown Syntax

### Headings

You can create headings using #. The more #s, the smaller the heading is.

> Note: the minimum size is 6 #s

#### Example:

```md
# heading 1

## heading 2

### heading 3

#### heading 4

##### heading 5

###### heading 6
```

#### Output:

# heading 1

## heading 2

### heading 3

#### heading 4

##### heading 5

###### heading 6

### Paragraphs

Paragraphs are super simple to write. Just write plain text on an empty line and It will be a paragraph.

> Note: A single paragraph cannot contain more than 2 line breaks in a row, or they will be considered multiple paragraphs.

#### Example:

```md
This is a paragraph.

This is also a paragraph.

a single pargraph cannot have

More than 2 line breaks in a row.

These lines are one single paragraph
even if they are on
multiple lines beacuse
they dont have more than 2 line breaks in a row.
```

#### Output:

This is a paragraph.

This is also a paragraph.

a single pargraph cannot have

More than 2 line breaks in a row.

These lines are one single paragraph
even if they are on
multiple lines beacuse
they dont have more than 2 line breaks in a row.

### Links
