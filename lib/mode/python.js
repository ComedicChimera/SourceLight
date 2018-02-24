define('sourcelight/mode/python', [
  {
    token: 'constant.numeric',
    match: /-?(\d+(\.\d+)?([Jj]*|e(-?\d+)))/
  },
  {
    token: 'string.double',
    match: /\"(?:[^\"\\\']|\\.)*\"/
  },
  {
    token: 'string.double',
    match: /r?\'(?:[^\"\\\']|\\.)*\'/
  },
  {
    token: 'string.multiline',
    match: /\"\"\".*\"\"\"/m
  },
  {
    token: 'comment',
    match: /#.*/
  },
  {
    token: 'constant.language',
    match: /\b(True|False|None|NotImplemented|Ellipsis)\b/
  },
  {
    token: 'function',
    match: /\bdef +[^\(]+\(/,
    sub: [
      {
        token: 'keyword',
        match: /def/
      },
      {
        token: 'name',
        match: /\w+ *\(/,
        sub: [
          {
            token: 'entity.name.function',
            match: /\w+/
          }
        ]
      }
    ]
  },
  {
    token: 'class',
    match: /\bclass +\w+ *(\(.*\))?:/,
    sub: [
      {
        token: 'keyword',
        match: /class/
      },
      {
        token: 'name',
        match: /\w+ *(\(.*\))?:/,
        sub: [
          {
            token: 'entity.name.type',
            match: /\w+/
          }
        ]
      }
    ]
  },
  {
    token: 'keyword.control',
    match: /\b(if|else|elif|for|while)\b/
  },
  {
    token: 'keyword',
    match: /\b(def|class|in|return|yield|assert|break|continue|del|goto|raise|try|except|as|with|await|async|exec|pass|from|import|is|lambda|finally)\b/
  },
  {
    token: 'keyword.operator',
    match: /not|and|or/
  },
  {
    token: 'operator',
    match: /[+\-*/=<~!]/
  },
  {
    token: 'variable.language.self',
    match: /self/
  },
  {
    token: 'comment.special.decorator',
    match: /@\w+(\(s*\))?/
  },
  {
    token: 'support.function',
    match: /abs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super/
  },
  {
    token: 'support.function',
    match: /binfile|iter|property|tuple|bool|filter|len|range|type|bytearray|float|list|raw_input|unichr|callable|format|locals|reduce|unicode/
  },
  {
    token: 'support.function',
    match: /chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round/
  },
  {
    token: 'support.function',
    match: /__import__|complex|hash|min|set|apply|delattr|help|next|setattr|buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern/
  },
]);
