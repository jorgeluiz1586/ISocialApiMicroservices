// Original file: _proto/user.proto

import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';

export interface UserEdge {
  'node'?: (_user_User | null);
  'cursor'?: (string);
}

export interface UserEdge__Output {
  'node': (_user_User__Output | null);
  'cursor': (string);
}
