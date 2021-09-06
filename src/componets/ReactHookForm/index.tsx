import React from 'react';
import { useForm } from 'react-hook-form';

export const RHookForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const input = watch((value, { name, type }) => (name === 'amount' ? value : 'NaN'));
  input.add(() => {
    console.log('value');
  });

  // console.log("🚀 ~ file: index.tsx ~ line 7 ~ RHookForm ~ input", input)
  return (
    <div>
      <input type="number" {...register('amount')} name="amount" />
      <input type="range" {...register('range_amount')} name="range_amount" />
    </div>
  );
};
