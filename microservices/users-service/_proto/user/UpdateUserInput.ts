// Original file: _proto/user.proto

import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';

export interface UpdateUserInput {
  'id'?: (string);
  'data'?: (_user_User | null);
}

export interface UpdateUserInput__Output {
  'id': (string);
  'data': (_user_User__Output | null);
}
