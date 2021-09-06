import { string, array, number, GetType, Codec, Maybe, nonEmptyList, NonEmptyList, FromType, nullType } from 'purify-ts';
import { match } from 'ts-pattern';

const Amount = number;

const ItemsCodec = Codec.interface({
  itemId: string,
  itemCost: Amount,
});

type Items = GetType<typeof ItemsCodec>;

/**
 * Empty
 */
type EmptyCartList = { unpaidItems: Array<null> };
export const EmptyCartCodec: Codec<FromType<EmptyCartList>> = Codec.interface({ unpaidItems: array(nullType) });

type EmptyCart = GetType<typeof EmptyCartCodec>;

export const EmptyCartDecode = (cart: unknown): EmptyCartList | undefined => Maybe.fromPredicate(() => EmptyCartCodec.decode(cart).isRight(), cart as EmptyCartList).extract();

/**
 * Active
 */
type ActiveCartListType = { unpaidItems: NonEmptyList<Items> };
const ActiveCartDataCodec: Codec<ActiveCartListType> = Codec.interface({ unpaidItems: nonEmptyList(ItemsCodec) });

export const ActiveCartDecode = (cart: unknown): ActiveCartListType | undefined =>
  Maybe.fromPredicate(() => ActiveCartDataCodec.decode(cart).isRight(), cart as ActiveCartListType).extract();

type ActiveCartData = GetType<typeof ActiveCartDataCodec>;

/**
 * Payd
 */
export const PaidCartDataCodec = Codec.interface({ paidItems: nonEmptyList(ItemsCodec), payment: Amount });
type PaidCartData = GetType<typeof PaidCartDataCodec>;

export const PaidCartDataDecode = (cart: unknown): PaidCartData | undefined =>
  Maybe.fromPredicate(() => PaidCartDataCodec.decode(cart).isRight(), cart as PaidCartData).extract();

/**
 * Task
 */
export const shoppingCart = (unknownCart: unknown): void =>
  match(unknownCart)
    .with(EmptyCartDecode(unknownCart), (cart: EmptyCartList) => console.log('cart is empty', cart?.unpaidItems))
    .with(ActiveCartDecode(unknownCart), (cart: ActiveCartData) => console.log('cart items are n: ', cart.unpaidItems.length))
    .with(PaidCartDataDecode(unknownCart), (cart: PaidCartData) => console.log('paid are ', cart.payment))
    .run();
export const shoppingCart2 = (unknownCart: unknown): void =>
  match(unknownCart)
    .when(
      (predicate): predicate is EmptyCart => EmptyCartCodec.decode(predicate).isRight(),
      (cart: EmptyCart) => console.log(`cart2 is empty ${JSON.stringify(cart)}`),
    )
    .when(
      (predicate): predicate is ActiveCartData => ActiveCartDataCodec.decode(predicate).isRight(),
      (cart: ActiveCartData) => console.log(`cart2 is active ${JSON.stringify(cart)}`),
    )
    .run();

/**
 * point free
 */

// export const pointfree = (input: string):  =>
//   pipe(
//     Just(input),
//     map((name) => name.toUpperCase()),
//     filter((name) => name.length > 5),
//     chain((name) => (Math.random() > 0.5 ? Just(`${name} lucky :)`) : Nothing)),
//   );
export type { Items, EmptyCart, ActiveCartData, PaidCartData };
