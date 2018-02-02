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
      let tokenNames = Object.keys(theme);
      let cssMap = {};
      for(var item in tokenNames) {
        item = tokenNames[item];
        let css = "";
        let styleSerial = theme[item];
        let styleNames = Object.keys(styleSerial);
        for(var elem in styleNames) {
          elem = styleNames[elem];
          css += elem + ":" + String(styleSerial[elem]) + ";";
        }
        cssMap[item] = css + "\"";
      }
      return cssMap;
    }

    checkOptions(options);
    let elems = select(options.selector);
    let cssMap = cssDeserialize(fetch("sourcelight/theme/" + options.theme));
    for(var i = 0; i < elems.length; i++) {
      let item = elems[i];
      item.innerHTML = SourceLight.lex(item.innerHTML, fetch("sourcelight/mode/" + options.mode), cssMap);
      item.setAttribute("style", cssMap['code.region']);
    }
  }

  static lex(text, mode, theme) {
    let phrases = {}
    for(var item in mode) {
      let mCase = mode[item];
      let name = mCase.token, regex = mCase.match, sub = mCase.sub;
      let matches = text.match(new RegExp(regex, "g"));
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
      p[0] = SourceLight.lex(p[0], p[2], theme, );
    }
    if(!Object.keys(theme).includes(p[1]))
      return "<span class=\"sourcelight-undefined\">" + p[0] + "</span>";
    return "<span style=\"" + theme[p[1]] + "\">" + p[0] + "</span>";
  }
}

SourceLight.mappings = {};
