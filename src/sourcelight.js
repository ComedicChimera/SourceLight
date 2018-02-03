function define(name, obj) {
  SourceLight.mappings[name] = obj;
}

function fetch(name) {
  if(!SourceLight.mappings[name]) {
    throw name + " undefined.";
  }
  return SourceLight.mappings[name];
}

class SourceLight {
  static highlight(options) {
    function checkOptions(op) {
      if(!op.selector)
        throw "selector field undefined.";
      if(!op.mode)
        throw "mode field undefined.";
      if(!op.theme)
        throw "theme field undefined.";
    }

    function select(selector) {
        if(selector.startsWith('#')) {
          return [document.getElementById(selector.slice(1))];
        }
        else if(selector.startsWith('.')) {
          return document.getElementsByClassName(selector.slice(1))
        }
        else {
          return document.getElementsByTagName(selector);
        }
      }

    function cssDeserialize(theme) {
      function generateStyles(styleSerial, name, cssMap) {
        let css = "";
        let styleNames = Object.keys(styleSerial);
        let hasStyles = false;
        for(var elem in styleNames) {
          elem = styleNames[elem];
          if(typeof styleSerial[elem] === "string") {
            hasStyles = true;
            css += elem + ":" + styleSerial[elem] + ";";
          }
          else {
            let subMap = {};
            for(var item in elem) {
              generateStyles(styleSerial[elem], elem, subMap);
            }
            for(var subStyle in subMap) {
              cssMap[name + "." + subStyle] = subMap[subStyle];
            }
          }
        }
        if(hasStyles)
          cssMap[name] = css + "\"";
        return cssMap;
      }

      let tokenNames = Object.keys(theme);
      let cssMap = {};
      for(var item in tokenNames) {
        item = tokenNames[item];
        let styleSerial = theme[item];
        cssMap = generateStyles(styleSerial, item, cssMap);
      }
      return cssMap;
    }

    checkOptions(options);
    let elems = select(options.selector);
    let cssMap = cssDeserialize(fetch("sourcelight/theme/" + options.theme));
    for(var i = 0; i < elems.length; i++) {
      let item = elems[i];
      item.innerHTML = SourceLight.lex(item.innerHTML.replace('&emsp;', '\t').replace("&amp;", "&"),
      fetch("sourcelight/mode/" + options.mode), cssMap).replace("&", "&amp;").replace('\t', "&emsp;");
      item.setAttribute("style", cssMap['code.region']);
      item.classList.add('sourcelight-highlight-region');
    }
  }

  static lex(text, mode, theme) {
    let phrases = {}
    for(var item in mode) {
      let mCase = mode[item];
      let name = mCase.token, regex = mCase.match, sub = mCase.sub;
      let matches = text.match(mCase.single ? regex : new RegExp(regex, "g"));
      for(var match in matches) {
        match = matches[match];
        phrases[text.indexOf(match)] = [match, name, sub];
        text = text.replace(match, "\0".repeat(match.length), 1);
      }
    }
    let keys = Object.keys(phrases);
    let phraseList = [];
    for(var key in keys) {
      phraseList[key] = phrases[keys[key]];
    }
    for(var phrase in phraseList) {
      phrase = phraseList[phrase];
      text = text.replace("\0".repeat(phrase[0].length), SourceLight.generate(phrase, theme), 1);
    }
    return text;
  }

  static generate(p, theme) {
    if(p[2]) {
      p[0] = SourceLight.lex(p[0], p[2], theme);
    }
    let className = "sourcelight-style-" + p[1].replace(".", "-");
    if(!Object.keys(theme).includes(p[1])) {
      let parents = p[1].split('.');
      let compositeName = parents[0];
      parents.shift();
      for(var item in parents) {
        item = parents[item];
        if(Object.keys(theme).includes(compositeName)) {
          return "<span style=\"" + theme[compositeName] + "\" class=\"" + className + "\">" + p[0] + "</span>";
        }
        compositeName += '.' + item;
      }
      return "<span class=\"sourcelight-undefined " + className + "\">" + p[0] + "</span>";
    }
    return "<span style=\"" + theme[p[1]] + "\" class=\"" + className + "\">" + p[0] + "</span>";
  }
}

SourceLight.mappings = {};
