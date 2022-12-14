// Original file: _proto/commons.proto


export interface Query {
  'select'?: (string)[];
  'where'?: (string);
  'orderBy'?: (string)[];
  'limit'?: (number);
  'before'?: (string);
  'after'?: (string);
}

export interface Query__Output {
  'select': (string)[];
  'where': (string);
  'orderBy': (string)[];
  'limit': (number);
  'before': (string);
  'after': (string);
}
