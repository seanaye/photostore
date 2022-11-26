
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Photo
 * 
 */
export type Photo = {
  id: number
  previewUrl: string
  fullUrl: string
  rawUrl: string
}

/**
 * Model Purchase
 * 
 */
export type Purchase = {
  id: number
  emailId: number
  photoId: number
  date: Date
}

/**
 * Model Email
 * 
 */
export type Email = {
  id: number
  email: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Photos
 * const photos = await prisma.photo.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Photos
   * const photos = await prisma.photo.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<GlobalReject>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<GlobalReject>;

  /**
   * `prisma.email`: Exposes CRUD operations for the **Email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.email.findMany()
    * ```
    */
  get email(): Prisma.EmailDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.6.1
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Photo: 'Photo',
    Purchase: 'Purchase',
    Email: 'Email'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PhotoCountOutputType
   */


  export type PhotoCountOutputType = {
    purchases: number
  }

  export type PhotoCountOutputTypeSelect = {
    purchases?: boolean
  }

  export type PhotoCountOutputTypeGetPayload<S extends boolean | null | undefined | PhotoCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PhotoCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PhotoCountOutputTypeArgs)
    ? PhotoCountOutputType 
    : S extends { select: any } & (PhotoCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PhotoCountOutputType ? PhotoCountOutputType[P] : never
  } 
      : PhotoCountOutputType




  // Custom InputTypes

  /**
   * PhotoCountOutputType without action
   */
  export type PhotoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PhotoCountOutputType
     * 
    **/
    select?: PhotoCountOutputTypeSelect | null
  }



  /**
   * Count Type EmailCountOutputType
   */


  export type EmailCountOutputType = {
    purchases: number
  }

  export type EmailCountOutputTypeSelect = {
    purchases?: boolean
  }

  export type EmailCountOutputTypeGetPayload<S extends boolean | null | undefined | EmailCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EmailCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (EmailCountOutputTypeArgs)
    ? EmailCountOutputType 
    : S extends { select: any } & (EmailCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof EmailCountOutputType ? EmailCountOutputType[P] : never
  } 
      : EmailCountOutputType




  // Custom InputTypes

  /**
   * EmailCountOutputType without action
   */
  export type EmailCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EmailCountOutputType
     * 
    **/
    select?: EmailCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Photo
   */


  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    id: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    previewUrl: string | null
    fullUrl: string | null
    rawUrl: string | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    previewUrl: string | null
    fullUrl: string | null
    rawUrl: string | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    previewUrl: number
    fullUrl: number
    rawUrl: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    previewUrl?: true
    fullUrl?: true
    rawUrl?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    previewUrl?: true
    fullUrl?: true
    rawUrl?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    previewUrl?: true
    fullUrl?: true
    rawUrl?: true
    _all?: true
  }

  export type PhotoAggregateArgs = {
    /**
     * Filter which Photo to aggregate.
     * 
    **/
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs = {
    where?: PhotoWhereInput
    orderBy?: Enumerable<PhotoOrderByWithAggregationInput>
    by: Array<PhotoScalarFieldEnum>
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }


  export type PhotoGroupByOutputType = {
    id: number
    previewUrl: string
    fullUrl: string
    rawUrl: string
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect = {
    id?: boolean
    previewUrl?: boolean
    fullUrl?: boolean
    rawUrl?: boolean
    purchases?: boolean | PurchaseFindManyArgs
    _count?: boolean | PhotoCountOutputTypeArgs
  }


  export type PhotoInclude = {
    purchases?: boolean | PurchaseFindManyArgs
    _count?: boolean | PhotoCountOutputTypeArgs
  } 

  export type PhotoGetPayload<S extends boolean | null | undefined | PhotoArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Photo :
    S extends undefined ? never :
    S extends { include: any } & (PhotoArgs | PhotoFindManyArgs)
    ? Photo  & {
    [P in TrueKeys<S['include']>]:
        P extends 'purchases' ? Array < PurchaseGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? PhotoCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (PhotoArgs | PhotoFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'purchases' ? Array < PurchaseGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? PhotoCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Photo ? Photo[P] : never
  } 
      : Photo


  type PhotoCountArgs = Merge<
    Omit<PhotoFindManyArgs, 'select' | 'include'> & {
      select?: PhotoCountAggregateInputType | true
    }
  >

  export interface PhotoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhotoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PhotoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Photo'> extends True ? Prisma__PhotoClient<PhotoGetPayload<T>> : Prisma__PhotoClient<PhotoGetPayload<T> | null, null>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhotoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PhotoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Photo'> extends True ? Prisma__PhotoClient<PhotoGetPayload<T>> : Prisma__PhotoClient<PhotoGetPayload<T> | null, null>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PhotoFindManyArgs>(
      args?: SelectSubset<T, PhotoFindManyArgs>
    ): PrismaPromise<Array<PhotoGetPayload<T>>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
    **/
    create<T extends PhotoCreateArgs>(
      args: SelectSubset<T, PhotoCreateArgs>
    ): Prisma__PhotoClient<PhotoGetPayload<T>>

    /**
     * Create many Photos.
     *     @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     *     @example
     *     // Create many Photos
     *     const photo = await prisma.photo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhotoCreateManyArgs>(
      args?: SelectSubset<T, PhotoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
    **/
    delete<T extends PhotoDeleteArgs>(
      args: SelectSubset<T, PhotoDeleteArgs>
    ): Prisma__PhotoClient<PhotoGetPayload<T>>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhotoUpdateArgs>(
      args: SelectSubset<T, PhotoUpdateArgs>
    ): Prisma__PhotoClient<PhotoGetPayload<T>>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhotoDeleteManyArgs>(
      args?: SelectSubset<T, PhotoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhotoUpdateManyArgs>(
      args: SelectSubset<T, PhotoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
    **/
    upsert<T extends PhotoUpsertArgs>(
      args: SelectSubset<T, PhotoUpsertArgs>
    ): Prisma__PhotoClient<PhotoGetPayload<T>>

    /**
     * Find one Photo that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PhotoFindUniqueOrThrowArgs>
    ): Prisma__PhotoClient<PhotoGetPayload<T>>

    /**
     * Find the first Photo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PhotoFindFirstOrThrowArgs>
    ): Prisma__PhotoClient<PhotoGetPayload<T>>

    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PhotoClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    purchases<T extends PurchaseFindManyArgs= {}>(args?: Subset<T, PurchaseFindManyArgs>): PrismaPromise<Array<PurchaseGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Photo base type for findUnique actions
   */
  export type PhotoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * Filter, which Photo to fetch.
     * 
    **/
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo: findUnique
   */
  export interface PhotoFindUniqueArgs extends PhotoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Photo base type for findFirst actions
   */
  export type PhotoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * Filter, which Photo to fetch.
     * 
    **/
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     * 
    **/
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     * 
    **/
    distinct?: Enumerable<PhotoScalarFieldEnum>
  }

  /**
   * Photo: findFirst
   */
  export interface PhotoFindFirstArgs extends PhotoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * Filter, which Photos to fetch.
     * 
    **/
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     * 
    **/
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PhotoScalarFieldEnum>
  }


  /**
   * Photo create
   */
  export type PhotoCreateArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * The data needed to create a Photo.
     * 
    **/
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }


  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs = {
    /**
     * The data used to create many Photos.
     * 
    **/
    data: Enumerable<PhotoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Photo update
   */
  export type PhotoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * The data needed to update a Photo.
     * 
    **/
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     * 
    **/
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs = {
    /**
     * The data used to update Photos.
     * 
    **/
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     * 
    **/
    where?: PhotoWhereInput
  }


  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * The filter to search for the Photo to update in case it exists.
     * 
    **/
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     * 
    **/
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }


  /**
   * Photo delete
   */
  export type PhotoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * Filter which Photo to delete.
     * 
    **/
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs = {
    /**
     * Filter which Photos to delete
     * 
    **/
    where?: PhotoWhereInput
  }


  /**
   * Photo: findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs = PhotoFindUniqueArgsBase
      

  /**
   * Photo: findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs = PhotoFindFirstArgsBase
      

  /**
   * Photo without action
   */
  export type PhotoArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
  }



  /**
   * Model Purchase
   */


  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    id: number | null
    emailId: number | null
    photoId: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id: number | null
    emailId: number | null
    photoId: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: number | null
    emailId: number | null
    photoId: number | null
    date: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: number | null
    emailId: number | null
    photoId: number | null
    date: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    emailId: number
    photoId: number
    date: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id?: true
    emailId?: true
    photoId?: true
  }

  export type PurchaseSumAggregateInputType = {
    id?: true
    emailId?: true
    photoId?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    emailId?: true
    photoId?: true
    date?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    emailId?: true
    photoId?: true
    date?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    emailId?: true
    photoId?: true
    date?: true
    _all?: true
  }

  export type PurchaseAggregateArgs = {
    /**
     * Filter which Purchase to aggregate.
     * 
    **/
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     * 
    **/
    orderBy?: Enumerable<PurchaseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs = {
    where?: PurchaseWhereInput
    orderBy?: Enumerable<PurchaseOrderByWithAggregationInput>
    by: Array<PurchaseScalarFieldEnum>
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }


  export type PurchaseGroupByOutputType = {
    id: number
    emailId: number
    photoId: number
    date: Date
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect = {
    id?: boolean
    emailId?: boolean
    email?: boolean | EmailArgs
    photoId?: boolean
    photo?: boolean | PhotoArgs
    date?: boolean
  }


  export type PurchaseInclude = {
    email?: boolean | EmailArgs
    photo?: boolean | PhotoArgs
  } 

  export type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Purchase :
    S extends undefined ? never :
    S extends { include: any } & (PurchaseArgs | PurchaseFindManyArgs)
    ? Purchase  & {
    [P in TrueKeys<S['include']>]:
        P extends 'email' ? EmailGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'photo' ? PhotoGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (PurchaseArgs | PurchaseFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'email' ? EmailGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'photo' ? PhotoGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Purchase ? Purchase[P] : never
  } 
      : Purchase


  type PurchaseCountArgs = Merge<
    Omit<PurchaseFindManyArgs, 'select' | 'include'> & {
      select?: PurchaseCountAggregateInputType | true
    }
  >

  export interface PurchaseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PurchaseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PurchaseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Purchase'> extends True ? Prisma__PurchaseClient<PurchaseGetPayload<T>> : Prisma__PurchaseClient<PurchaseGetPayload<T> | null, null>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PurchaseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PurchaseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Purchase'> extends True ? Prisma__PurchaseClient<PurchaseGetPayload<T>> : Prisma__PurchaseClient<PurchaseGetPayload<T> | null, null>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PurchaseFindManyArgs>(
      args?: SelectSubset<T, PurchaseFindManyArgs>
    ): PrismaPromise<Array<PurchaseGetPayload<T>>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
    **/
    create<T extends PurchaseCreateArgs>(
      args: SelectSubset<T, PurchaseCreateArgs>
    ): Prisma__PurchaseClient<PurchaseGetPayload<T>>

    /**
     * Create many Purchases.
     *     @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     *     @example
     *     // Create many Purchases
     *     const purchase = await prisma.purchase.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PurchaseCreateManyArgs>(
      args?: SelectSubset<T, PurchaseCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
    **/
    delete<T extends PurchaseDeleteArgs>(
      args: SelectSubset<T, PurchaseDeleteArgs>
    ): Prisma__PurchaseClient<PurchaseGetPayload<T>>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PurchaseUpdateArgs>(
      args: SelectSubset<T, PurchaseUpdateArgs>
    ): Prisma__PurchaseClient<PurchaseGetPayload<T>>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PurchaseDeleteManyArgs>(
      args?: SelectSubset<T, PurchaseDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PurchaseUpdateManyArgs>(
      args: SelectSubset<T, PurchaseUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
    **/
    upsert<T extends PurchaseUpsertArgs>(
      args: SelectSubset<T, PurchaseUpsertArgs>
    ): Prisma__PurchaseClient<PurchaseGetPayload<T>>

    /**
     * Find one Purchase that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PurchaseFindUniqueOrThrowArgs>
    ): Prisma__PurchaseClient<PurchaseGetPayload<T>>

    /**
     * Find the first Purchase that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs>
    ): Prisma__PurchaseClient<PurchaseGetPayload<T>>

    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PurchaseClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    email<T extends EmailArgs= {}>(args?: Subset<T, EmailArgs>): Prisma__EmailClient<EmailGetPayload<T> | Null>;

    photo<T extends PhotoArgs= {}>(args?: Subset<T, PhotoArgs>): Prisma__PhotoClient<PhotoGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Purchase base type for findUnique actions
   */
  export type PurchaseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * Filter, which Purchase to fetch.
     * 
    **/
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase: findUnique
   */
  export interface PurchaseFindUniqueArgs extends PurchaseFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Purchase base type for findFirst actions
   */
  export type PurchaseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * Filter, which Purchase to fetch.
     * 
    **/
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     * 
    **/
    orderBy?: Enumerable<PurchaseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     * 
    **/
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     * 
    **/
    distinct?: Enumerable<PurchaseScalarFieldEnum>
  }

  /**
   * Purchase: findFirst
   */
  export interface PurchaseFindFirstArgs extends PurchaseFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * Filter, which Purchases to fetch.
     * 
    **/
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     * 
    **/
    orderBy?: Enumerable<PurchaseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     * 
    **/
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PurchaseScalarFieldEnum>
  }


  /**
   * Purchase create
   */
  export type PurchaseCreateArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * The data needed to create a Purchase.
     * 
    **/
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }


  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs = {
    /**
     * The data used to create many Purchases.
     * 
    **/
    data: Enumerable<PurchaseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * The data needed to update a Purchase.
     * 
    **/
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     * 
    **/
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs = {
    /**
     * The data used to update Purchases.
     * 
    **/
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     * 
    **/
    where?: PurchaseWhereInput
  }


  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     * 
    **/
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     * 
    **/
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }


  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * Filter which Purchase to delete.
     * 
    **/
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs = {
    /**
     * Filter which Purchases to delete
     * 
    **/
    where?: PurchaseWhereInput
  }


  /**
   * Purchase: findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs = PurchaseFindUniqueArgsBase
      

  /**
   * Purchase: findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs = PurchaseFindFirstArgsBase
      

  /**
   * Purchase without action
   */
  export type PurchaseArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
  }



  /**
   * Model Email
   */


  export type AggregateEmail = {
    _count: EmailCountAggregateOutputType | null
    _avg: EmailAvgAggregateOutputType | null
    _sum: EmailSumAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  export type EmailAvgAggregateOutputType = {
    id: number | null
  }

  export type EmailSumAggregateOutputType = {
    id: number | null
  }

  export type EmailMinAggregateOutputType = {
    id: number | null
    email: string | null
  }

  export type EmailMaxAggregateOutputType = {
    id: number | null
    email: string | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    email: number
    _all: number
  }


  export type EmailAvgAggregateInputType = {
    id?: true
  }

  export type EmailSumAggregateInputType = {
    id?: true
  }

  export type EmailMinAggregateInputType = {
    id?: true
    email?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    email?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    email?: true
    _all?: true
  }

  export type EmailAggregateArgs = {
    /**
     * Filter which Email to aggregate.
     * 
    **/
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     * 
    **/
    orderBy?: Enumerable<EmailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emails
    **/
    _count?: true | EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMaxAggregateInputType
  }

  export type GetEmailAggregateType<T extends EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail[P]>
      : GetScalarType<T[P], AggregateEmail[P]>
  }




  export type EmailGroupByArgs = {
    where?: EmailWhereInput
    orderBy?: Enumerable<EmailOrderByWithAggregationInput>
    by: Array<EmailScalarFieldEnum>
    having?: EmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCountAggregateInputType | true
    _avg?: EmailAvgAggregateInputType
    _sum?: EmailSumAggregateInputType
    _min?: EmailMinAggregateInputType
    _max?: EmailMaxAggregateInputType
  }


  export type EmailGroupByOutputType = {
    id: number
    email: string
    _count: EmailCountAggregateOutputType | null
    _avg: EmailAvgAggregateOutputType | null
    _sum: EmailSumAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  type GetEmailGroupByPayload<T extends EmailGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailGroupByOutputType[P]>
            : GetScalarType<T[P], EmailGroupByOutputType[P]>
        }
      >
    >


  export type EmailSelect = {
    id?: boolean
    email?: boolean
    purchases?: boolean | PurchaseFindManyArgs
    _count?: boolean | EmailCountOutputTypeArgs
  }


  export type EmailInclude = {
    purchases?: boolean | PurchaseFindManyArgs
    _count?: boolean | EmailCountOutputTypeArgs
  } 

  export type EmailGetPayload<S extends boolean | null | undefined | EmailArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Email :
    S extends undefined ? never :
    S extends { include: any } & (EmailArgs | EmailFindManyArgs)
    ? Email  & {
    [P in TrueKeys<S['include']>]:
        P extends 'purchases' ? Array < PurchaseGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? EmailCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (EmailArgs | EmailFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'purchases' ? Array < PurchaseGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? EmailCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Email ? Email[P] : never
  } 
      : Email


  type EmailCountArgs = Merge<
    Omit<EmailFindManyArgs, 'select' | 'include'> & {
      select?: EmailCountAggregateInputType | true
    }
  >

  export interface EmailDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Email that matches the filter.
     * @param {EmailFindUniqueArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmailFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmailFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Email'> extends True ? Prisma__EmailClient<EmailGetPayload<T>> : Prisma__EmailClient<EmailGetPayload<T> | null, null>

    /**
     * Find the first Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmailFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmailFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Email'> extends True ? Prisma__EmailClient<EmailGetPayload<T>> : Prisma__EmailClient<EmailGetPayload<T> | null, null>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.email.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWithIdOnly = await prisma.email.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmailFindManyArgs>(
      args?: SelectSubset<T, EmailFindManyArgs>
    ): PrismaPromise<Array<EmailGetPayload<T>>>

    /**
     * Create a Email.
     * @param {EmailCreateArgs} args - Arguments to create a Email.
     * @example
     * // Create one Email
     * const Email = await prisma.email.create({
     *   data: {
     *     // ... data to create a Email
     *   }
     * })
     * 
    **/
    create<T extends EmailCreateArgs>(
      args: SelectSubset<T, EmailCreateArgs>
    ): Prisma__EmailClient<EmailGetPayload<T>>

    /**
     * Create many Emails.
     *     @param {EmailCreateManyArgs} args - Arguments to create many Emails.
     *     @example
     *     // Create many Emails
     *     const email = await prisma.email.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmailCreateManyArgs>(
      args?: SelectSubset<T, EmailCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Email.
     * @param {EmailDeleteArgs} args - Arguments to delete one Email.
     * @example
     * // Delete one Email
     * const Email = await prisma.email.delete({
     *   where: {
     *     // ... filter to delete one Email
     *   }
     * })
     * 
    **/
    delete<T extends EmailDeleteArgs>(
      args: SelectSubset<T, EmailDeleteArgs>
    ): Prisma__EmailClient<EmailGetPayload<T>>

    /**
     * Update one Email.
     * @param {EmailUpdateArgs} args - Arguments to update one Email.
     * @example
     * // Update one Email
     * const email = await prisma.email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmailUpdateArgs>(
      args: SelectSubset<T, EmailUpdateArgs>
    ): Prisma__EmailClient<EmailGetPayload<T>>

    /**
     * Delete zero or more Emails.
     * @param {EmailDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmailDeleteManyArgs>(
      args?: SelectSubset<T, EmailDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmailUpdateManyArgs>(
      args: SelectSubset<T, EmailUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Email.
     * @param {EmailUpsertArgs} args - Arguments to update or create a Email.
     * @example
     * // Update or create a Email
     * const email = await prisma.email.upsert({
     *   create: {
     *     // ... data to create a Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email we want to update
     *   }
     * })
    **/
    upsert<T extends EmailUpsertArgs>(
      args: SelectSubset<T, EmailUpsertArgs>
    ): Prisma__EmailClient<EmailGetPayload<T>>

    /**
     * Find one Email that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {EmailFindUniqueOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmailFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EmailFindUniqueOrThrowArgs>
    ): Prisma__EmailClient<EmailGetPayload<T>>

    /**
     * Find the first Email that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EmailFindFirstOrThrowArgs>
    ): Prisma__EmailClient<EmailGetPayload<T>>

    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.email.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends EmailCountArgs>(
      args?: Subset<T, EmailCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailAggregateArgs>(args: Subset<T, EmailAggregateArgs>): PrismaPromise<GetEmailAggregateType<T>>

    /**
     * Group by Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailGroupByArgs['orderBy'] }
        : { orderBy?: EmailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmailClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    purchases<T extends PurchaseFindManyArgs= {}>(args?: Subset<T, PurchaseFindManyArgs>): PrismaPromise<Array<PurchaseGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Email base type for findUnique actions
   */
  export type EmailFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * Filter, which Email to fetch.
     * 
    **/
    where: EmailWhereUniqueInput
  }

  /**
   * Email: findUnique
   */
  export interface EmailFindUniqueArgs extends EmailFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Email base type for findFirst actions
   */
  export type EmailFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * Filter, which Email to fetch.
     * 
    **/
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     * 
    **/
    orderBy?: Enumerable<EmailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     * 
    **/
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     * 
    **/
    distinct?: Enumerable<EmailScalarFieldEnum>
  }

  /**
   * Email: findFirst
   */
  export interface EmailFindFirstArgs extends EmailFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Email findMany
   */
  export type EmailFindManyArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * Filter, which Emails to fetch.
     * 
    **/
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     * 
    **/
    orderBy?: Enumerable<EmailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emails.
     * 
    **/
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EmailScalarFieldEnum>
  }


  /**
   * Email create
   */
  export type EmailCreateArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * The data needed to create a Email.
     * 
    **/
    data: XOR<EmailCreateInput, EmailUncheckedCreateInput>
  }


  /**
   * Email createMany
   */
  export type EmailCreateManyArgs = {
    /**
     * The data used to create many Emails.
     * 
    **/
    data: Enumerable<EmailCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Email update
   */
  export type EmailUpdateArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * The data needed to update a Email.
     * 
    **/
    data: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
    /**
     * Choose, which Email to update.
     * 
    **/
    where: EmailWhereUniqueInput
  }


  /**
   * Email updateMany
   */
  export type EmailUpdateManyArgs = {
    /**
     * The data used to update Emails.
     * 
    **/
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     * 
    **/
    where?: EmailWhereInput
  }


  /**
   * Email upsert
   */
  export type EmailUpsertArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * The filter to search for the Email to update in case it exists.
     * 
    **/
    where: EmailWhereUniqueInput
    /**
     * In case the Email found by the `where` argument doesn't exist, create a new Email with this data.
     * 
    **/
    create: XOR<EmailCreateInput, EmailUncheckedCreateInput>
    /**
     * In case the Email was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
  }


  /**
   * Email delete
   */
  export type EmailDeleteArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * Filter which Email to delete.
     * 
    **/
    where: EmailWhereUniqueInput
  }


  /**
   * Email deleteMany
   */
  export type EmailDeleteManyArgs = {
    /**
     * Filter which Emails to delete
     * 
    **/
    where?: EmailWhereInput
  }


  /**
   * Email: findUniqueOrThrow
   */
  export type EmailFindUniqueOrThrowArgs = EmailFindUniqueArgsBase
      

  /**
   * Email: findFirstOrThrow
   */
  export type EmailFindFirstOrThrowArgs = EmailFindFirstArgsBase
      

  /**
   * Email without action
   */
  export type EmailArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const EmailScalarFieldEnum: {
    id: 'id',
    email: 'email'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    previewUrl: 'previewUrl',
    fullUrl: 'fullUrl',
    rawUrl: 'rawUrl'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    emailId: 'emailId',
    photoId: 'photoId',
    date: 'date'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type PhotoWhereInput = {
    AND?: Enumerable<PhotoWhereInput>
    OR?: Enumerable<PhotoWhereInput>
    NOT?: Enumerable<PhotoWhereInput>
    id?: IntFilter | number
    previewUrl?: StringFilter | string
    fullUrl?: StringFilter | string
    rawUrl?: StringFilter | string
    purchases?: PurchaseListRelationFilter
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    previewUrl?: SortOrder
    fullUrl?: SortOrder
    rawUrl?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
  }

  export type PhotoWhereUniqueInput = {
    id?: number
  }

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    previewUrl?: SortOrder
    fullUrl?: SortOrder
    rawUrl?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PhotoScalarWhereWithAggregatesInput>
    OR?: Enumerable<PhotoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PhotoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    previewUrl?: StringWithAggregatesFilter | string
    fullUrl?: StringWithAggregatesFilter | string
    rawUrl?: StringWithAggregatesFilter | string
  }

  export type PurchaseWhereInput = {
    AND?: Enumerable<PurchaseWhereInput>
    OR?: Enumerable<PurchaseWhereInput>
    NOT?: Enumerable<PurchaseWhereInput>
    id?: IntFilter | number
    emailId?: IntFilter | number
    email?: XOR<EmailRelationFilter, EmailWhereInput>
    photoId?: IntFilter | number
    photo?: XOR<PhotoRelationFilter, PhotoWhereInput>
    date?: DateTimeFilter | Date | string
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    emailId?: SortOrder
    email?: EmailOrderByWithRelationInput
    photoId?: SortOrder
    photo?: PhotoOrderByWithRelationInput
    date?: SortOrder
  }

  export type PurchaseWhereUniqueInput = {
    id?: number
  }

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    emailId?: SortOrder
    photoId?: SortOrder
    date?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PurchaseScalarWhereWithAggregatesInput>
    OR?: Enumerable<PurchaseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PurchaseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    emailId?: IntWithAggregatesFilter | number
    photoId?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EmailWhereInput = {
    AND?: Enumerable<EmailWhereInput>
    OR?: Enumerable<EmailWhereInput>
    NOT?: Enumerable<EmailWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    purchases?: PurchaseListRelationFilter
  }

  export type EmailOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
  }

  export type EmailWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type EmailOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    _count?: EmailCountOrderByAggregateInput
    _avg?: EmailAvgOrderByAggregateInput
    _max?: EmailMaxOrderByAggregateInput
    _min?: EmailMinOrderByAggregateInput
    _sum?: EmailSumOrderByAggregateInput
  }

  export type EmailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmailScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmailScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmailScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
  }

  export type PhotoCreateInput = {
    previewUrl: string
    fullUrl: string
    rawUrl: string
    purchases?: PurchaseCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: number
    previewUrl: string
    fullUrl: string
    rawUrl: string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUpdateInput = {
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUncheckedUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoCreateManyInput = {
    id?: number
    previewUrl: string
    fullUrl: string
    rawUrl: string
  }

  export type PhotoUpdateManyMutationInput = {
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseCreateInput = {
    email: EmailCreateNestedOneWithoutPurchasesInput
    photo: PhotoCreateNestedOneWithoutPurchasesInput
    date?: Date | string
  }

  export type PurchaseUncheckedCreateInput = {
    id?: number
    emailId: number
    photoId: number
    date?: Date | string
  }

  export type PurchaseUpdateInput = {
    email?: EmailUpdateOneRequiredWithoutPurchasesNestedInput
    photo?: PhotoUpdateOneRequiredWithoutPurchasesNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    emailId?: IntFieldUpdateOperationsInput | number
    photoId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyInput = {
    id?: number
    emailId: number
    photoId: number
    date?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    emailId?: IntFieldUpdateOperationsInput | number
    photoId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateInput = {
    email: string
    purchases?: PurchaseCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateInput = {
    id?: number
    email: string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailCreateManyInput = {
    id?: number
    email: string
  }

  export type EmailUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    previewUrl?: SortOrder
    fullUrl?: SortOrder
    rawUrl?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    previewUrl?: SortOrder
    fullUrl?: SortOrder
    rawUrl?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    previewUrl?: SortOrder
    fullUrl?: SortOrder
    rawUrl?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EmailRelationFilter = {
    is?: EmailWhereInput
    isNot?: EmailWhereInput
  }

  export type PhotoRelationFilter = {
    is?: PhotoWhereInput
    isNot?: PhotoWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
    photoId?: SortOrder
    date?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
    photoId?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
    photoId?: SortOrder
    date?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
    photoId?: SortOrder
    date?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
    photoId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EmailCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type EmailAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type EmailMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type EmailSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PurchaseCreateNestedManyWithoutPhotoInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutPhotoInput>, Enumerable<PurchaseUncheckedCreateWithoutPhotoInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutPhotoInput>
    createMany?: PurchaseCreateManyPhotoInputEnvelope
    connect?: Enumerable<PurchaseWhereUniqueInput>
  }

  export type PurchaseUncheckedCreateNestedManyWithoutPhotoInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutPhotoInput>, Enumerable<PurchaseUncheckedCreateWithoutPhotoInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutPhotoInput>
    createMany?: PurchaseCreateManyPhotoInputEnvelope
    connect?: Enumerable<PurchaseWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PurchaseUpdateManyWithoutPhotoNestedInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutPhotoInput>, Enumerable<PurchaseUncheckedCreateWithoutPhotoInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutPhotoInput>
    upsert?: Enumerable<PurchaseUpsertWithWhereUniqueWithoutPhotoInput>
    createMany?: PurchaseCreateManyPhotoInputEnvelope
    set?: Enumerable<PurchaseWhereUniqueInput>
    disconnect?: Enumerable<PurchaseWhereUniqueInput>
    delete?: Enumerable<PurchaseWhereUniqueInput>
    connect?: Enumerable<PurchaseWhereUniqueInput>
    update?: Enumerable<PurchaseUpdateWithWhereUniqueWithoutPhotoInput>
    updateMany?: Enumerable<PurchaseUpdateManyWithWhereWithoutPhotoInput>
    deleteMany?: Enumerable<PurchaseScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseUncheckedUpdateManyWithoutPhotoNestedInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutPhotoInput>, Enumerable<PurchaseUncheckedCreateWithoutPhotoInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutPhotoInput>
    upsert?: Enumerable<PurchaseUpsertWithWhereUniqueWithoutPhotoInput>
    createMany?: PurchaseCreateManyPhotoInputEnvelope
    set?: Enumerable<PurchaseWhereUniqueInput>
    disconnect?: Enumerable<PurchaseWhereUniqueInput>
    delete?: Enumerable<PurchaseWhereUniqueInput>
    connect?: Enumerable<PurchaseWhereUniqueInput>
    update?: Enumerable<PurchaseUpdateWithWhereUniqueWithoutPhotoInput>
    updateMany?: Enumerable<PurchaseUpdateManyWithWhereWithoutPhotoInput>
    deleteMany?: Enumerable<PurchaseScalarWhereInput>
  }

  export type EmailCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<EmailCreateWithoutPurchasesInput, EmailUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: EmailCreateOrConnectWithoutPurchasesInput
    connect?: EmailWhereUniqueInput
  }

  export type PhotoCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<PhotoCreateWithoutPurchasesInput, PhotoUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutPurchasesInput
    connect?: PhotoWhereUniqueInput
  }

  export type EmailUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<EmailCreateWithoutPurchasesInput, EmailUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: EmailCreateOrConnectWithoutPurchasesInput
    upsert?: EmailUpsertWithoutPurchasesInput
    connect?: EmailWhereUniqueInput
    update?: XOR<EmailUpdateWithoutPurchasesInput, EmailUncheckedUpdateWithoutPurchasesInput>
  }

  export type PhotoUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<PhotoCreateWithoutPurchasesInput, PhotoUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutPurchasesInput
    upsert?: PhotoUpsertWithoutPurchasesInput
    connect?: PhotoWhereUniqueInput
    update?: XOR<PhotoUpdateWithoutPurchasesInput, PhotoUncheckedUpdateWithoutPurchasesInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PurchaseCreateNestedManyWithoutEmailInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutEmailInput>, Enumerable<PurchaseUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutEmailInput>
    createMany?: PurchaseCreateManyEmailInputEnvelope
    connect?: Enumerable<PurchaseWhereUniqueInput>
  }

  export type PurchaseUncheckedCreateNestedManyWithoutEmailInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutEmailInput>, Enumerable<PurchaseUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutEmailInput>
    createMany?: PurchaseCreateManyEmailInputEnvelope
    connect?: Enumerable<PurchaseWhereUniqueInput>
  }

  export type PurchaseUpdateManyWithoutEmailNestedInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutEmailInput>, Enumerable<PurchaseUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutEmailInput>
    upsert?: Enumerable<PurchaseUpsertWithWhereUniqueWithoutEmailInput>
    createMany?: PurchaseCreateManyEmailInputEnvelope
    set?: Enumerable<PurchaseWhereUniqueInput>
    disconnect?: Enumerable<PurchaseWhereUniqueInput>
    delete?: Enumerable<PurchaseWhereUniqueInput>
    connect?: Enumerable<PurchaseWhereUniqueInput>
    update?: Enumerable<PurchaseUpdateWithWhereUniqueWithoutEmailInput>
    updateMany?: Enumerable<PurchaseUpdateManyWithWhereWithoutEmailInput>
    deleteMany?: Enumerable<PurchaseScalarWhereInput>
  }

  export type PurchaseUncheckedUpdateManyWithoutEmailNestedInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutEmailInput>, Enumerable<PurchaseUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutEmailInput>
    upsert?: Enumerable<PurchaseUpsertWithWhereUniqueWithoutEmailInput>
    createMany?: PurchaseCreateManyEmailInputEnvelope
    set?: Enumerable<PurchaseWhereUniqueInput>
    disconnect?: Enumerable<PurchaseWhereUniqueInput>
    delete?: Enumerable<PurchaseWhereUniqueInput>
    connect?: Enumerable<PurchaseWhereUniqueInput>
    update?: Enumerable<PurchaseUpdateWithWhereUniqueWithoutEmailInput>
    updateMany?: Enumerable<PurchaseUpdateManyWithWhereWithoutEmailInput>
    deleteMany?: Enumerable<PurchaseScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type PurchaseCreateWithoutPhotoInput = {
    email: EmailCreateNestedOneWithoutPurchasesInput
    date?: Date | string
  }

  export type PurchaseUncheckedCreateWithoutPhotoInput = {
    id?: number
    emailId: number
    date?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutPhotoInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutPhotoInput, PurchaseUncheckedCreateWithoutPhotoInput>
  }

  export type PurchaseCreateManyPhotoInputEnvelope = {
    data: Enumerable<PurchaseCreateManyPhotoInput>
    skipDuplicates?: boolean
  }

  export type PurchaseUpsertWithWhereUniqueWithoutPhotoInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutPhotoInput, PurchaseUncheckedUpdateWithoutPhotoInput>
    create: XOR<PurchaseCreateWithoutPhotoInput, PurchaseUncheckedCreateWithoutPhotoInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutPhotoInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutPhotoInput, PurchaseUncheckedUpdateWithoutPhotoInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutPhotoInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutPurchasesInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: Enumerable<PurchaseScalarWhereInput>
    OR?: Enumerable<PurchaseScalarWhereInput>
    NOT?: Enumerable<PurchaseScalarWhereInput>
    id?: IntFilter | number
    emailId?: IntFilter | number
    photoId?: IntFilter | number
    date?: DateTimeFilter | Date | string
  }

  export type EmailCreateWithoutPurchasesInput = {
    email: string
  }

  export type EmailUncheckedCreateWithoutPurchasesInput = {
    id?: number
    email: string
  }

  export type EmailCreateOrConnectWithoutPurchasesInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutPurchasesInput, EmailUncheckedCreateWithoutPurchasesInput>
  }

  export type PhotoCreateWithoutPurchasesInput = {
    previewUrl: string
    fullUrl: string
    rawUrl: string
  }

  export type PhotoUncheckedCreateWithoutPurchasesInput = {
    id?: number
    previewUrl: string
    fullUrl: string
    rawUrl: string
  }

  export type PhotoCreateOrConnectWithoutPurchasesInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutPurchasesInput, PhotoUncheckedCreateWithoutPurchasesInput>
  }

  export type EmailUpsertWithoutPurchasesInput = {
    update: XOR<EmailUpdateWithoutPurchasesInput, EmailUncheckedUpdateWithoutPurchasesInput>
    create: XOR<EmailCreateWithoutPurchasesInput, EmailUncheckedCreateWithoutPurchasesInput>
  }

  export type EmailUpdateWithoutPurchasesInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmailUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUpsertWithoutPurchasesInput = {
    update: XOR<PhotoUpdateWithoutPurchasesInput, PhotoUncheckedUpdateWithoutPurchasesInput>
    create: XOR<PhotoCreateWithoutPurchasesInput, PhotoUncheckedCreateWithoutPurchasesInput>
  }

  export type PhotoUpdateWithoutPurchasesInput = {
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseCreateWithoutEmailInput = {
    photo: PhotoCreateNestedOneWithoutPurchasesInput
    date?: Date | string
  }

  export type PurchaseUncheckedCreateWithoutEmailInput = {
    id?: number
    photoId: number
    date?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutEmailInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutEmailInput, PurchaseUncheckedCreateWithoutEmailInput>
  }

  export type PurchaseCreateManyEmailInputEnvelope = {
    data: Enumerable<PurchaseCreateManyEmailInput>
    skipDuplicates?: boolean
  }

  export type PurchaseUpsertWithWhereUniqueWithoutEmailInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutEmailInput, PurchaseUncheckedUpdateWithoutEmailInput>
    create: XOR<PurchaseCreateWithoutEmailInput, PurchaseUncheckedCreateWithoutEmailInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutEmailInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutEmailInput, PurchaseUncheckedUpdateWithoutEmailInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutEmailInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutPurchasesInput>
  }

  export type PurchaseCreateManyPhotoInput = {
    id?: number
    emailId: number
    date?: Date | string
  }

  export type PurchaseUpdateWithoutPhotoInput = {
    email?: EmailUpdateOneRequiredWithoutPurchasesNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateWithoutPhotoInput = {
    id?: IntFieldUpdateOperationsInput | number
    emailId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    emailId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyEmailInput = {
    id?: number
    photoId: number
    date?: Date | string
  }

  export type PurchaseUpdateWithoutEmailInput = {
    photo?: PhotoUpdateOneRequiredWithoutPurchasesNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateWithoutEmailInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}