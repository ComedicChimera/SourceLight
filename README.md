# SourceLight.js
**SourceLight.js** is a simple, multipurpose syntax highlighter written in JavaScript, conforming with the [ECMAScript 6](https://www.ecma-international.org/ecma-262/6.0/) standard.  It is also completely dependency free, easy to install, customizable, and portable.

## Table of Contents
 - [Introduction](#intro)
 - [Installation](#install)
 - [Usage](#usage)
 - [Custom Themes](#themes)
 - [Custom Modes](#modes)

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

## Custom Themes <a name='themes'>
So you have seen how to use SourceLight.  Now, let's begin to look at how you can customize it to your needs.

#### Defining a Theme
Creating a custom theme is simple.  They written as Javascript objects and structured like CSS.
You can declare a theme using the "define" function.

``` js
define('sourcelight/theme/my_theme_name', { /* theme content */ });
```

Once this function is called, your theme can then be accessed simply by the name provided at the end of the path.  In this case,
it can be used by the name `my_theme_name`.

#### Token Identifiers
A token represents a single, highlighted entity.
Each token is declared with a special name as specified by the mode of the language you are using.  
The names should look something like: `comment.singleline`.  The `.` represents a **sub-class delimiter**.
Essentially, it created a new subclass of the parent class or subclass.  In the case of `comment.singleline`, the
sub-class delimiter is creating a sub-class of the parent class, 'comment', called 'singleline'.  Since these are classes,
you would select them in the following manner.

``` js
comment: {
  singleline: {
      
  }
}
```

It is kind of like nesting css selectors. Now, you might find this example cumbersome, but lets say you need to highlight
3 tokens: `string.single`, `string.double` and `string.template`.  All you would need to do to select these is the
following:

``` js
string: {
  single: {
  
  },
  double: {
  
  },
  template: {
  
  }
}
```

It saves you from having to type the upper classes name(s) over and over again.

It is also possible to create sub-classes within sub-classes for example:

``` js
literal: {
  string: {
    single: {
  
    },
    double: {
  
    },
    template: {
  
    }
  },
  number: {
    float: {
    
    },
    integer: {
    
    }
  }
}
```

The code editor window always have the same constant selector to allow you to apply styles to it.
It's name is: ` `.

#### Styling
Styles in SourceLight work almost identically to CSS styles.  You simply write the CSS style as the key/name,
and the write the style's value as, well, its value.  **Make sure to wrap both the style name and value in quotes!**
This will prevent confusion between styles and sub-classes.

Let's style the example above:

``` js
literal: {
  string: {
    'color': 'red',
    single: {
    
    },
    double: {
  
    },
    template: {
      'font-style': 'italics'
    }
  },
  number: {
    float: {
      'font-weight': 'bold'
    },
    integer: {
    
    }
  }
}
```

And there we have it!  Now, let's clean it up.  Because styles **cascade** from their parent class downward,
you can simple remove all the blank styles as they will receive the styling of the parent class automatically.

``` js
literal: {
  string: {
    'color': 'red',
    template: {
      'font-style': 'italics'
    }
  },
  number: {
    float: {
      'font-weight': 'bold'
    }
  }
}
```

Finally, just remember that styles must belong to some class.  Generic styling should be done through the code window 
selector, and will not be applied if it is written up top.

## Custom Modes <a name='modes'>
 
