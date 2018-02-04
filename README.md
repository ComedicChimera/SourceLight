# SourceLight.js
**SourceLight.js** is a simple, multipurpose syntax highlighter written in JavaScript, conforming with the [ECMAScript 6](https://www.ecma-international.org/ecma-262/6.0/) standard.  It is also completely dependency free, easy to install, customizable, and portable.

## Table of Contents
 - [Introduction](#intro)
 - [Installation](#install)
 - [Basic Usage](#usage)
 - Custom Themes
 - Custom Modes
 - How It Works

## Introduction <a name="intro">
If you have never used a syntax highlighter before, a **syntax highlight** is
program that is used to apply styles to specific pieces of code to make
that code more readable.  They also have the added benefit of making your
webpage look way cooler.

This is essentially what SourceLight.js is.  It is a syntax highlighter for
webpages.

#### Why Use a Syntax Highlighter
The advantage to using a highlighter is that it saves you a significant amount
of time. If you were to highlight manually, it could take forever, especially
on longer webpages.  It saves you from having to spend hours tediously
wrapping code in styled spans, and instead requires you to spend about 2 minutes
adding a highlighter and choosing a theme and mode.

*Note: If you are writing a custom highlighter, it might take a bit longer, but
still significantly shorter than doing it manually (in most cases).*

## Installation <a name="install">
SourceLight.js is relatively easy to install.  All you have to do is download it,
and link it into your page.  There are two version available for download:

 1. **[Development](https://raw.githubusercontent.com/ComedicChimera/SourceLight.js/master/src/sourcelight.js)**

    The fully expanded version.  A bit larger, but more human readable.

 2. **[Minified](https://raw.githubusercontent.com/ComedicChimera/SourceLight.js/master/src/sourcelight.min.js)**

    This version have been compressed and mangled using [Babel-Minify](https://github.com/babel/minify).  It is completely
    unreadable, but significantly smaller.

Once you have downloaded your desired version, you may now link it to your page.
Assuming you have a directory named plugins to hold SourceLight.js that may look
something like this:

``` html
<!doctype html>

<html lang='en'>
  <head>
    <title>SourceLight Test</title>
    <meta charset='utf-8'/>
    <script src='plugins/sourcelight/src/sourcelight.js'></script>
  </head>
  <body>
  </body>
</html>
```

## Basic Usage <a name="usage">
