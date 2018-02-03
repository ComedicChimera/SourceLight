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
    match: /\b(int|str|char|float|bool|byte|list|dict)\b/,
    single: true
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
    token: 'keyword.control',
    match: /\b(if|elif|else|goto|do|for|when|switch|case|def|break|continue|return|yield)\b/
  },
  {
    token: 'storage.modifier',
    match: /\b(final|abstract|private|protected|sealed|volatile|global|local|passive|active)\b/
  },
]);
