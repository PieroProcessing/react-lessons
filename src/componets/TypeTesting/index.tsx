import React, { useEffect } from 'react';
import { curry, NonEmptyList } from 'purify-ts';
import { map, mapLeft, pipe, extract } from 'purifree-ts';

import { AppleDecode, checkFruit, isBananas } from '../../models';
import { ActiveCartData, EmptyCart, Items, PaidCartData } from '../../models/order';
import { validationOrderStep4 } from '../../models/cart';

const withInit =
  (dispatchFN: Function, Component: React.FC) =>
    ({ ...props }): JSX.Element => {
      useEffect(() => {
        dispatchFN();
      }, []);
      return <Component {...props} />;
    };

// eslint-disable-next-line no-console
const withFetch = curry(withInit)(() => console.log('get all list records'));

const Child: React.FC = () => <div>test Children</div>;

const InitChild = withFetch(Child);

// const [error, mapError] = useState<string[]>([])

const TypeTesting = (): JSX.Element => {
  /**
   * Working with functions
   */
  const test = {
    OrderId: 11,
    CustomerInfo: {
      name: 'Pippoaaa',
      email: 'a11@gmail.com',
    },
    Key: null,
  };
  const validatedCart = validationOrderStep4(test);
  /*
   * / const validatedCart = validationOrderStep3(test)
   * // // console.log("🚀 ~ file: App.tsx ~ line 42 ~ validatedCart", validatedCart.extract())
   * // // const validatedCart = validationOrderStep(test)
   * // // validatedCart.isRight()?
   * // console.log("🚀 ~ file: App.tsx ~ line 37 ~ validatedCart", validatedCart);
   */
  const value = pipe(
    validatedCart,
    /*
     * caseOf({
     *     Left: (error: string) => parseError(error),
     *     Right: (validatedCart: ValidatedOrderType)=> console.log("🚀 validatedCart", validatedCart.OrderId)
     * }).chainLeft(i => console.log(i)),
     * chainLeft(
     *     (error: {message: string}) => {console.log(error); return L(error)}
     * )
     */
    map((validated) => validated),
    mapLeft((error: string): string[] => JSON.parse(error) as string[]),
    mapLeft((error: Array<string>) => error.map((i): string[] => JSON.parse(i) as string[])),
    // identity,
    extract(),
    /*
     * (e) => console.log(e)
     * ,
     */
  );
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: App.tsx ~ line 64 ~ value', value);
  // console.log(parseError(Maybe.fromPredicate(()=> validatedCart.isLeft(), validatedCart.extract()).extract() || ''));

  /**
   * Working with obj
   */

  const items: NonEmptyList<Items> = NonEmptyList([
    { itemId: 'A001', itemCost: 9 },
    { itemId: 'A001', itemCost: 9 },
  ]);

  const _emptyCart: EmptyCart = { unpaidItems: [] };
  const _listCart: ActiveCartData = { unpaidItems: items };
  const _paidList: PaidCartData = { paidItems: items, payment: 9 };

  // console.log("🚀 ~ file: App.tsx ~ line 27 ~ emptyCart", emptyCart, listCart,paidList )

  /*
   * shoppingCart(paidList)
   * shoppingCart2(listCart);
   */
  /**
   * Working with string
   */
  const appleUnidentified = 'Golden';
  const bananasUnidentified = 'Cavindish';

  const yellowFruit = checkFruit(bananasUnidentified);

  const bananas = isBananas(yellowFruit) && yellowFruit;

  const noFruit = checkFruit('fake');

  const apple = AppleDecode(appleUnidentified);

  /*
   * fruitSalad(bananasUnidentified)
   * ( (apple: AppleVarietyType)=>console.log(`cut ${apple}`))
   * ( (bananas: BananaVarietyType)=>console.log(`peal ${bananas}`));
   */

  return (
    <>
      {`this is a ${apple || ''} apple, this is a ${bananas || ''} bananas, the ${noFruit || ''} is no fruit`}
      <InitChild />
    </>
  );
};

export default TypeTesting;
