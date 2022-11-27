
/**
 * Client
**/

import * as runtime from './runtime/index';
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
  captureDate: Date
  price: number
  createdAt: Date
}

/**
 * Model PhotosOnAlbums
 * 
 */
export type PhotosOnAlbums = {
  photoId: number
  albumId: number
  createdAt: Date
}

/**
 * Model Album
 * 
 */
export type Album = {
  id: number
  name: string
  createdAt: Date
}

/**
 * Model Purchase
 * 
 */
export type Purchase = {
  id: number
  photoId: number
  cartId: number
  createdAt: Date
}

/**
 * Model Notification
 * 
 */
export type Notification = {
  id: number
  emailId: number
  alertForDate: Date
  createdAt: Date
}

/**
 * Model Cart
 * 
 */
export type Cart = {
  id: number
  cartIdentifier: string
  emailId: number
  date: Date
}

/**
 * Model Email
 * 
 */
export type Email = {
  id: number
  email: string
  createdAt: Date
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
   * `prisma.photosOnAlbums`: Exposes CRUD operations for the **PhotosOnAlbums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotosOnAlbums
    * const photosOnAlbums = await prisma.photosOnAlbums.findMany()
    * ```
    */
  get photosOnAlbums(): Prisma.PhotosOnAlbumsDelegate<GlobalReject>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<GlobalReject>;

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
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<GlobalReject>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<GlobalReject>;

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
    PhotosOnAlbums: 'PhotosOnAlbums',
    Album: 'Album',
    Purchase: 'Purchase',
    Notification: 'Notification',
    Cart: 'Cart',
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
    albums: number
  }

  export type PhotoCountOutputTypeSelect = {
    purchases?: boolean
    albums?: boolean
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
   * Count Type AlbumCountOutputType
   */


  export type AlbumCountOutputType = {
    photos: number
  }

  export type AlbumCountOutputTypeSelect = {
    photos?: boolean
  }

  export type AlbumCountOutputTypeGetPayload<S extends boolean | null | undefined | AlbumCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AlbumCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AlbumCountOutputTypeArgs)
    ? AlbumCountOutputType 
    : S extends { select: any } & (AlbumCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AlbumCountOutputType ? AlbumCountOutputType[P] : never
  } 
      : AlbumCountOutputType




  // Custom InputTypes

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     * 
    **/
    select?: AlbumCountOutputTypeSelect | null
  }



  /**
   * Count Type CartCountOutputType
   */


  export type CartCountOutputType = {
    purchases: number
  }

  export type CartCountOutputTypeSelect = {
    purchases?: boolean
  }

  export type CartCountOutputTypeGetPayload<S extends boolean | null | undefined | CartCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CartCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CartCountOutputTypeArgs)
    ? CartCountOutputType 
    : S extends { select: any } & (CartCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CartCountOutputType ? CartCountOutputType[P] : never
  } 
      : CartCountOutputType




  // Custom InputTypes

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     * 
    **/
    select?: CartCountOutputTypeSelect | null
  }



  /**
   * Count Type EmailCountOutputType
   */


  export type EmailCountOutputType = {
    purchases: number
    notifications: number
  }

  export type EmailCountOutputTypeSelect = {
    purchases?: boolean
    notifications?: boolean
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
    price: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    previewUrl: string | null
    fullUrl: string | null
    rawUrl: string | null
    captureDate: Date | null
    price: number | null
    createdAt: Date | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    previewUrl: string | null
    fullUrl: string | null
    rawUrl: string | null
    captureDate: Date | null
    price: number | null
    createdAt: Date | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    previewUrl: number
    fullUrl: number
    rawUrl: number
    captureDate: number
    price: number
    createdAt: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    previewUrl?: true
    fullUrl?: true
    rawUrl?: true
    captureDate?: true
    price?: true
    createdAt?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    previewUrl?: true
    fullUrl?: true
    rawUrl?: true
    captureDate?: true
    price?: true
    createdAt?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    previewUrl?: true
    fullUrl?: true
    rawUrl?: true
    captureDate?: true
    price?: true
    createdAt?: true
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
    captureDate: Date
    price: number
    createdAt: Date
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
    captureDate?: boolean
    price?: boolean
    purchases?: boolean | PurchaseFindManyArgs
    albums?: boolean | PhotosOnAlbumsFindManyArgs
    createdAt?: boolean
    _count?: boolean | PhotoCountOutputTypeArgs
  }


  export type PhotoInclude = {
    purchases?: boolean | PurchaseFindManyArgs
    albums?: boolean | PhotosOnAlbumsFindManyArgs
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
        P extends 'albums' ? Array < PhotosOnAlbumsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? PhotoCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (PhotoArgs | PhotoFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'purchases' ? Array < PurchaseGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'albums' ? Array < PhotosOnAlbumsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
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

    albums<T extends PhotosOnAlbumsFindManyArgs= {}>(args?: Subset<T, PhotosOnAlbumsFindManyArgs>): PrismaPromise<Array<PhotosOnAlbumsGetPayload<T>>| Null>;

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
   * Model PhotosOnAlbums
   */


  export type AggregatePhotosOnAlbums = {
    _count: PhotosOnAlbumsCountAggregateOutputType | null
    _avg: PhotosOnAlbumsAvgAggregateOutputType | null
    _sum: PhotosOnAlbumsSumAggregateOutputType | null
    _min: PhotosOnAlbumsMinAggregateOutputType | null
    _max: PhotosOnAlbumsMaxAggregateOutputType | null
  }

  export type PhotosOnAlbumsAvgAggregateOutputType = {
    photoId: number | null
    albumId: number | null
  }

  export type PhotosOnAlbumsSumAggregateOutputType = {
    photoId: number | null
    albumId: number | null
  }

  export type PhotosOnAlbumsMinAggregateOutputType = {
    photoId: number | null
    albumId: number | null
    createdAt: Date | null
  }

  export type PhotosOnAlbumsMaxAggregateOutputType = {
    photoId: number | null
    albumId: number | null
    createdAt: Date | null
  }

  export type PhotosOnAlbumsCountAggregateOutputType = {
    photoId: number
    albumId: number
    createdAt: number
    _all: number
  }


  export type PhotosOnAlbumsAvgAggregateInputType = {
    photoId?: true
    albumId?: true
  }

  export type PhotosOnAlbumsSumAggregateInputType = {
    photoId?: true
    albumId?: true
  }

  export type PhotosOnAlbumsMinAggregateInputType = {
    photoId?: true
    albumId?: true
    createdAt?: true
  }

  export type PhotosOnAlbumsMaxAggregateInputType = {
    photoId?: true
    albumId?: true
    createdAt?: true
  }

  export type PhotosOnAlbumsCountAggregateInputType = {
    photoId?: true
    albumId?: true
    createdAt?: true
    _all?: true
  }

  export type PhotosOnAlbumsAggregateArgs = {
    /**
     * Filter which PhotosOnAlbums to aggregate.
     * 
    **/
    where?: PhotosOnAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotosOnAlbums to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotosOnAlbumsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PhotosOnAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotosOnAlbums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotosOnAlbums.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotosOnAlbums
    **/
    _count?: true | PhotosOnAlbumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotosOnAlbumsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotosOnAlbumsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotosOnAlbumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotosOnAlbumsMaxAggregateInputType
  }

  export type GetPhotosOnAlbumsAggregateType<T extends PhotosOnAlbumsAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotosOnAlbums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotosOnAlbums[P]>
      : GetScalarType<T[P], AggregatePhotosOnAlbums[P]>
  }




  export type PhotosOnAlbumsGroupByArgs = {
    where?: PhotosOnAlbumsWhereInput
    orderBy?: Enumerable<PhotosOnAlbumsOrderByWithAggregationInput>
    by: Array<PhotosOnAlbumsScalarFieldEnum>
    having?: PhotosOnAlbumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotosOnAlbumsCountAggregateInputType | true
    _avg?: PhotosOnAlbumsAvgAggregateInputType
    _sum?: PhotosOnAlbumsSumAggregateInputType
    _min?: PhotosOnAlbumsMinAggregateInputType
    _max?: PhotosOnAlbumsMaxAggregateInputType
  }


  export type PhotosOnAlbumsGroupByOutputType = {
    photoId: number
    albumId: number
    createdAt: Date
    _count: PhotosOnAlbumsCountAggregateOutputType | null
    _avg: PhotosOnAlbumsAvgAggregateOutputType | null
    _sum: PhotosOnAlbumsSumAggregateOutputType | null
    _min: PhotosOnAlbumsMinAggregateOutputType | null
    _max: PhotosOnAlbumsMaxAggregateOutputType | null
  }

  type GetPhotosOnAlbumsGroupByPayload<T extends PhotosOnAlbumsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PhotosOnAlbumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotosOnAlbumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotosOnAlbumsGroupByOutputType[P]>
            : GetScalarType<T[P], PhotosOnAlbumsGroupByOutputType[P]>
        }
      >
    >


  export type PhotosOnAlbumsSelect = {
    photoId?: boolean
    photo?: boolean | PhotoArgs
    albumId?: boolean
    album?: boolean | AlbumArgs
    createdAt?: boolean
  }


  export type PhotosOnAlbumsInclude = {
    photo?: boolean | PhotoArgs
    album?: boolean | AlbumArgs
  } 

  export type PhotosOnAlbumsGetPayload<S extends boolean | null | undefined | PhotosOnAlbumsArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PhotosOnAlbums :
    S extends undefined ? never :
    S extends { include: any } & (PhotosOnAlbumsArgs | PhotosOnAlbumsFindManyArgs)
    ? PhotosOnAlbums  & {
    [P in TrueKeys<S['include']>]:
        P extends 'photo' ? PhotoGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'album' ? AlbumGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (PhotosOnAlbumsArgs | PhotosOnAlbumsFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'photo' ? PhotoGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'album' ? AlbumGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof PhotosOnAlbums ? PhotosOnAlbums[P] : never
  } 
      : PhotosOnAlbums


  type PhotosOnAlbumsCountArgs = Merge<
    Omit<PhotosOnAlbumsFindManyArgs, 'select' | 'include'> & {
      select?: PhotosOnAlbumsCountAggregateInputType | true
    }
  >

  export interface PhotosOnAlbumsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one PhotosOnAlbums that matches the filter.
     * @param {PhotosOnAlbumsFindUniqueArgs} args - Arguments to find a PhotosOnAlbums
     * @example
     * // Get one PhotosOnAlbums
     * const photosOnAlbums = await prisma.photosOnAlbums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhotosOnAlbumsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PhotosOnAlbumsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PhotosOnAlbums'> extends True ? Prisma__PhotosOnAlbumsClient<PhotosOnAlbumsGetPayload<T>> : Prisma__PhotosOnAlbumsClient<PhotosOnAlbumsGetPayload<T> | null, null>

    /**
     * Find the first PhotosOnAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosOnAlbumsFindFirstArgs} args - Arguments to find a PhotosOnAlbums
     * @example
     * // Get one PhotosOnAlbums
     * const photosOnAlbums = await prisma.photosOnAlbums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhotosOnAlbumsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PhotosOnAlbumsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PhotosOnAlbums'> extends True ? Prisma__PhotosOnAlbumsClient<PhotosOnAlbumsGetPayload<T>> : Prisma__PhotosOnAlbumsClient<PhotosOnAlbumsGetPayload<T> | null, null>

    /**
     * Find zero or more PhotosOnAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosOnAlbumsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotosOnAlbums
     * const photosOnAlbums = await prisma.photosOnAlbums.findMany()
     * 
     * // Get first 10 PhotosOnAlbums
     * const photosOnAlbums = await prisma.photosOnAlbums.findMany({ take: 10 })
     * 
     * // Only select the `photoId`
     * const photosOnAlbumsWithPhotoIdOnly = await prisma.photosOnAlbums.findMany({ select: { photoId: true } })
     * 
    **/
    findMany<T extends PhotosOnAlbumsFindManyArgs>(
      args?: SelectSubset<T, PhotosOnAlbumsFindManyArgs>
    ): PrismaPromise<Array<PhotosOnAlbumsGetPayload<T>>>

    /**
     * Create a PhotosOnAlbums.
     * @param {PhotosOnAlbumsCreateArgs} args - Arguments to create a PhotosOnAlbums.
     * @example
     * // Create one PhotosOnAlbums
     * const PhotosOnAlbums = await prisma.photosOnAlbums.create({
     *   data: {
     *     // ... data to create a PhotosOnAlbums
     *   }
     * })
     * 
    **/
    create<T extends PhotosOnAlbumsCreateArgs>(
      args: SelectSubset<T, PhotosOnAlbumsCreateArgs>
    ): Prisma__PhotosOnAlbumsClient<PhotosOnAlbumsGetPayload<T>>

    /**
     * Create many PhotosOnAlbums.
     *     @param {PhotosOnAlbumsCreateManyArgs} args - Arguments to create many PhotosOnAlbums.
     *     @example
     *     // Create many PhotosOnAlbums
     *     const photosOnAlbums = await prisma.photosOnAlbums.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhotosOnAlbumsCreateManyArgs>(
      args?: SelectSubset<T, PhotosOnAlbumsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PhotosOnAlbums.
     * @param {PhotosOnAlbumsDeleteArgs} args - Arguments to delete one PhotosOnAlbums.
     * @example
     * // Delete one PhotosOnAlbums
     * const PhotosOnAlbums = await prisma.photosOnAlbums.delete({
     *   where: {
     *     // ... filter to delete one PhotosOnAlbums
     *   }
     * })
     * 
    **/
    delete<T extends PhotosOnAlbumsDeleteArgs>(
      args: SelectSubset<T, PhotosOnAlbumsDeleteArgs>
    ): Prisma__PhotosOnAlbumsClient<PhotosOnAlbumsGetPayload<T>>

    /**
     * Update one PhotosOnAlbums.
     * @param {PhotosOnAlbumsUpdateArgs} args - Arguments to update one PhotosOnAlbums.
     * @example
     * // Update one PhotosOnAlbums
     * const photosOnAlbums = await prisma.photosOnAlbums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhotosOnAlbumsUpdateArgs>(
      args: SelectSubset<T, PhotosOnAlbumsUpdateArgs>
    ): Prisma__PhotosOnAlbumsClient<PhotosOnAlbumsGetPayload<T>>

    /**
     * Delete zero or more PhotosOnAlbums.
     * @param {PhotosOnAlbumsDeleteManyArgs} args - Arguments to filter PhotosOnAlbums to delete.
     * @example
     * // Delete a few PhotosOnAlbums
     * const { count } = await prisma.photosOnAlbums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhotosOnAlbumsDeleteManyArgs>(
      args?: SelectSubset<T, PhotosOnAlbumsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotosOnAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosOnAlbumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotosOnAlbums
     * const photosOnAlbums = await prisma.photosOnAlbums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhotosOnAlbumsUpdateManyArgs>(
      args: SelectSubset<T, PhotosOnAlbumsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PhotosOnAlbums.
     * @param {PhotosOnAlbumsUpsertArgs} args - Arguments to update or create a PhotosOnAlbums.
     * @example
     * // Update or create a PhotosOnAlbums
     * const photosOnAlbums = await prisma.photosOnAlbums.upsert({
     *   create: {
     *     // ... data to create a PhotosOnAlbums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotosOnAlbums we want to update
     *   }
     * })
    **/
    upsert<T extends PhotosOnAlbumsUpsertArgs>(
      args: SelectSubset<T, PhotosOnAlbumsUpsertArgs>
    ): Prisma__PhotosOnAlbumsClient<PhotosOnAlbumsGetPayload<T>>

    /**
     * Find one PhotosOnAlbums that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PhotosOnAlbumsFindUniqueOrThrowArgs} args - Arguments to find a PhotosOnAlbums
     * @example
     * // Get one PhotosOnAlbums
     * const photosOnAlbums = await prisma.photosOnAlbums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PhotosOnAlbumsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PhotosOnAlbumsFindUniqueOrThrowArgs>
    ): Prisma__PhotosOnAlbumsClient<PhotosOnAlbumsGetPayload<T>>

    /**
     * Find the first PhotosOnAlbums that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosOnAlbumsFindFirstOrThrowArgs} args - Arguments to find a PhotosOnAlbums
     * @example
     * // Get one PhotosOnAlbums
     * const photosOnAlbums = await prisma.photosOnAlbums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PhotosOnAlbumsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PhotosOnAlbumsFindFirstOrThrowArgs>
    ): Prisma__PhotosOnAlbumsClient<PhotosOnAlbumsGetPayload<T>>

    /**
     * Count the number of PhotosOnAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosOnAlbumsCountArgs} args - Arguments to filter PhotosOnAlbums to count.
     * @example
     * // Count the number of PhotosOnAlbums
     * const count = await prisma.photosOnAlbums.count({
     *   where: {
     *     // ... the filter for the PhotosOnAlbums we want to count
     *   }
     * })
    **/
    count<T extends PhotosOnAlbumsCountArgs>(
      args?: Subset<T, PhotosOnAlbumsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotosOnAlbumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotosOnAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosOnAlbumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotosOnAlbumsAggregateArgs>(args: Subset<T, PhotosOnAlbumsAggregateArgs>): PrismaPromise<GetPhotosOnAlbumsAggregateType<T>>

    /**
     * Group by PhotosOnAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosOnAlbumsGroupByArgs} args - Group by arguments.
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
      T extends PhotosOnAlbumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotosOnAlbumsGroupByArgs['orderBy'] }
        : { orderBy?: PhotosOnAlbumsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotosOnAlbumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotosOnAlbumsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotosOnAlbums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PhotosOnAlbumsClient<T, Null = never> implements PrismaPromise<T> {
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

    photo<T extends PhotoArgs= {}>(args?: Subset<T, PhotoArgs>): Prisma__PhotoClient<PhotoGetPayload<T> | Null>;

    album<T extends AlbumArgs= {}>(args?: Subset<T, AlbumArgs>): Prisma__AlbumClient<AlbumGetPayload<T> | Null>;

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
   * PhotosOnAlbums base type for findUnique actions
   */
  export type PhotosOnAlbumsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PhotosOnAlbums
     * 
    **/
    select?: PhotosOnAlbumsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosOnAlbumsInclude | null
    /**
     * Filter, which PhotosOnAlbums to fetch.
     * 
    **/
    where: PhotosOnAlbumsWhereUniqueInput
  }

  /**
   * PhotosOnAlbums: findUnique
   */
  export interface PhotosOnAlbumsFindUniqueArgs extends PhotosOnAlbumsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PhotosOnAlbums base type for findFirst actions
   */
  export type PhotosOnAlbumsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PhotosOnAlbums
     * 
    **/
    select?: PhotosOnAlbumsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosOnAlbumsInclude | null
    /**
     * Filter, which PhotosOnAlbums to fetch.
     * 
    **/
    where?: PhotosOnAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotosOnAlbums to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotosOnAlbumsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotosOnAlbums.
     * 
    **/
    cursor?: PhotosOnAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotosOnAlbums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotosOnAlbums.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotosOnAlbums.
     * 
    **/
    distinct?: Enumerable<PhotosOnAlbumsScalarFieldEnum>
  }

  /**
   * PhotosOnAlbums: findFirst
   */
  export interface PhotosOnAlbumsFindFirstArgs extends PhotosOnAlbumsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PhotosOnAlbums findMany
   */
  export type PhotosOnAlbumsFindManyArgs = {
    /**
     * Select specific fields to fetch from the PhotosOnAlbums
     * 
    **/
    select?: PhotosOnAlbumsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosOnAlbumsInclude | null
    /**
     * Filter, which PhotosOnAlbums to fetch.
     * 
    **/
    where?: PhotosOnAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotosOnAlbums to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotosOnAlbumsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotosOnAlbums.
     * 
    **/
    cursor?: PhotosOnAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotosOnAlbums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotosOnAlbums.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PhotosOnAlbumsScalarFieldEnum>
  }


  /**
   * PhotosOnAlbums create
   */
  export type PhotosOnAlbumsCreateArgs = {
    /**
     * Select specific fields to fetch from the PhotosOnAlbums
     * 
    **/
    select?: PhotosOnAlbumsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosOnAlbumsInclude | null
    /**
     * The data needed to create a PhotosOnAlbums.
     * 
    **/
    data: XOR<PhotosOnAlbumsCreateInput, PhotosOnAlbumsUncheckedCreateInput>
  }


  /**
   * PhotosOnAlbums createMany
   */
  export type PhotosOnAlbumsCreateManyArgs = {
    /**
     * The data used to create many PhotosOnAlbums.
     * 
    **/
    data: Enumerable<PhotosOnAlbumsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PhotosOnAlbums update
   */
  export type PhotosOnAlbumsUpdateArgs = {
    /**
     * Select specific fields to fetch from the PhotosOnAlbums
     * 
    **/
    select?: PhotosOnAlbumsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosOnAlbumsInclude | null
    /**
     * The data needed to update a PhotosOnAlbums.
     * 
    **/
    data: XOR<PhotosOnAlbumsUpdateInput, PhotosOnAlbumsUncheckedUpdateInput>
    /**
     * Choose, which PhotosOnAlbums to update.
     * 
    **/
    where: PhotosOnAlbumsWhereUniqueInput
  }


  /**
   * PhotosOnAlbums updateMany
   */
  export type PhotosOnAlbumsUpdateManyArgs = {
    /**
     * The data used to update PhotosOnAlbums.
     * 
    **/
    data: XOR<PhotosOnAlbumsUpdateManyMutationInput, PhotosOnAlbumsUncheckedUpdateManyInput>
    /**
     * Filter which PhotosOnAlbums to update
     * 
    **/
    where?: PhotosOnAlbumsWhereInput
  }


  /**
   * PhotosOnAlbums upsert
   */
  export type PhotosOnAlbumsUpsertArgs = {
    /**
     * Select specific fields to fetch from the PhotosOnAlbums
     * 
    **/
    select?: PhotosOnAlbumsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosOnAlbumsInclude | null
    /**
     * The filter to search for the PhotosOnAlbums to update in case it exists.
     * 
    **/
    where: PhotosOnAlbumsWhereUniqueInput
    /**
     * In case the PhotosOnAlbums found by the `where` argument doesn't exist, create a new PhotosOnAlbums with this data.
     * 
    **/
    create: XOR<PhotosOnAlbumsCreateInput, PhotosOnAlbumsUncheckedCreateInput>
    /**
     * In case the PhotosOnAlbums was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PhotosOnAlbumsUpdateInput, PhotosOnAlbumsUncheckedUpdateInput>
  }


  /**
   * PhotosOnAlbums delete
   */
  export type PhotosOnAlbumsDeleteArgs = {
    /**
     * Select specific fields to fetch from the PhotosOnAlbums
     * 
    **/
    select?: PhotosOnAlbumsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosOnAlbumsInclude | null
    /**
     * Filter which PhotosOnAlbums to delete.
     * 
    **/
    where: PhotosOnAlbumsWhereUniqueInput
  }


  /**
   * PhotosOnAlbums deleteMany
   */
  export type PhotosOnAlbumsDeleteManyArgs = {
    /**
     * Filter which PhotosOnAlbums to delete
     * 
    **/
    where?: PhotosOnAlbumsWhereInput
  }


  /**
   * PhotosOnAlbums: findUniqueOrThrow
   */
  export type PhotosOnAlbumsFindUniqueOrThrowArgs = PhotosOnAlbumsFindUniqueArgsBase
      

  /**
   * PhotosOnAlbums: findFirstOrThrow
   */
  export type PhotosOnAlbumsFindFirstOrThrowArgs = PhotosOnAlbumsFindFirstArgsBase
      

  /**
   * PhotosOnAlbums without action
   */
  export type PhotosOnAlbumsArgs = {
    /**
     * Select specific fields to fetch from the PhotosOnAlbums
     * 
    **/
    select?: PhotosOnAlbumsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotosOnAlbumsInclude | null
  }



  /**
   * Model Album
   */


  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type AlbumAggregateArgs = {
    /**
     * Filter which Album to aggregate.
     * 
    **/
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     * 
    **/
    orderBy?: Enumerable<AlbumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs = {
    where?: AlbumWhereInput
    orderBy?: Enumerable<AlbumOrderByWithAggregationInput>
    by: Array<AlbumScalarFieldEnum>
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }


  export type AlbumGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect = {
    id?: boolean
    name?: boolean
    photos?: boolean | PhotosOnAlbumsFindManyArgs
    createdAt?: boolean
    _count?: boolean | AlbumCountOutputTypeArgs
  }


  export type AlbumInclude = {
    photos?: boolean | PhotosOnAlbumsFindManyArgs
    _count?: boolean | AlbumCountOutputTypeArgs
  } 

  export type AlbumGetPayload<S extends boolean | null | undefined | AlbumArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Album :
    S extends undefined ? never :
    S extends { include: any } & (AlbumArgs | AlbumFindManyArgs)
    ? Album  & {
    [P in TrueKeys<S['include']>]:
        P extends 'photos' ? Array < PhotosOnAlbumsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? AlbumCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (AlbumArgs | AlbumFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'photos' ? Array < PhotosOnAlbumsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? AlbumCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Album ? Album[P] : never
  } 
      : Album


  type AlbumCountArgs = Merge<
    Omit<AlbumFindManyArgs, 'select' | 'include'> & {
      select?: AlbumCountAggregateInputType | true
    }
  >

  export interface AlbumDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AlbumFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Album'> extends True ? Prisma__AlbumClient<AlbumGetPayload<T>> : Prisma__AlbumClient<AlbumGetPayload<T> | null, null>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AlbumFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Album'> extends True ? Prisma__AlbumClient<AlbumGetPayload<T>> : Prisma__AlbumClient<AlbumGetPayload<T> | null, null>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumFindManyArgs>(
      args?: SelectSubset<T, AlbumFindManyArgs>
    ): PrismaPromise<Array<AlbumGetPayload<T>>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
    **/
    create<T extends AlbumCreateArgs>(
      args: SelectSubset<T, AlbumCreateArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Create many Albums.
     *     @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     *     @example
     *     // Create many Albums
     *     const album = await prisma.album.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumCreateManyArgs>(
      args?: SelectSubset<T, AlbumCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
    **/
    delete<T extends AlbumDeleteArgs>(
      args: SelectSubset<T, AlbumDeleteArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumUpdateArgs>(
      args: SelectSubset<T, AlbumUpdateArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumDeleteManyArgs>(
      args?: SelectSubset<T, AlbumDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumUpdateManyArgs>(
      args: SelectSubset<T, AlbumUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumUpsertArgs>(
      args: SelectSubset<T, AlbumUpsertArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Find one Album that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AlbumFindUniqueOrThrowArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Find the first Album that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AlbumFindFirstOrThrowArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AlbumClient<T, Null = never> implements PrismaPromise<T> {
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

    photos<T extends PhotosOnAlbumsFindManyArgs= {}>(args?: Subset<T, PhotosOnAlbumsFindManyArgs>): PrismaPromise<Array<PhotosOnAlbumsGetPayload<T>>| Null>;

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
   * Album base type for findUnique actions
   */
  export type AlbumFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * Filter, which Album to fetch.
     * 
    **/
    where: AlbumWhereUniqueInput
  }

  /**
   * Album: findUnique
   */
  export interface AlbumFindUniqueArgs extends AlbumFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Album base type for findFirst actions
   */
  export type AlbumFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * Filter, which Album to fetch.
     * 
    **/
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     * 
    **/
    orderBy?: Enumerable<AlbumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     * 
    **/
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     * 
    **/
    distinct?: Enumerable<AlbumScalarFieldEnum>
  }

  /**
   * Album: findFirst
   */
  export interface AlbumFindFirstArgs extends AlbumFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * Filter, which Albums to fetch.
     * 
    **/
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     * 
    **/
    orderBy?: Enumerable<AlbumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     * 
    **/
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AlbumScalarFieldEnum>
  }


  /**
   * Album create
   */
  export type AlbumCreateArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * The data needed to create a Album.
     * 
    **/
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }


  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs = {
    /**
     * The data used to create many Albums.
     * 
    **/
    data: Enumerable<AlbumCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Album update
   */
  export type AlbumUpdateArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * The data needed to update a Album.
     * 
    **/
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     * 
    **/
    where: AlbumWhereUniqueInput
  }


  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs = {
    /**
     * The data used to update Albums.
     * 
    **/
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     * 
    **/
    where?: AlbumWhereInput
  }


  /**
   * Album upsert
   */
  export type AlbumUpsertArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * The filter to search for the Album to update in case it exists.
     * 
    **/
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     * 
    **/
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }


  /**
   * Album delete
   */
  export type AlbumDeleteArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * Filter which Album to delete.
     * 
    **/
    where: AlbumWhereUniqueInput
  }


  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs = {
    /**
     * Filter which Albums to delete
     * 
    **/
    where?: AlbumWhereInput
  }


  /**
   * Album: findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs = AlbumFindUniqueArgsBase
      

  /**
   * Album: findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs = AlbumFindFirstArgsBase
      

  /**
   * Album without action
   */
  export type AlbumArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
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
    photoId: number | null
    cartId: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id: number | null
    photoId: number | null
    cartId: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: number | null
    photoId: number | null
    cartId: number | null
    createdAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: number | null
    photoId: number | null
    cartId: number | null
    createdAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    photoId: number
    cartId: number
    createdAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id?: true
    photoId?: true
    cartId?: true
  }

  export type PurchaseSumAggregateInputType = {
    id?: true
    photoId?: true
    cartId?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    photoId?: true
    cartId?: true
    createdAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    photoId?: true
    cartId?: true
    createdAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    photoId?: true
    cartId?: true
    createdAt?: true
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
    photoId: number
    cartId: number
    createdAt: Date
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
    photoId?: boolean
    photo?: boolean | PhotoArgs
    cartId?: boolean
    cart?: boolean | CartArgs
    createdAt?: boolean
  }


  export type PurchaseInclude = {
    photo?: boolean | PhotoArgs
    cart?: boolean | CartArgs
  } 

  export type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Purchase :
    S extends undefined ? never :
    S extends { include: any } & (PurchaseArgs | PurchaseFindManyArgs)
    ? Purchase  & {
    [P in TrueKeys<S['include']>]:
        P extends 'photo' ? PhotoGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'cart' ? CartGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (PurchaseArgs | PurchaseFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'photo' ? PhotoGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'cart' ? CartGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Purchase ? Purchase[P] : never
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

    photo<T extends PhotoArgs= {}>(args?: Subset<T, PhotoArgs>): Prisma__PhotoClient<PhotoGetPayload<T> | Null>;

    cart<T extends CartArgs= {}>(args?: Subset<T, CartArgs>): Prisma__CartClient<CartGetPayload<T> | Null>;

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
   * Model Notification
   */


  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    emailId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    emailId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    emailId: number | null
    alertForDate: Date | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    emailId: number | null
    alertForDate: Date | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    emailId: number
    alertForDate: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    emailId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    emailId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    emailId?: true
    alertForDate?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    emailId?: true
    alertForDate?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    emailId?: true
    alertForDate?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs = {
    /**
     * Filter which Notification to aggregate.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs = {
    where?: NotificationWhereInput
    orderBy?: Enumerable<NotificationOrderByWithAggregationInput>
    by: Array<NotificationScalarFieldEnum>
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }


  export type NotificationGroupByOutputType = {
    id: number
    emailId: number
    alertForDate: Date
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect = {
    id?: boolean
    emailId?: boolean
    email?: boolean | EmailArgs
    alertForDate?: boolean
    createdAt?: boolean
  }


  export type NotificationInclude = {
    email?: boolean | EmailArgs
  } 

  export type NotificationGetPayload<S extends boolean | null | undefined | NotificationArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Notification :
    S extends undefined ? never :
    S extends { include: any } & (NotificationArgs | NotificationFindManyArgs)
    ? Notification  & {
    [P in TrueKeys<S['include']>]:
        P extends 'email' ? EmailGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (NotificationArgs | NotificationFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'email' ? EmailGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Notification ? Notification[P] : never
  } 
      : Notification


  type NotificationCountArgs = Merge<
    Omit<NotificationFindManyArgs, 'select' | 'include'> & {
      select?: NotificationCountAggregateInputType | true
    }
  >

  export interface NotificationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NotificationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Notification'> extends True ? Prisma__NotificationClient<NotificationGetPayload<T>> : Prisma__NotificationClient<NotificationGetPayload<T> | null, null>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NotificationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Notification'> extends True ? Prisma__NotificationClient<NotificationGetPayload<T>> : Prisma__NotificationClient<NotificationGetPayload<T> | null, null>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs>
    ): PrismaPromise<Array<NotificationGetPayload<T>>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Create many Notifications.
     *     @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Find one Notification that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindUniqueOrThrowArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Find the first Notification that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotificationClient<T, Null = never> implements PrismaPromise<T> {
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
   * Notification base type for findUnique actions
   */
  export type NotificationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification: findUnique
   */
  export interface NotificationFindUniqueArgs extends NotificationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notification base type for findFirst actions
   */
  export type NotificationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     * 
    **/
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }

  /**
   * Notification: findFirst
   */
  export interface NotificationFindFirstArgs extends NotificationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notifications to fetch.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * Notification create
   */
  export type NotificationCreateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The data needed to create a Notification.
     * 
    **/
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }


  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs = {
    /**
     * The data used to create many Notifications.
     * 
    **/
    data: Enumerable<NotificationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Notification update
   */
  export type NotificationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The data needed to update a Notification.
     * 
    **/
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     * 
    **/
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs = {
    /**
     * The data used to update Notifications.
     * 
    **/
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     * 
    **/
    where?: NotificationWhereInput
  }


  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The filter to search for the Notification to update in case it exists.
     * 
    **/
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     * 
    **/
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }


  /**
   * Notification delete
   */
  export type NotificationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter which Notification to delete.
     * 
    **/
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs = {
    /**
     * Filter which Notifications to delete
     * 
    **/
    where?: NotificationWhereInput
  }


  /**
   * Notification: findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs = NotificationFindUniqueArgsBase
      

  /**
   * Notification: findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs = NotificationFindFirstArgsBase
      

  /**
   * Notification without action
   */
  export type NotificationArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
  }



  /**
   * Model Cart
   */


  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    emailId: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    emailId: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    cartIdentifier: string | null
    emailId: number | null
    date: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    cartIdentifier: string | null
    emailId: number | null
    date: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    cartIdentifier: number
    emailId: number
    date: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    emailId?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    emailId?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    cartIdentifier?: true
    emailId?: true
    date?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    cartIdentifier?: true
    emailId?: true
    date?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    cartIdentifier?: true
    emailId?: true
    date?: true
    _all?: true
  }

  export type CartAggregateArgs = {
    /**
     * Filter which Cart to aggregate.
     * 
    **/
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     * 
    **/
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs = {
    where?: CartWhereInput
    orderBy?: Enumerable<CartOrderByWithAggregationInput>
    by: Array<CartScalarFieldEnum>
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }


  export type CartGroupByOutputType = {
    id: number
    cartIdentifier: string
    emailId: number
    date: Date
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect = {
    id?: boolean
    cartIdentifier?: boolean
    purchases?: boolean | PurchaseFindManyArgs
    emailId?: boolean
    email?: boolean | EmailArgs
    date?: boolean
    _count?: boolean | CartCountOutputTypeArgs
  }


  export type CartInclude = {
    purchases?: boolean | PurchaseFindManyArgs
    email?: boolean | EmailArgs
    _count?: boolean | CartCountOutputTypeArgs
  } 

  export type CartGetPayload<S extends boolean | null | undefined | CartArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Cart :
    S extends undefined ? never :
    S extends { include: any } & (CartArgs | CartFindManyArgs)
    ? Cart  & {
    [P in TrueKeys<S['include']>]:
        P extends 'purchases' ? Array < PurchaseGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'email' ? EmailGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends '_count' ? CartCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (CartArgs | CartFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'purchases' ? Array < PurchaseGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'email' ? EmailGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends '_count' ? CartCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Cart ? Cart[P] : never
  } 
      : Cart


  type CartCountArgs = Merge<
    Omit<CartFindManyArgs, 'select' | 'include'> & {
      select?: CartCountAggregateInputType | true
    }
  >

  export interface CartDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CartFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CartFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cart'> extends True ? Prisma__CartClient<CartGetPayload<T>> : Prisma__CartClient<CartGetPayload<T> | null, null>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CartFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CartFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cart'> extends True ? Prisma__CartClient<CartGetPayload<T>> : Prisma__CartClient<CartGetPayload<T> | null, null>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CartFindManyArgs>(
      args?: SelectSubset<T, CartFindManyArgs>
    ): PrismaPromise<Array<CartGetPayload<T>>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
    **/
    create<T extends CartCreateArgs>(
      args: SelectSubset<T, CartCreateArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Create many Carts.
     *     @param {CartCreateManyArgs} args - Arguments to create many Carts.
     *     @example
     *     // Create many Carts
     *     const cart = await prisma.cart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CartCreateManyArgs>(
      args?: SelectSubset<T, CartCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
    **/
    delete<T extends CartDeleteArgs>(
      args: SelectSubset<T, CartDeleteArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CartUpdateArgs>(
      args: SelectSubset<T, CartUpdateArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CartDeleteManyArgs>(
      args?: SelectSubset<T, CartDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CartUpdateManyArgs>(
      args: SelectSubset<T, CartUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
    **/
    upsert<T extends CartUpsertArgs>(
      args: SelectSubset<T, CartUpsertArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Find one Cart that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CartFindUniqueOrThrowArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Find the first Cart that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CartFindFirstOrThrowArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CartClient<T, Null = never> implements PrismaPromise<T> {
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

    email<T extends EmailArgs= {}>(args?: Subset<T, EmailArgs>): Prisma__EmailClient<EmailGetPayload<T> | Null>;

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
   * Cart base type for findUnique actions
   */
  export type CartFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * Filter, which Cart to fetch.
     * 
    **/
    where: CartWhereUniqueInput
  }

  /**
   * Cart: findUnique
   */
  export interface CartFindUniqueArgs extends CartFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cart base type for findFirst actions
   */
  export type CartFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * Filter, which Cart to fetch.
     * 
    **/
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     * 
    **/
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     * 
    **/
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     * 
    **/
    distinct?: Enumerable<CartScalarFieldEnum>
  }

  /**
   * Cart: findFirst
   */
  export interface CartFindFirstArgs extends CartFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cart findMany
   */
  export type CartFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * Filter, which Carts to fetch.
     * 
    **/
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     * 
    **/
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     * 
    **/
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CartScalarFieldEnum>
  }


  /**
   * Cart create
   */
  export type CartCreateArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * The data needed to create a Cart.
     * 
    **/
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }


  /**
   * Cart createMany
   */
  export type CartCreateManyArgs = {
    /**
     * The data used to create many Carts.
     * 
    **/
    data: Enumerable<CartCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Cart update
   */
  export type CartUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * The data needed to update a Cart.
     * 
    **/
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     * 
    **/
    where: CartWhereUniqueInput
  }


  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs = {
    /**
     * The data used to update Carts.
     * 
    **/
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     * 
    **/
    where?: CartWhereInput
  }


  /**
   * Cart upsert
   */
  export type CartUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * The filter to search for the Cart to update in case it exists.
     * 
    **/
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     * 
    **/
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }


  /**
   * Cart delete
   */
  export type CartDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * Filter which Cart to delete.
     * 
    **/
    where: CartWhereUniqueInput
  }


  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs = {
    /**
     * Filter which Carts to delete
     * 
    **/
    where?: CartWhereInput
  }


  /**
   * Cart: findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs = CartFindUniqueArgsBase
      

  /**
   * Cart: findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs = CartFindFirstArgsBase
      

  /**
   * Cart without action
   */
  export type CartArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
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
    createdAt: Date | null
  }

  export type EmailMaxAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
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
    createdAt?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
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
    createdAt: Date
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
    purchases?: boolean | CartFindManyArgs
    notifications?: boolean | NotificationFindManyArgs
    createdAt?: boolean
    _count?: boolean | EmailCountOutputTypeArgs
  }


  export type EmailInclude = {
    purchases?: boolean | CartFindManyArgs
    notifications?: boolean | NotificationFindManyArgs
    _count?: boolean | EmailCountOutputTypeArgs
  } 

  export type EmailGetPayload<S extends boolean | null | undefined | EmailArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Email :
    S extends undefined ? never :
    S extends { include: any } & (EmailArgs | EmailFindManyArgs)
    ? Email  & {
    [P in TrueKeys<S['include']>]:
        P extends 'purchases' ? Array < CartGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'notifications' ? Array < NotificationGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? EmailCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (EmailArgs | EmailFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'purchases' ? Array < CartGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'notifications' ? Array < NotificationGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
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

    purchases<T extends CartFindManyArgs= {}>(args?: Subset<T, CartFindManyArgs>): PrismaPromise<Array<CartGetPayload<T>>| Null>;

    notifications<T extends NotificationFindManyArgs= {}>(args?: Subset<T, NotificationFindManyArgs>): PrismaPromise<Array<NotificationGetPayload<T>>| Null>;

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

  export const AlbumScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    cartIdentifier: 'cartIdentifier',
    emailId: 'emailId',
    date: 'date'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const EmailScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    emailId: 'emailId',
    alertForDate: 'alertForDate',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    previewUrl: 'previewUrl',
    fullUrl: 'fullUrl',
    rawUrl: 'rawUrl',
    captureDate: 'captureDate',
    price: 'price',
    createdAt: 'createdAt'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const PhotosOnAlbumsScalarFieldEnum: {
    photoId: 'photoId',
    albumId: 'albumId',
    createdAt: 'createdAt'
  };

  export type PhotosOnAlbumsScalarFieldEnum = (typeof PhotosOnAlbumsScalarFieldEnum)[keyof typeof PhotosOnAlbumsScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    photoId: 'photoId',
    cartId: 'cartId',
    createdAt: 'createdAt'
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
    captureDate?: DateTimeFilter | Date | string
    price?: IntFilter | number
    purchases?: PurchaseListRelationFilter
    albums?: PhotosOnAlbumsListRelationFilter
    createdAt?: DateTimeFilter | Date | string
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    previewUrl?: SortOrder
    fullUrl?: SortOrder
    rawUrl?: SortOrder
    captureDate?: SortOrder
    price?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
    albums?: PhotosOnAlbumsOrderByRelationAggregateInput
    createdAt?: SortOrder
  }

  export type PhotoWhereUniqueInput = {
    id?: number
  }

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    previewUrl?: SortOrder
    fullUrl?: SortOrder
    rawUrl?: SortOrder
    captureDate?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
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
    captureDate?: DateTimeWithAggregatesFilter | Date | string
    price?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PhotosOnAlbumsWhereInput = {
    AND?: Enumerable<PhotosOnAlbumsWhereInput>
    OR?: Enumerable<PhotosOnAlbumsWhereInput>
    NOT?: Enumerable<PhotosOnAlbumsWhereInput>
    photoId?: IntFilter | number
    photo?: XOR<PhotoRelationFilter, PhotoWhereInput>
    albumId?: IntFilter | number
    album?: XOR<AlbumRelationFilter, AlbumWhereInput>
    createdAt?: DateTimeFilter | Date | string
  }

  export type PhotosOnAlbumsOrderByWithRelationInput = {
    photoId?: SortOrder
    photo?: PhotoOrderByWithRelationInput
    albumId?: SortOrder
    album?: AlbumOrderByWithRelationInput
    createdAt?: SortOrder
  }

  export type PhotosOnAlbumsWhereUniqueInput = {
    photoId_albumId?: PhotosOnAlbumsPhotoIdAlbumIdCompoundUniqueInput
  }

  export type PhotosOnAlbumsOrderByWithAggregationInput = {
    photoId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    _count?: PhotosOnAlbumsCountOrderByAggregateInput
    _avg?: PhotosOnAlbumsAvgOrderByAggregateInput
    _max?: PhotosOnAlbumsMaxOrderByAggregateInput
    _min?: PhotosOnAlbumsMinOrderByAggregateInput
    _sum?: PhotosOnAlbumsSumOrderByAggregateInput
  }

  export type PhotosOnAlbumsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PhotosOnAlbumsScalarWhereWithAggregatesInput>
    OR?: Enumerable<PhotosOnAlbumsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PhotosOnAlbumsScalarWhereWithAggregatesInput>
    photoId?: IntWithAggregatesFilter | number
    albumId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AlbumWhereInput = {
    AND?: Enumerable<AlbumWhereInput>
    OR?: Enumerable<AlbumWhereInput>
    NOT?: Enumerable<AlbumWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    photos?: PhotosOnAlbumsListRelationFilter
    createdAt?: DateTimeFilter | Date | string
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photos?: PhotosOnAlbumsOrderByRelationAggregateInput
    createdAt?: SortOrder
  }

  export type AlbumWhereUniqueInput = {
    id?: number
  }

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AlbumScalarWhereWithAggregatesInput>
    OR?: Enumerable<AlbumScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AlbumScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: Enumerable<PurchaseWhereInput>
    OR?: Enumerable<PurchaseWhereInput>
    NOT?: Enumerable<PurchaseWhereInput>
    id?: IntFilter | number
    photoId?: IntFilter | number
    photo?: XOR<PhotoRelationFilter, PhotoWhereInput>
    cartId?: IntFilter | number
    cart?: XOR<CartRelationFilter, CartWhereInput>
    createdAt?: DateTimeFilter | Date | string
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    photoId?: SortOrder
    photo?: PhotoOrderByWithRelationInput
    cartId?: SortOrder
    cart?: CartOrderByWithRelationInput
    createdAt?: SortOrder
  }

  export type PurchaseWhereUniqueInput = {
    id?: number
  }

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    photoId?: SortOrder
    cartId?: SortOrder
    createdAt?: SortOrder
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
    photoId?: IntWithAggregatesFilter | number
    cartId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type NotificationWhereInput = {
    AND?: Enumerable<NotificationWhereInput>
    OR?: Enumerable<NotificationWhereInput>
    NOT?: Enumerable<NotificationWhereInput>
    id?: IntFilter | number
    emailId?: IntFilter | number
    email?: XOR<EmailRelationFilter, EmailWhereInput>
    alertForDate?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    emailId?: SortOrder
    email?: EmailOrderByWithRelationInput
    alertForDate?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationWhereUniqueInput = {
    id?: number
    emailNotification?: NotificationEmailNotificationCompoundUniqueInput
  }

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    emailId?: SortOrder
    alertForDate?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    OR?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    emailId?: IntWithAggregatesFilter | number
    alertForDate?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CartWhereInput = {
    AND?: Enumerable<CartWhereInput>
    OR?: Enumerable<CartWhereInput>
    NOT?: Enumerable<CartWhereInput>
    id?: IntFilter | number
    cartIdentifier?: StringFilter | string
    purchases?: PurchaseListRelationFilter
    emailId?: IntFilter | number
    email?: XOR<EmailRelationFilter, EmailWhereInput>
    date?: DateTimeFilter | Date | string
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    cartIdentifier?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
    emailId?: SortOrder
    email?: EmailOrderByWithRelationInput
    date?: SortOrder
  }

  export type CartWhereUniqueInput = {
    id?: number
    cartIdentifier?: string
  }

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    cartIdentifier?: SortOrder
    emailId?: SortOrder
    date?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CartScalarWhereWithAggregatesInput>
    OR?: Enumerable<CartScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CartScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cartIdentifier?: StringWithAggregatesFilter | string
    emailId?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EmailWhereInput = {
    AND?: Enumerable<EmailWhereInput>
    OR?: Enumerable<EmailWhereInput>
    NOT?: Enumerable<EmailWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    purchases?: CartListRelationFilter
    notifications?: NotificationListRelationFilter
    createdAt?: DateTimeFilter | Date | string
  }

  export type EmailOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    purchases?: CartOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    createdAt?: SortOrder
  }

  export type EmailWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type EmailOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PhotoCreateInput = {
    previewUrl: string
    fullUrl: string
    rawUrl: string
    captureDate: Date | string
    price: number
    purchases?: PurchaseCreateNestedManyWithoutPhotoInput
    albums?: PhotosOnAlbumsCreateNestedManyWithoutPhotoInput
    createdAt?: Date | string
  }

  export type PhotoUncheckedCreateInput = {
    id?: number
    previewUrl: string
    fullUrl: string
    rawUrl: string
    captureDate: Date | string
    price: number
    purchases?: PurchaseUncheckedCreateNestedManyWithoutPhotoInput
    albums?: PhotosOnAlbumsUncheckedCreateNestedManyWithoutPhotoInput
    createdAt?: Date | string
  }

  export type PhotoUpdateInput = {
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    purchases?: PurchaseUpdateManyWithoutPhotoNestedInput
    albums?: PhotosOnAlbumsUpdateManyWithoutPhotoNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    purchases?: PurchaseUncheckedUpdateManyWithoutPhotoNestedInput
    albums?: PhotosOnAlbumsUncheckedUpdateManyWithoutPhotoNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateManyInput = {
    id?: number
    previewUrl: string
    fullUrl: string
    rawUrl: string
    captureDate: Date | string
    price: number
    createdAt?: Date | string
  }

  export type PhotoUpdateManyMutationInput = {
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosOnAlbumsCreateInput = {
    photo: PhotoCreateNestedOneWithoutAlbumsInput
    album: AlbumCreateNestedOneWithoutPhotosInput
    createdAt?: Date | string
  }

  export type PhotosOnAlbumsUncheckedCreateInput = {
    photoId: number
    albumId: number
    createdAt?: Date | string
  }

  export type PhotosOnAlbumsUpdateInput = {
    photo?: PhotoUpdateOneRequiredWithoutAlbumsNestedInput
    album?: AlbumUpdateOneRequiredWithoutPhotosNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosOnAlbumsUncheckedUpdateInput = {
    photoId?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosOnAlbumsCreateManyInput = {
    photoId: number
    albumId: number
    createdAt?: Date | string
  }

  export type PhotosOnAlbumsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosOnAlbumsUncheckedUpdateManyInput = {
    photoId?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateInput = {
    name: string
    photos?: PhotosOnAlbumsCreateNestedManyWithoutAlbumInput
    createdAt?: Date | string
  }

  export type AlbumUncheckedCreateInput = {
    id?: number
    name: string
    photos?: PhotosOnAlbumsUncheckedCreateNestedManyWithoutAlbumInput
    createdAt?: Date | string
  }

  export type AlbumUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    photos?: PhotosOnAlbumsUpdateManyWithoutAlbumNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photos?: PhotosOnAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type AlbumUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    photo: PhotoCreateNestedOneWithoutPurchasesInput
    cart: CartCreateNestedOneWithoutPurchasesInput
    createdAt?: Date | string
  }

  export type PurchaseUncheckedCreateInput = {
    id?: number
    photoId: number
    cartId: number
    createdAt?: Date | string
  }

  export type PurchaseUpdateInput = {
    photo?: PhotoUpdateOneRequiredWithoutPurchasesNestedInput
    cart?: CartUpdateOneRequiredWithoutPurchasesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoId?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyInput = {
    id?: number
    photoId: number
    cartId: number
    createdAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoId?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    email: EmailCreateNestedOneWithoutNotificationsInput
    alertForDate: Date | string
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    emailId: number
    alertForDate: Date | string
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    email?: EmailUpdateOneRequiredWithoutNotificationsNestedInput
    alertForDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    emailId?: IntFieldUpdateOperationsInput | number
    alertForDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    emailId: number
    alertForDate: Date | string
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    alertForDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    emailId?: IntFieldUpdateOperationsInput | number
    alertForDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    cartIdentifier: string
    purchases?: PurchaseCreateNestedManyWithoutCartInput
    email: EmailCreateNestedOneWithoutPurchasesInput
    date?: Date | string
  }

  export type CartUncheckedCreateInput = {
    id?: number
    cartIdentifier: string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCartInput
    emailId: number
    date?: Date | string
  }

  export type CartUpdateInput = {
    cartIdentifier?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUpdateManyWithoutCartNestedInput
    email?: EmailUpdateOneRequiredWithoutPurchasesNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartIdentifier?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUncheckedUpdateManyWithoutCartNestedInput
    emailId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateManyInput = {
    id?: number
    cartIdentifier: string
    emailId: number
    date?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    cartIdentifier?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartIdentifier?: StringFieldUpdateOperationsInput | string
    emailId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateInput = {
    email: string
    purchases?: CartCreateNestedManyWithoutEmailInput
    notifications?: NotificationCreateNestedManyWithoutEmailInput
    createdAt?: Date | string
  }

  export type EmailUncheckedCreateInput = {
    id?: number
    email: string
    purchases?: CartUncheckedCreateNestedManyWithoutEmailInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutEmailInput
    createdAt?: Date | string
  }

  export type EmailUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    purchases?: CartUpdateManyWithoutEmailNestedInput
    notifications?: NotificationUpdateManyWithoutEmailNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    purchases?: CartUncheckedUpdateManyWithoutEmailNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutEmailNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateManyInput = {
    id?: number
    email: string
    createdAt?: Date | string
  }

  export type EmailUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type PhotosOnAlbumsListRelationFilter = {
    every?: PhotosOnAlbumsWhereInput
    some?: PhotosOnAlbumsWhereInput
    none?: PhotosOnAlbumsWhereInput
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotosOnAlbumsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    previewUrl?: SortOrder
    fullUrl?: SortOrder
    rawUrl?: SortOrder
    captureDate?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    previewUrl?: SortOrder
    fullUrl?: SortOrder
    rawUrl?: SortOrder
    captureDate?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    previewUrl?: SortOrder
    fullUrl?: SortOrder
    rawUrl?: SortOrder
    captureDate?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
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

  export type PhotoRelationFilter = {
    is?: PhotoWhereInput
    isNot?: PhotoWhereInput
  }

  export type AlbumRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type PhotosOnAlbumsPhotoIdAlbumIdCompoundUniqueInput = {
    photoId: number
    albumId: number
  }

  export type PhotosOnAlbumsCountOrderByAggregateInput = {
    photoId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotosOnAlbumsAvgOrderByAggregateInput = {
    photoId?: SortOrder
    albumId?: SortOrder
  }

  export type PhotosOnAlbumsMaxOrderByAggregateInput = {
    photoId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotosOnAlbumsMinOrderByAggregateInput = {
    photoId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotosOnAlbumsSumOrderByAggregateInput = {
    photoId?: SortOrder
    albumId?: SortOrder
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    photoId?: SortOrder
    cartId?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    photoId?: SortOrder
    cartId?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    photoId?: SortOrder
    cartId?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    photoId?: SortOrder
    cartId?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    photoId?: SortOrder
    cartId?: SortOrder
  }

  export type EmailRelationFilter = {
    is?: EmailWhereInput
    isNot?: EmailWhereInput
  }

  export type NotificationEmailNotificationCompoundUniqueInput = {
    emailId: number
    alertForDate: Date | string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
    alertForDate?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
    alertForDate?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
    alertForDate?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    cartIdentifier?: SortOrder
    emailId?: SortOrder
    date?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    cartIdentifier?: SortOrder
    emailId?: SortOrder
    date?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    cartIdentifier?: SortOrder
    emailId?: SortOrder
    date?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
  }

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
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

  export type PhotosOnAlbumsCreateNestedManyWithoutPhotoInput = {
    create?: XOR<Enumerable<PhotosOnAlbumsCreateWithoutPhotoInput>, Enumerable<PhotosOnAlbumsUncheckedCreateWithoutPhotoInput>>
    connectOrCreate?: Enumerable<PhotosOnAlbumsCreateOrConnectWithoutPhotoInput>
    createMany?: PhotosOnAlbumsCreateManyPhotoInputEnvelope
    connect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
  }

  export type PurchaseUncheckedCreateNestedManyWithoutPhotoInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutPhotoInput>, Enumerable<PurchaseUncheckedCreateWithoutPhotoInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutPhotoInput>
    createMany?: PurchaseCreateManyPhotoInputEnvelope
    connect?: Enumerable<PurchaseWhereUniqueInput>
  }

  export type PhotosOnAlbumsUncheckedCreateNestedManyWithoutPhotoInput = {
    create?: XOR<Enumerable<PhotosOnAlbumsCreateWithoutPhotoInput>, Enumerable<PhotosOnAlbumsUncheckedCreateWithoutPhotoInput>>
    connectOrCreate?: Enumerable<PhotosOnAlbumsCreateOrConnectWithoutPhotoInput>
    createMany?: PhotosOnAlbumsCreateManyPhotoInputEnvelope
    connect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type PhotosOnAlbumsUpdateManyWithoutPhotoNestedInput = {
    create?: XOR<Enumerable<PhotosOnAlbumsCreateWithoutPhotoInput>, Enumerable<PhotosOnAlbumsUncheckedCreateWithoutPhotoInput>>
    connectOrCreate?: Enumerable<PhotosOnAlbumsCreateOrConnectWithoutPhotoInput>
    upsert?: Enumerable<PhotosOnAlbumsUpsertWithWhereUniqueWithoutPhotoInput>
    createMany?: PhotosOnAlbumsCreateManyPhotoInputEnvelope
    set?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    disconnect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    delete?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    connect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    update?: Enumerable<PhotosOnAlbumsUpdateWithWhereUniqueWithoutPhotoInput>
    updateMany?: Enumerable<PhotosOnAlbumsUpdateManyWithWhereWithoutPhotoInput>
    deleteMany?: Enumerable<PhotosOnAlbumsScalarWhereInput>
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

  export type PhotosOnAlbumsUncheckedUpdateManyWithoutPhotoNestedInput = {
    create?: XOR<Enumerable<PhotosOnAlbumsCreateWithoutPhotoInput>, Enumerable<PhotosOnAlbumsUncheckedCreateWithoutPhotoInput>>
    connectOrCreate?: Enumerable<PhotosOnAlbumsCreateOrConnectWithoutPhotoInput>
    upsert?: Enumerable<PhotosOnAlbumsUpsertWithWhereUniqueWithoutPhotoInput>
    createMany?: PhotosOnAlbumsCreateManyPhotoInputEnvelope
    set?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    disconnect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    delete?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    connect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    update?: Enumerable<PhotosOnAlbumsUpdateWithWhereUniqueWithoutPhotoInput>
    updateMany?: Enumerable<PhotosOnAlbumsUpdateManyWithWhereWithoutPhotoInput>
    deleteMany?: Enumerable<PhotosOnAlbumsScalarWhereInput>
  }

  export type PhotoCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<PhotoCreateWithoutAlbumsInput, PhotoUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutAlbumsInput
    connect?: PhotoWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutPhotosInput = {
    create?: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPhotosInput
    connect?: AlbumWhereUniqueInput
  }

  export type PhotoUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<PhotoCreateWithoutAlbumsInput, PhotoUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutAlbumsInput
    upsert?: PhotoUpsertWithoutAlbumsInput
    connect?: PhotoWhereUniqueInput
    update?: XOR<PhotoUpdateWithoutAlbumsInput, PhotoUncheckedUpdateWithoutAlbumsInput>
  }

  export type AlbumUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPhotosInput
    upsert?: AlbumUpsertWithoutPhotosInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<AlbumUpdateWithoutPhotosInput, AlbumUncheckedUpdateWithoutPhotosInput>
  }

  export type PhotosOnAlbumsCreateNestedManyWithoutAlbumInput = {
    create?: XOR<Enumerable<PhotosOnAlbumsCreateWithoutAlbumInput>, Enumerable<PhotosOnAlbumsUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<PhotosOnAlbumsCreateOrConnectWithoutAlbumInput>
    createMany?: PhotosOnAlbumsCreateManyAlbumInputEnvelope
    connect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
  }

  export type PhotosOnAlbumsUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<Enumerable<PhotosOnAlbumsCreateWithoutAlbumInput>, Enumerable<PhotosOnAlbumsUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<PhotosOnAlbumsCreateOrConnectWithoutAlbumInput>
    createMany?: PhotosOnAlbumsCreateManyAlbumInputEnvelope
    connect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
  }

  export type PhotosOnAlbumsUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<Enumerable<PhotosOnAlbumsCreateWithoutAlbumInput>, Enumerable<PhotosOnAlbumsUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<PhotosOnAlbumsCreateOrConnectWithoutAlbumInput>
    upsert?: Enumerable<PhotosOnAlbumsUpsertWithWhereUniqueWithoutAlbumInput>
    createMany?: PhotosOnAlbumsCreateManyAlbumInputEnvelope
    set?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    disconnect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    delete?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    connect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    update?: Enumerable<PhotosOnAlbumsUpdateWithWhereUniqueWithoutAlbumInput>
    updateMany?: Enumerable<PhotosOnAlbumsUpdateManyWithWhereWithoutAlbumInput>
    deleteMany?: Enumerable<PhotosOnAlbumsScalarWhereInput>
  }

  export type PhotosOnAlbumsUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<Enumerable<PhotosOnAlbumsCreateWithoutAlbumInput>, Enumerable<PhotosOnAlbumsUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<PhotosOnAlbumsCreateOrConnectWithoutAlbumInput>
    upsert?: Enumerable<PhotosOnAlbumsUpsertWithWhereUniqueWithoutAlbumInput>
    createMany?: PhotosOnAlbumsCreateManyAlbumInputEnvelope
    set?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    disconnect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    delete?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    connect?: Enumerable<PhotosOnAlbumsWhereUniqueInput>
    update?: Enumerable<PhotosOnAlbumsUpdateWithWhereUniqueWithoutAlbumInput>
    updateMany?: Enumerable<PhotosOnAlbumsUpdateManyWithWhereWithoutAlbumInput>
    deleteMany?: Enumerable<PhotosOnAlbumsScalarWhereInput>
  }

  export type PhotoCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<PhotoCreateWithoutPurchasesInput, PhotoUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutPurchasesInput
    connect?: PhotoWhereUniqueInput
  }

  export type CartCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<CartCreateWithoutPurchasesInput, CartUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: CartCreateOrConnectWithoutPurchasesInput
    connect?: CartWhereUniqueInput
  }

  export type PhotoUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<PhotoCreateWithoutPurchasesInput, PhotoUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutPurchasesInput
    upsert?: PhotoUpsertWithoutPurchasesInput
    connect?: PhotoWhereUniqueInput
    update?: XOR<PhotoUpdateWithoutPurchasesInput, PhotoUncheckedUpdateWithoutPurchasesInput>
  }

  export type CartUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<CartCreateWithoutPurchasesInput, CartUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: CartCreateOrConnectWithoutPurchasesInput
    upsert?: CartUpsertWithoutPurchasesInput
    connect?: CartWhereUniqueInput
    update?: XOR<CartUpdateWithoutPurchasesInput, CartUncheckedUpdateWithoutPurchasesInput>
  }

  export type EmailCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<EmailCreateWithoutNotificationsInput, EmailUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: EmailCreateOrConnectWithoutNotificationsInput
    connect?: EmailWhereUniqueInput
  }

  export type EmailUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<EmailCreateWithoutNotificationsInput, EmailUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: EmailCreateOrConnectWithoutNotificationsInput
    upsert?: EmailUpsertWithoutNotificationsInput
    connect?: EmailWhereUniqueInput
    update?: XOR<EmailUpdateWithoutNotificationsInput, EmailUncheckedUpdateWithoutNotificationsInput>
  }

  export type PurchaseCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutCartInput>, Enumerable<PurchaseUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutCartInput>
    createMany?: PurchaseCreateManyCartInputEnvelope
    connect?: Enumerable<PurchaseWhereUniqueInput>
  }

  export type EmailCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<EmailCreateWithoutPurchasesInput, EmailUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: EmailCreateOrConnectWithoutPurchasesInput
    connect?: EmailWhereUniqueInput
  }

  export type PurchaseUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutCartInput>, Enumerable<PurchaseUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutCartInput>
    createMany?: PurchaseCreateManyCartInputEnvelope
    connect?: Enumerable<PurchaseWhereUniqueInput>
  }

  export type PurchaseUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutCartInput>, Enumerable<PurchaseUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<PurchaseUpsertWithWhereUniqueWithoutCartInput>
    createMany?: PurchaseCreateManyCartInputEnvelope
    set?: Enumerable<PurchaseWhereUniqueInput>
    disconnect?: Enumerable<PurchaseWhereUniqueInput>
    delete?: Enumerable<PurchaseWhereUniqueInput>
    connect?: Enumerable<PurchaseWhereUniqueInput>
    update?: Enumerable<PurchaseUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<PurchaseUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<PurchaseScalarWhereInput>
  }

  export type EmailUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<EmailCreateWithoutPurchasesInput, EmailUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: EmailCreateOrConnectWithoutPurchasesInput
    upsert?: EmailUpsertWithoutPurchasesInput
    connect?: EmailWhereUniqueInput
    update?: XOR<EmailUpdateWithoutPurchasesInput, EmailUncheckedUpdateWithoutPurchasesInput>
  }

  export type PurchaseUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutCartInput>, Enumerable<PurchaseUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<PurchaseUpsertWithWhereUniqueWithoutCartInput>
    createMany?: PurchaseCreateManyCartInputEnvelope
    set?: Enumerable<PurchaseWhereUniqueInput>
    disconnect?: Enumerable<PurchaseWhereUniqueInput>
    delete?: Enumerable<PurchaseWhereUniqueInput>
    connect?: Enumerable<PurchaseWhereUniqueInput>
    update?: Enumerable<PurchaseUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<PurchaseUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<PurchaseScalarWhereInput>
  }

  export type CartCreateNestedManyWithoutEmailInput = {
    create?: XOR<Enumerable<CartCreateWithoutEmailInput>, Enumerable<CartUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutEmailInput>
    createMany?: CartCreateManyEmailInputEnvelope
    connect?: Enumerable<CartWhereUniqueInput>
  }

  export type NotificationCreateNestedManyWithoutEmailInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutEmailInput>, Enumerable<NotificationUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutEmailInput>
    createMany?: NotificationCreateManyEmailInputEnvelope
    connect?: Enumerable<NotificationWhereUniqueInput>
  }

  export type CartUncheckedCreateNestedManyWithoutEmailInput = {
    create?: XOR<Enumerable<CartCreateWithoutEmailInput>, Enumerable<CartUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutEmailInput>
    createMany?: CartCreateManyEmailInputEnvelope
    connect?: Enumerable<CartWhereUniqueInput>
  }

  export type NotificationUncheckedCreateNestedManyWithoutEmailInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutEmailInput>, Enumerable<NotificationUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutEmailInput>
    createMany?: NotificationCreateManyEmailInputEnvelope
    connect?: Enumerable<NotificationWhereUniqueInput>
  }

  export type CartUpdateManyWithoutEmailNestedInput = {
    create?: XOR<Enumerable<CartCreateWithoutEmailInput>, Enumerable<CartUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutEmailInput>
    upsert?: Enumerable<CartUpsertWithWhereUniqueWithoutEmailInput>
    createMany?: CartCreateManyEmailInputEnvelope
    set?: Enumerable<CartWhereUniqueInput>
    disconnect?: Enumerable<CartWhereUniqueInput>
    delete?: Enumerable<CartWhereUniqueInput>
    connect?: Enumerable<CartWhereUniqueInput>
    update?: Enumerable<CartUpdateWithWhereUniqueWithoutEmailInput>
    updateMany?: Enumerable<CartUpdateManyWithWhereWithoutEmailInput>
    deleteMany?: Enumerable<CartScalarWhereInput>
  }

  export type NotificationUpdateManyWithoutEmailNestedInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutEmailInput>, Enumerable<NotificationUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutEmailInput>
    upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutEmailInput>
    createMany?: NotificationCreateManyEmailInputEnvelope
    set?: Enumerable<NotificationWhereUniqueInput>
    disconnect?: Enumerable<NotificationWhereUniqueInput>
    delete?: Enumerable<NotificationWhereUniqueInput>
    connect?: Enumerable<NotificationWhereUniqueInput>
    update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutEmailInput>
    updateMany?: Enumerable<NotificationUpdateManyWithWhereWithoutEmailInput>
    deleteMany?: Enumerable<NotificationScalarWhereInput>
  }

  export type CartUncheckedUpdateManyWithoutEmailNestedInput = {
    create?: XOR<Enumerable<CartCreateWithoutEmailInput>, Enumerable<CartUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutEmailInput>
    upsert?: Enumerable<CartUpsertWithWhereUniqueWithoutEmailInput>
    createMany?: CartCreateManyEmailInputEnvelope
    set?: Enumerable<CartWhereUniqueInput>
    disconnect?: Enumerable<CartWhereUniqueInput>
    delete?: Enumerable<CartWhereUniqueInput>
    connect?: Enumerable<CartWhereUniqueInput>
    update?: Enumerable<CartUpdateWithWhereUniqueWithoutEmailInput>
    updateMany?: Enumerable<CartUpdateManyWithWhereWithoutEmailInput>
    deleteMany?: Enumerable<CartScalarWhereInput>
  }

  export type NotificationUncheckedUpdateManyWithoutEmailNestedInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutEmailInput>, Enumerable<NotificationUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutEmailInput>
    upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutEmailInput>
    createMany?: NotificationCreateManyEmailInputEnvelope
    set?: Enumerable<NotificationWhereUniqueInput>
    disconnect?: Enumerable<NotificationWhereUniqueInput>
    delete?: Enumerable<NotificationWhereUniqueInput>
    connect?: Enumerable<NotificationWhereUniqueInput>
    update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutEmailInput>
    updateMany?: Enumerable<NotificationUpdateManyWithWhereWithoutEmailInput>
    deleteMany?: Enumerable<NotificationScalarWhereInput>
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
    cart: CartCreateNestedOneWithoutPurchasesInput
    createdAt?: Date | string
  }

  export type PurchaseUncheckedCreateWithoutPhotoInput = {
    id?: number
    cartId: number
    createdAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutPhotoInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutPhotoInput, PurchaseUncheckedCreateWithoutPhotoInput>
  }

  export type PurchaseCreateManyPhotoInputEnvelope = {
    data: Enumerable<PurchaseCreateManyPhotoInput>
    skipDuplicates?: boolean
  }

  export type PhotosOnAlbumsCreateWithoutPhotoInput = {
    album: AlbumCreateNestedOneWithoutPhotosInput
    createdAt?: Date | string
  }

  export type PhotosOnAlbumsUncheckedCreateWithoutPhotoInput = {
    albumId: number
    createdAt?: Date | string
  }

  export type PhotosOnAlbumsCreateOrConnectWithoutPhotoInput = {
    where: PhotosOnAlbumsWhereUniqueInput
    create: XOR<PhotosOnAlbumsCreateWithoutPhotoInput, PhotosOnAlbumsUncheckedCreateWithoutPhotoInput>
  }

  export type PhotosOnAlbumsCreateManyPhotoInputEnvelope = {
    data: Enumerable<PhotosOnAlbumsCreateManyPhotoInput>
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
    photoId?: IntFilter | number
    cartId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type PhotosOnAlbumsUpsertWithWhereUniqueWithoutPhotoInput = {
    where: PhotosOnAlbumsWhereUniqueInput
    update: XOR<PhotosOnAlbumsUpdateWithoutPhotoInput, PhotosOnAlbumsUncheckedUpdateWithoutPhotoInput>
    create: XOR<PhotosOnAlbumsCreateWithoutPhotoInput, PhotosOnAlbumsUncheckedCreateWithoutPhotoInput>
  }

  export type PhotosOnAlbumsUpdateWithWhereUniqueWithoutPhotoInput = {
    where: PhotosOnAlbumsWhereUniqueInput
    data: XOR<PhotosOnAlbumsUpdateWithoutPhotoInput, PhotosOnAlbumsUncheckedUpdateWithoutPhotoInput>
  }

  export type PhotosOnAlbumsUpdateManyWithWhereWithoutPhotoInput = {
    where: PhotosOnAlbumsScalarWhereInput
    data: XOR<PhotosOnAlbumsUpdateManyMutationInput, PhotosOnAlbumsUncheckedUpdateManyWithoutAlbumsInput>
  }

  export type PhotosOnAlbumsScalarWhereInput = {
    AND?: Enumerable<PhotosOnAlbumsScalarWhereInput>
    OR?: Enumerable<PhotosOnAlbumsScalarWhereInput>
    NOT?: Enumerable<PhotosOnAlbumsScalarWhereInput>
    photoId?: IntFilter | number
    albumId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type PhotoCreateWithoutAlbumsInput = {
    previewUrl: string
    fullUrl: string
    rawUrl: string
    captureDate: Date | string
    price: number
    purchases?: PurchaseCreateNestedManyWithoutPhotoInput
    createdAt?: Date | string
  }

  export type PhotoUncheckedCreateWithoutAlbumsInput = {
    id?: number
    previewUrl: string
    fullUrl: string
    rawUrl: string
    captureDate: Date | string
    price: number
    purchases?: PurchaseUncheckedCreateNestedManyWithoutPhotoInput
    createdAt?: Date | string
  }

  export type PhotoCreateOrConnectWithoutAlbumsInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutAlbumsInput, PhotoUncheckedCreateWithoutAlbumsInput>
  }

  export type AlbumCreateWithoutPhotosInput = {
    name: string
    createdAt?: Date | string
  }

  export type AlbumUncheckedCreateWithoutPhotosInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type AlbumCreateOrConnectWithoutPhotosInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
  }

  export type PhotoUpsertWithoutAlbumsInput = {
    update: XOR<PhotoUpdateWithoutAlbumsInput, PhotoUncheckedUpdateWithoutAlbumsInput>
    create: XOR<PhotoCreateWithoutAlbumsInput, PhotoUncheckedCreateWithoutAlbumsInput>
  }

  export type PhotoUpdateWithoutAlbumsInput = {
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    purchases?: PurchaseUpdateManyWithoutPhotoNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    purchases?: PurchaseUncheckedUpdateManyWithoutPhotoNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUpsertWithoutPhotosInput = {
    update: XOR<AlbumUpdateWithoutPhotosInput, AlbumUncheckedUpdateWithoutPhotosInput>
    create: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
  }

  export type AlbumUpdateWithoutPhotosInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosOnAlbumsCreateWithoutAlbumInput = {
    photo: PhotoCreateNestedOneWithoutAlbumsInput
    createdAt?: Date | string
  }

  export type PhotosOnAlbumsUncheckedCreateWithoutAlbumInput = {
    photoId: number
    createdAt?: Date | string
  }

  export type PhotosOnAlbumsCreateOrConnectWithoutAlbumInput = {
    where: PhotosOnAlbumsWhereUniqueInput
    create: XOR<PhotosOnAlbumsCreateWithoutAlbumInput, PhotosOnAlbumsUncheckedCreateWithoutAlbumInput>
  }

  export type PhotosOnAlbumsCreateManyAlbumInputEnvelope = {
    data: Enumerable<PhotosOnAlbumsCreateManyAlbumInput>
    skipDuplicates?: boolean
  }

  export type PhotosOnAlbumsUpsertWithWhereUniqueWithoutAlbumInput = {
    where: PhotosOnAlbumsWhereUniqueInput
    update: XOR<PhotosOnAlbumsUpdateWithoutAlbumInput, PhotosOnAlbumsUncheckedUpdateWithoutAlbumInput>
    create: XOR<PhotosOnAlbumsCreateWithoutAlbumInput, PhotosOnAlbumsUncheckedCreateWithoutAlbumInput>
  }

  export type PhotosOnAlbumsUpdateWithWhereUniqueWithoutAlbumInput = {
    where: PhotosOnAlbumsWhereUniqueInput
    data: XOR<PhotosOnAlbumsUpdateWithoutAlbumInput, PhotosOnAlbumsUncheckedUpdateWithoutAlbumInput>
  }

  export type PhotosOnAlbumsUpdateManyWithWhereWithoutAlbumInput = {
    where: PhotosOnAlbumsScalarWhereInput
    data: XOR<PhotosOnAlbumsUpdateManyMutationInput, PhotosOnAlbumsUncheckedUpdateManyWithoutPhotosInput>
  }

  export type PhotoCreateWithoutPurchasesInput = {
    previewUrl: string
    fullUrl: string
    rawUrl: string
    captureDate: Date | string
    price: number
    albums?: PhotosOnAlbumsCreateNestedManyWithoutPhotoInput
    createdAt?: Date | string
  }

  export type PhotoUncheckedCreateWithoutPurchasesInput = {
    id?: number
    previewUrl: string
    fullUrl: string
    rawUrl: string
    captureDate: Date | string
    price: number
    albums?: PhotosOnAlbumsUncheckedCreateNestedManyWithoutPhotoInput
    createdAt?: Date | string
  }

  export type PhotoCreateOrConnectWithoutPurchasesInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutPurchasesInput, PhotoUncheckedCreateWithoutPurchasesInput>
  }

  export type CartCreateWithoutPurchasesInput = {
    cartIdentifier: string
    email: EmailCreateNestedOneWithoutPurchasesInput
    date?: Date | string
  }

  export type CartUncheckedCreateWithoutPurchasesInput = {
    id?: number
    cartIdentifier: string
    emailId: number
    date?: Date | string
  }

  export type CartCreateOrConnectWithoutPurchasesInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutPurchasesInput, CartUncheckedCreateWithoutPurchasesInput>
  }

  export type PhotoUpsertWithoutPurchasesInput = {
    update: XOR<PhotoUpdateWithoutPurchasesInput, PhotoUncheckedUpdateWithoutPurchasesInput>
    create: XOR<PhotoCreateWithoutPurchasesInput, PhotoUncheckedCreateWithoutPurchasesInput>
  }

  export type PhotoUpdateWithoutPurchasesInput = {
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    albums?: PhotosOnAlbumsUpdateManyWithoutPhotoNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    previewUrl?: StringFieldUpdateOperationsInput | string
    fullUrl?: StringFieldUpdateOperationsInput | string
    rawUrl?: StringFieldUpdateOperationsInput | string
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    albums?: PhotosOnAlbumsUncheckedUpdateManyWithoutPhotoNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUpsertWithoutPurchasesInput = {
    update: XOR<CartUpdateWithoutPurchasesInput, CartUncheckedUpdateWithoutPurchasesInput>
    create: XOR<CartCreateWithoutPurchasesInput, CartUncheckedCreateWithoutPurchasesInput>
  }

  export type CartUpdateWithoutPurchasesInput = {
    cartIdentifier?: StringFieldUpdateOperationsInput | string
    email?: EmailUpdateOneRequiredWithoutPurchasesNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartIdentifier?: StringFieldUpdateOperationsInput | string
    emailId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateWithoutNotificationsInput = {
    email: string
    purchases?: CartCreateNestedManyWithoutEmailInput
    createdAt?: Date | string
  }

  export type EmailUncheckedCreateWithoutNotificationsInput = {
    id?: number
    email: string
    purchases?: CartUncheckedCreateNestedManyWithoutEmailInput
    createdAt?: Date | string
  }

  export type EmailCreateOrConnectWithoutNotificationsInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutNotificationsInput, EmailUncheckedCreateWithoutNotificationsInput>
  }

  export type EmailUpsertWithoutNotificationsInput = {
    update: XOR<EmailUpdateWithoutNotificationsInput, EmailUncheckedUpdateWithoutNotificationsInput>
    create: XOR<EmailCreateWithoutNotificationsInput, EmailUncheckedCreateWithoutNotificationsInput>
  }

  export type EmailUpdateWithoutNotificationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    purchases?: CartUpdateManyWithoutEmailNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    purchases?: CartUncheckedUpdateManyWithoutEmailNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateWithoutCartInput = {
    photo: PhotoCreateNestedOneWithoutPurchasesInput
    createdAt?: Date | string
  }

  export type PurchaseUncheckedCreateWithoutCartInput = {
    id?: number
    photoId: number
    createdAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutCartInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutCartInput, PurchaseUncheckedCreateWithoutCartInput>
  }

  export type PurchaseCreateManyCartInputEnvelope = {
    data: Enumerable<PurchaseCreateManyCartInput>
    skipDuplicates?: boolean
  }

  export type EmailCreateWithoutPurchasesInput = {
    email: string
    notifications?: NotificationCreateNestedManyWithoutEmailInput
    createdAt?: Date | string
  }

  export type EmailUncheckedCreateWithoutPurchasesInput = {
    id?: number
    email: string
    notifications?: NotificationUncheckedCreateNestedManyWithoutEmailInput
    createdAt?: Date | string
  }

  export type EmailCreateOrConnectWithoutPurchasesInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutPurchasesInput, EmailUncheckedCreateWithoutPurchasesInput>
  }

  export type PurchaseUpsertWithWhereUniqueWithoutCartInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutCartInput, PurchaseUncheckedUpdateWithoutCartInput>
    create: XOR<PurchaseCreateWithoutCartInput, PurchaseUncheckedCreateWithoutCartInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutCartInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutCartInput, PurchaseUncheckedUpdateWithoutCartInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutCartInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutPurchasesInput>
  }

  export type EmailUpsertWithoutPurchasesInput = {
    update: XOR<EmailUpdateWithoutPurchasesInput, EmailUncheckedUpdateWithoutPurchasesInput>
    create: XOR<EmailCreateWithoutPurchasesInput, EmailUncheckedCreateWithoutPurchasesInput>
  }

  export type EmailUpdateWithoutPurchasesInput = {
    email?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationUpdateManyWithoutEmailNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationUncheckedUpdateManyWithoutEmailNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateWithoutEmailInput = {
    cartIdentifier: string
    purchases?: PurchaseCreateNestedManyWithoutCartInput
    date?: Date | string
  }

  export type CartUncheckedCreateWithoutEmailInput = {
    id?: number
    cartIdentifier: string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCartInput
    date?: Date | string
  }

  export type CartCreateOrConnectWithoutEmailInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutEmailInput, CartUncheckedCreateWithoutEmailInput>
  }

  export type CartCreateManyEmailInputEnvelope = {
    data: Enumerable<CartCreateManyEmailInput>
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutEmailInput = {
    alertForDate: Date | string
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutEmailInput = {
    id?: number
    alertForDate: Date | string
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutEmailInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutEmailInput, NotificationUncheckedCreateWithoutEmailInput>
  }

  export type NotificationCreateManyEmailInputEnvelope = {
    data: Enumerable<NotificationCreateManyEmailInput>
    skipDuplicates?: boolean
  }

  export type CartUpsertWithWhereUniqueWithoutEmailInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutEmailInput, CartUncheckedUpdateWithoutEmailInput>
    create: XOR<CartCreateWithoutEmailInput, CartUncheckedCreateWithoutEmailInput>
  }

  export type CartUpdateWithWhereUniqueWithoutEmailInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutEmailInput, CartUncheckedUpdateWithoutEmailInput>
  }

  export type CartUpdateManyWithWhereWithoutEmailInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutPurchasesInput>
  }

  export type CartScalarWhereInput = {
    AND?: Enumerable<CartScalarWhereInput>
    OR?: Enumerable<CartScalarWhereInput>
    NOT?: Enumerable<CartScalarWhereInput>
    id?: IntFilter | number
    cartIdentifier?: StringFilter | string
    emailId?: IntFilter | number
    date?: DateTimeFilter | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutEmailInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutEmailInput, NotificationUncheckedUpdateWithoutEmailInput>
    create: XOR<NotificationCreateWithoutEmailInput, NotificationUncheckedCreateWithoutEmailInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutEmailInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutEmailInput, NotificationUncheckedUpdateWithoutEmailInput>
  }

  export type NotificationUpdateManyWithWhereWithoutEmailInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutNotificationsInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: Enumerable<NotificationScalarWhereInput>
    OR?: Enumerable<NotificationScalarWhereInput>
    NOT?: Enumerable<NotificationScalarWhereInput>
    id?: IntFilter | number
    emailId?: IntFilter | number
    alertForDate?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type PurchaseCreateManyPhotoInput = {
    id?: number
    cartId: number
    createdAt?: Date | string
  }

  export type PhotosOnAlbumsCreateManyPhotoInput = {
    albumId: number
    createdAt?: Date | string
  }

  export type PurchaseUpdateWithoutPhotoInput = {
    cart?: CartUpdateOneRequiredWithoutPurchasesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateWithoutPhotoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosOnAlbumsUpdateWithoutPhotoInput = {
    album?: AlbumUpdateOneRequiredWithoutPhotosNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosOnAlbumsUncheckedUpdateWithoutPhotoInput = {
    albumId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosOnAlbumsUncheckedUpdateManyWithoutAlbumsInput = {
    albumId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosOnAlbumsCreateManyAlbumInput = {
    photoId: number
    createdAt?: Date | string
  }

  export type PhotosOnAlbumsUpdateWithoutAlbumInput = {
    photo?: PhotoUpdateOneRequiredWithoutAlbumsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosOnAlbumsUncheckedUpdateWithoutAlbumInput = {
    photoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosOnAlbumsUncheckedUpdateManyWithoutPhotosInput = {
    photoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyCartInput = {
    id?: number
    photoId: number
    createdAt?: Date | string
  }

  export type PurchaseUpdateWithoutCartInput = {
    photo?: PhotoUpdateOneRequiredWithoutPurchasesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateManyEmailInput = {
    id?: number
    cartIdentifier: string
    date?: Date | string
  }

  export type NotificationCreateManyEmailInput = {
    id?: number
    alertForDate: Date | string
    createdAt?: Date | string
  }

  export type CartUpdateWithoutEmailInput = {
    cartIdentifier?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUpdateManyWithoutCartNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateWithoutEmailInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartIdentifier?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUncheckedUpdateManyWithoutCartNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartIdentifier?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutEmailInput = {
    alertForDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutEmailInput = {
    id?: IntFieldUpdateOperationsInput | number
    alertForDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    alertForDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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