// Original file: _proto/user.proto

import type { UserEdge as _user_UserEdge, UserEdge__Output as _user_UserEdge__Output } from '../user/UserEdge';
import type { PageInfo as _commons_PageInfo, PageInfo__Output as _commons_PageInfo__Output } from '../commons/PageInfo';

export interface FindUsersPayload {
  'edges'?: (_user_UserEdge)[];
  'pageInfo'?: (_commons_PageInfo | null);
}

export interface FindUsersPayload__Output {
  'edges': (_user_UserEdge__Output)[];
  'pageInfo': (_commons_PageInfo__Output | null);
}
