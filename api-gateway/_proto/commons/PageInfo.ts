// Original file: _proto/commons.proto


export interface PageInfo {
  'startCursor'?: (string);
  'endCursor'?: (string);
  'hasNextPage'?: (boolean);
  'hasPreviousPage'?: (boolean);
}

export interface PageInfo__Output {
  'startCursor': (string);
  'endCursor': (string);
  'hasNextPage': (boolean);
  'hasPreviousPage': (boolean);
}
