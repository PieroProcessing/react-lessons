import * as T from 'purifree-ts';

type UnvalidatedCustomerInfo = {
  name: string;
  email: string;
};

type UnvalidatedOrder = {
  OrderId: string;
  CustomerInfo: UnvalidatedCustomerInfo;
};

export const extendCodec = <T>(base: T.Codec<T>, ...decoders: Array<(value: T) => T.Either<string, T>>): T.Codec<T> => {
  return T.Codec.custom<T>({
    ...base,
    decode: (value) => (decoders ?? []).reduce((decoded, decoder) => decoded.chain(decoder), base.decode(value)),
  });
};
const OrderId = extendCodec(T.unknown, (str: unknown) =>
  T.string.decode(str).isRight() ? T.Right(str) : T.Left(JSON.stringify({ type: 'id', message: 'is not a string' })),
);
// T.Left(idError: string) => T.Left(JSON.stringify({ type: 'id', message: idError })):
// T.Right(valid) => T.Right(valid)
// const OrderId = T.Codec.custom({
//     decode: (input: unknown) => T.string.decode(input),//.isRight()? T.Right(input) : T.Left(JSON.stringify({ type: 'id', message: 'is not a string' })),
//     encode: T.identity
// });
// type id = T.GetInterface<typeof OrderId>;

const EmailTest = new RegExp(
  "[a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
);
// console.log(EmailTest.test('aaagmail.com'));

const ValidatedEmail = T.Codec.custom({
  decode: (input: unknown) =>
    typeof input === 'string' && EmailTest.test(input) ? T.Right(input) : T.Left(JSON.stringify({ type: 'email', message: 'email not formatted ' })),
  encode: T.identity,
});
const ValidateName = T.Codec.custom({
  decode: (input: unknown) =>
    typeof input === 'string' && input.length > 5 ? T.Right(input) : T.Left(JSON.stringify({ type: 'name', message: 'name too short' })),
  encode: T.identity,
});
const ValidatedCustomer = T.Codec.interface({
  name: ValidateName,
  email: ValidatedEmail,
});
// type ValidatedCustomerType = T.GetInterface<typeof ValidatedCustomer>;

const ValidatedOrder = T.Codec.interface({
  OrderId: T.optional(OrderId),
  CustomerInfo: ValidatedCustomer,
  Key: T.nullType,
});
type ValidatedOrderType = T.GetInterface<typeof ValidatedOrder>;

type ValidationOrder = (unvalidatedOrder: UnvalidatedOrder) => T.Either<string, ValidatedOrderType>;

export const validationOrderStep: ValidationOrder = (unvalidatedOrder) =>
  T.pipe(
    T.Either.of(unvalidatedOrder),
    T.chain(ValidatedOrder.decode),
    T.match({
      Right: (validated: ValidatedOrderType) => T.Right(validated),
      Left: (error: unknown) => T.Left(error),
    }),
  );
export const validationOrderStep2: ValidationOrder = T.kleisli(
  (unvalidatedOrder) => T.Either.of(unvalidatedOrder),
  ValidatedOrder.decode,
  (input) => T.Right(input),
);
// let error: string[] = [];

// const mapError = (e: string) => {
//     console.log("🚀 ~ file: App.tsx ~ line 26 ~ mapError ~ e", error)

//     error.push(e)
// }
export const validationOrderStep4 = (unvalidated: unknown): T.Either<string, never> | T.Either<never, ValidatedOrderType> => {
  const validatedOrderId = OrderId.decode((unvalidated as UnvalidatedOrder).OrderId);
  const validatedCustomerName = ValidateName.decode((unvalidated as UnvalidatedOrder).CustomerInfo.name);
  const validatedCustomerEmail = ValidatedEmail.decode((unvalidated as UnvalidatedOrder).CustomerInfo.email);
  const validations = T.Either.lefts([validatedOrderId, validatedCustomerName, validatedCustomerEmail]);
  // const
  // console.log("🚀 ~ file: cart.ts ~ line 77 ~ validationOrderStep4 ~ validations", validations)
  return T.pipe(
    T.Either.of(unvalidated),
    T.chain(ValidatedOrder.decode),
    T.match({
      Right: (validated: ValidatedOrderType) => T.Right(validated),
      Left: () => T.Left(JSON.stringify(validations)),
    }),
  );
};
// export const validationOrderStep3 = curry((unvalidated: unknown) => {
//   const validatedOrderId = OrderId.decode((unvalidated as UnvalidatedOrder).OrderId);
//   const validatedCustomerName = ValidateName.decode((unvalidated as UnvalidatedOrder).CustomerInfo.name).caseOf({
//     Left: (e: string) => T.Left(e),
//     Right: (valid) => T.Right(valid),
//   });
//   const validatedCustomerEmail = ValidatedEmail.decode((unvalidated as UnvalidatedOrder).CustomerInfo.email).caseOf({
//     Left: (e: string) => T.Left(e),
//     Right: (valid) => T.Right(valid),
//   });
//   // const res = pipe(
//   //     validatedOrderId,
//   //     T.chain((id) => pipe(
//   //         validatedCustomerName,
//   //         T.chain((name) => pipe(
//   //             validatedCustomerEmail,
//   //             T.chain(
//   //                 (email) => T.Right({
//   //                     OrderId: id,
//   //                     CustomerInfo: {
//   //                         name: name,
//   //                         email: email
//   //                     },
//   //                     Key: null
//   //                 })
//   //             )
//   //         ))
//   //     )),
//   // )
//   return pipe<T.Either<string, never> | T.Either<never, ValidatedOrderType>>(
//     validatedOrderId,
//     T.caseOf({
//       Left: (idError) => T.Left(idError),
//       Right: (id) =>
//         pipe(
//           validatedCustomerName,
//           T.caseOf({
//             Left: (nameError) => T.Left(nameError),
//             Right: (name) =>
//               pipe(
//                 validatedCustomerEmail,
//                 T.caseOf({
//                   Left: (emailError) => T.Left(emailError),
//                   Right: (email) =>
//                     T.Right({
//                       OrderId: id,
//                       CustomerInfo: {
//                         name: name,
//                         email: email,
//                       },
//                       Key: null,
//                     }),
//                 }),
//               ),
//           }),
//         ),
//     }),
//   );
//   // console.log("🚀 ~ file: cart.ts ~ line 98 ~ validationOrderStep3 ~ res", res)
//   // return res;
//   // return T.Either.of({
//   //     OrderId: validatedOrderId,
//   //     CustomerInfo: {
//   //         name: validatedCustomerName,
//   //         email: validatedCustomerEmail
//   //     },
//   //     Key: null
//   // })
// });

// T.match({
//     Right: (validated: ValidatedOrderType) => validated,
//     Left: (error: unknown) => typeof error === 'string' && T.parseError(error)
// }))

export type { ValidatedOrder, ValidatedOrderType };
