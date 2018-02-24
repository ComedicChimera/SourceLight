# SourceLight.js
**SourceLight.js** is a simple, multipurpose syntax highlighter written in JavaScript, conforming with the [ECMAScript 6](https://www.ecma-international.org/ecma-262/6.0/) standard.  It is also completely dependency free, easy to install, customizable, and portable.

## Table of Contents
 - [Introduction](#intro)
 - [Installation](#install)
 - [Usage](#usage)
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
    <script src='plugins/SourceLight/src/sourcelight.js'></script>
  </head>
  <body>
  </body>
</html>
```

## Usage <a name="usage">
To enable SourceLight.js on a page, simply a the following `script` tag after
your code area.

``` html
<code>(function() {
&emsp;console.log("Hello!");
});
</code>
<script>
  SourceLight.highlight({
    selector: 'code',
  });
</script>
```
After writing the following, you should see that the code becomes wrapped
in a beige-colored box.  However, there is no actually highlighting on the text
itself.  This is because we only specified a **selector** or what regions
we wanted to be highlighted. 

#### Modes
To specify a language, we will need to do
2 things.

 1. **Include the Mode**

    SourceLight.js describes all custom highlighters as modes. We will need
    to include the JavaScript mode in order to specify enable that kind of
    highlighting.  You do this be adding the following script to your
    head tag.

    ``` html
    <script src='plugins/SourceLight/lib/mode/javascript.js'></script>
    ```

    We have now included the JavaScript mode source.  Now we must tell
    SourceLight.js to use it.

 2. **Specify the Mode**

    All we need to do to instruct SourceLight.js to highlight using the
    specified mode.  This is done by revising your SourceLight.js
    call to the following.

    ``` js
    SourceLight.highlight({
      selector: 'code',
      mode: 'javascript'
    });
    ```

    You should now see that the code we wrote earlier is highlighted.  That is
    it.

#### Themes

You can also change the theme.  This is done in the same manner as setting the mode,
but you set the theme modifier, instead of the mode modifier.  Here is an example.

``` html
<!doctype html>

<html lang='en'>
  <head>
    <title>SourceLight Test</title>
    <meta charset='utf-8'/>
    <script src='plugins/SourceLight/src/sourcelight.js'></script>
    <script src='plugins/SourceLight/themes/github.js'></script>
    <script src='plugins/SourceLight/lib/mode/javascript.js'></script>
  </head>
  <body>
    <code>(function() {
    &emsp;console.log("Hello!");
    });
    </code>
    <script>
      SourceLight.highlight({
        selector: 'code',
        mode: 'javascript',
        theme: 'github'
      });
    </script>
  </body>
</html>
```

We now have JavaScript that is highlighted in the Github theme.

#### Selectors

SourceLight uses 3 selector types.  It can select by id, class, or by
tag name.

 - **By Tag**

    Simply use the raw tag name ie. `code` or `pre`.

 - **By Class**

   This is done by add the `.` prefix before the class name in the
   selector eg. `.myClass`.

 - **By Id**

   This is accomplished just like selecting by class, except you replace the
   `.` with a `#` like so: `#myID`.
