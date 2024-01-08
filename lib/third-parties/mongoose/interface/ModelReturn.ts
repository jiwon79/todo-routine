import {
  HydratedDocument,
  InferSchemaType,
  Model,
  ObtainSchemaGeneric,
  Schema,
} from 'mongoose';

export type ModelReturn<TSchema extends Schema = never> = Model<
  InferSchemaType<TSchema>,
  ObtainSchemaGeneric<TSchema, 'TQueryHelpers'>,
  ObtainSchemaGeneric<TSchema, 'TInstanceMethods'>,
  ObtainSchemaGeneric<TSchema, 'TVirtuals'>,
  HydratedDocument<
    InferSchemaType<TSchema>,
    ObtainSchemaGeneric<TSchema, 'TVirtuals'> &
      ObtainSchemaGeneric<TSchema, 'TInstanceMethods'>,
    ObtainSchemaGeneric<TSchema, 'TQueryHelpers'>
  >,
  TSchema
> &
  ObtainSchemaGeneric<TSchema, 'TStaticMethods'>;
