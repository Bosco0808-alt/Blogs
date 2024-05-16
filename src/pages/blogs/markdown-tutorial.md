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

## Basic Markdown Syntax

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

MarkDown allows you to create links by the `[link-name](url)` syntax

#### Example:

```md
[This is a link](#)
```

> `#` creates a link that does nothing, I believe you can also use `javascript:void(0)`

#### Output:

[This is a link](#)

### formatted text

#### Italic text
To write *italic* text in markdown, you can wrap text in a single ```_``` or ```*```

##### Example:

```md
*This is italic text*

_This is also italic text_
```

##### Output:

*This is italic text*

_This is also italic text_

#### Bold  text

To write **Bold** text using markdown, you can wrap text in **Double** ```_``` or ```*```

##### Example

```md
**This is bold text**

__This is also bold text__
```

##### Output

**This is bold text**

__This is also bold text__

> You can also write ***Both italic and bold*** text by wrapping text in triple ```_``` or ```*```
>
> ###### Example: 
> ```
> ***This is Both italic and bold***
>
> ___This is Both italic and bold too___
> ```
> ###### Output:
>
> ***This is Both italic and bold***
>
> ___This is Both italic and bold too___

### Blockquotes

Blockquotes can be defined using ```>``` before each line

#### Example
```md
> This is a blockquote
> > This is a nested blockquote
```

#### Output
> This is a blockquote
> > This is a nested blockquote

> Note: You can nest as many blockquotes as You like

### Raw text

You can use raw text to handle
- markdown specific symbols
- html specific tags
- html entities
- syntax highlighting

Raw text can be inline or multi-line

#### Example
```md
    ```This is inline raw text```
    ```js
    const a = "b"
    // This is highlighted javacript syntax 
    // I have to make a tab in front because my markdown engine forces me to do so
    ```
```

#### Output

```This is inline raw text```
```js
const a = "b"
// This is highlighted javacript syntax 
// I have to make a tab in front because my markdown engine forces me to do so
```


## Not fully supported/standardized syntax

### Raw html

You can write raw html directly in markdown in some variations(such as the github flavor)

#### Example

```md
<h1>This is an alternative to the markdown <code>"#"</code> Syntax</h1>
<p>This is a paragraph too</p>
```

#### Output

<h1>This is an alternative to the markdown <code>"#"</code> Syntax</h1>
<p>This is a paragraph too</p>

> The output could be just raw html if you are reading this blog in another markdown engine.

The output is identical to:
```md
# This is an alternative to the markdown ```"#"``` Syntax

This is a paragraph too
```

However

- It is not as clean as the markdown syntax
- It is not fully supported

so try to avoid markdown like this(unless you are trying to render svg graphics, images and other html specific stuff)

## The end

That's it! Great job! You just learned Astro! Congratulations! 🎉🎉🎉
