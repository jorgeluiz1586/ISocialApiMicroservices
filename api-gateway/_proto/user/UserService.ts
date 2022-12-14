// Original file: _proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Count as _commons_Count, Count__Output as _commons_Count__Output } from '../commons/Count';
import type { CreateUserInput as _user_CreateUserInput, CreateUserInput__Output as _user_CreateUserInput__Output } from '../user/CreateUserInput';
import type { FindUsersPayload as _user_FindUsersPayload, FindUsersPayload__Output as _user_FindUsersPayload__Output } from '../user/FindUsersPayload';
import type { Id as _commons_Id, Id__Output as _commons_Id__Output } from '../commons/Id';
import type { Query as _commons_Query, Query__Output as _commons_Query__Output } from '../commons/Query';
import type { UpdateUserInput as _user_UpdateUserInput, UpdateUserInput__Output as _user_UpdateUserInput__Output } from '../user/UpdateUserInput';
import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';

export interface UserServiceClient extends grpc.Client {
  count(argument: _commons_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  count(argument: _commons_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  count(argument: _commons_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  count(argument: _commons_Query, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  count(argument: _commons_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  count(argument: _commons_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  count(argument: _commons_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  count(argument: _commons_Query, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  
  create(argument: _user_CreateUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_CreateUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_CreateUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_CreateUserInput, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_CreateUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_CreateUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_CreateUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_CreateUserInput, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  destroy(argument: _commons_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  destroy(argument: _commons_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  destroy(argument: _commons_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  destroy(argument: _commons_Query, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  destroy(argument: _commons_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  destroy(argument: _commons_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  destroy(argument: _commons_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  destroy(argument: _commons_Query, callback: grpc.requestCallback<_commons_Count__Output>): grpc.ClientUnaryCall;
  
  find(argument: _commons_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_FindUsersPayload__Output>): grpc.ClientUnaryCall;
  find(argument: _commons_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_FindUsersPayload__Output>): grpc.ClientUnaryCall;
  find(argument: _commons_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_user_FindUsersPayload__Output>): grpc.ClientUnaryCall;
  find(argument: _commons_Query, callback: grpc.requestCallback<_user_FindUsersPayload__Output>): grpc.ClientUnaryCall;
  find(argument: _commons_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_FindUsersPayload__Output>): grpc.ClientUnaryCall;
  find(argument: _commons_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_FindUsersPayload__Output>): grpc.ClientUnaryCall;
  find(argument: _commons_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_user_FindUsersPayload__Output>): grpc.ClientUnaryCall;
  find(argument: _commons_Query, callback: grpc.requestCallback<_user_FindUsersPayload__Output>): grpc.ClientUnaryCall;
  
  findById(argument: _commons_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findById(argument: _commons_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findById(argument: _commons_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findById(argument: _commons_Id, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findById(argument: _commons_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findById(argument: _commons_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findById(argument: _commons_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findById(argument: _commons_Id, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  findOne(argument: _commons_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _commons_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _commons_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _commons_Query, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _commons_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _commons_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _commons_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _commons_Query, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  update(argument: _user_UpdateUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UpdateUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UpdateUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UpdateUserInput, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UpdateUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UpdateUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UpdateUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UpdateUserInput, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  count: grpc.handleUnaryCall<_commons_Query__Output, _commons_Count>;
  
  create: grpc.handleUnaryCall<_user_CreateUserInput__Output, _user_User>;
  
  destroy: grpc.handleUnaryCall<_commons_Query__Output, _commons_Count>;
  
  find: grpc.handleUnaryCall<_commons_Query__Output, _user_FindUsersPayload>;
  
  findById: grpc.handleUnaryCall<_commons_Id__Output, _user_User>;
  
  findOne: grpc.handleUnaryCall<_commons_Query__Output, _user_User>;
  
  update: grpc.handleUnaryCall<_user_UpdateUserInput__Output, _user_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  count: MethodDefinition<_commons_Query, _commons_Count, _commons_Query__Output, _commons_Count__Output>
  create: MethodDefinition<_user_CreateUserInput, _user_User, _user_CreateUserInput__Output, _user_User__Output>
  destroy: MethodDefinition<_commons_Query, _commons_Count, _commons_Query__Output, _commons_Count__Output>
  find: MethodDefinition<_commons_Query, _user_FindUsersPayload, _commons_Query__Output, _user_FindUsersPayload__Output>
  findById: MethodDefinition<_commons_Id, _user_User, _commons_Id__Output, _user_User__Output>
  findOne: MethodDefinition<_commons_Query, _user_User, _commons_Query__Output, _user_User__Output>
  update: MethodDefinition<_user_UpdateUserInput, _user_User, _user_UpdateUserInput__Output, _user_User__Output>
}
