import { Codec, curry, GetType, Left, Maybe, Right, identity } from 'purify-ts';
import { match } from 'ts-pattern';

type Apples = 'Golden' | 'Fuji';

export const AppleVariety = Codec.custom<Apples>({
  decode: (input) => (input === 'Golden' || input === 'Fuji' ? Right(input as Apples) : Left('Nothing')),
  encode: identity,
});

type AppleVarietyType = GetType<typeof AppleVariety>;

export const isApple = (input: unknown): input is AppleVarietyType => AppleVariety.decode(input).isRight();

const AppleCodec = (appleUnidentified: unknown): Maybe<AppleVarietyType> => Maybe.fromPredicate(() => isApple(appleUnidentified), appleUnidentified as AppleVarietyType);

export const AppleDecode = (appleUnidentified: unknown): Apples | undefined => AppleCodec(appleUnidentified)?.extract();

type Bananas = 'Manazon' | 'Cavindish';

export const BananaVariety = Codec.custom<Bananas>({
  decode: (input) => (input === 'Manazon' || input === 'Cavindish' ? Right(input as Bananas) : Left('Nothing')),
  encode: identity,
});

// export const BananaDecode = (bananaUnidentified: unknown) => BananaVariety.decode(bananaUnidentified).toMaybe();
export const isBananas = (input: unknown): input is BananaVarietyType => BananaVariety.decode(input).isRight();

const BananaCodec = (bananaUnidentified: unknown): Maybe<BananaVarietyType> =>
  Maybe.fromPredicate(() => isBananas(bananaUnidentified), bananaUnidentified as BananaVarietyType);

export const BananaDecode = (bananaUnidentified: unknown): Bananas | undefined => BananaCodec(bananaUnidentified)?.extract();

type BananaVarietyType = GetType<typeof BananaVariety>;

export const FruitVariety = Codec.custom<AppleVarietyType | BananaVarietyType>({
  decode: (input) =>
    AppleCodec(input)
      .toEither('Nothing')
      .chainLeft((i) => BananaCodec(input).toEither('Nothing')),
  encode: identity,
});
// export const FruitVariety = Codec.custom<AppleVarietyType | BananaVarietyType>({
//     decode: (input) => AppleVariety.decode(input).map(identity)
//         .chainLeft(i => BananaVariety.decode(input).map(identity)),
//     encode: identity
// })

type FruitVarietyType = GetType<typeof FruitVariety>;

export const checkFruit = (input: unknown): Apples | Bananas | undefined =>
  FruitVariety.decode(input)
    .map(identity)
    .mapLeft(() => undefined)
    .extract();

type FruitSaladCallback = <T>(fruit: T | undefined) => void;

export const fruitSalad = curry((unUdentifyFruit: unknown, cutApples: FruitSaladCallback, pealBananas: FruitSaladCallback): void =>
  match(unUdentifyFruit)
    .with(AppleDecode(unUdentifyFruit), (apple): void => cutApples(apple))
    .with(BananaDecode(unUdentifyFruit), (bananas): void => pealBananas(bananas))
    .run(),
);

export type { FruitVarietyType, AppleVarietyType, BananaVarietyType };
