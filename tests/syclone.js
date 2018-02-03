define('sourcelight/mode/syclone', [
  {
    token: 'constant.language',
    match: /true|false/
  },
  {
    token: 'string.single',
    match: /\'[^\']*\'/
  },
  {
    token: 'string.double',
    match: /\"[^\"]*\"/
  },
  {
    token: 'storage.type',
    match: /\b(int|str|char|float|bool|byte|list|dict)\b/
  },
  {
    token: 'constant.numeric',
    match: /\b(\d+(\.\d+)*|0x[A-F0-9]+)\b/
  },
  {
    token: 'comment',
    match: /\/\/[^\n]*|\/\*.*\*\//
  },
  {
    token: 'function',
    match: /(func|async)\s+[^\(]+\(/,
    sub: [
      {
        token: 'keyword.other',
        match: /(func|async)/
      },
      {
        token: 'storage.modifier',
        match: /\b(final|abstract|private|protected|sealed|volatile|global|local|passive|active)\b/
      },
      {
        token: 'name',
        match: /[a-zA-Z_]\w*\(/,
        sub: [
          {
            token: 'entity.name.function',
            match: /[a-zA-Z_]\w*/
          }
        ]
      }
    ]
  },
  {
    token: 'storage.modifier',
    match: /\b(final|abstract|private|protected|sealed|volatile|global|local|passive|active)\b/
  },
  {
    token: 'keyword.control',
    match: /\b(if|elif|else|goto|do|for|when|switch|case|def|break|continue|return|yield)\b/
  },
  {
    token: 'keyword.other',
    match: /\b(func|include|use|async|struct|type|interface|await|lambda|value|delete|with|except|throw|constructor|in|new|module)\b/
  },
  {
    token: 'variable',
    match: /[&@\$][a-zA-Z_]\w*/
  }
]);
