import { FormProvider, useForm } from 'react-hook-form';
import { zodSchema, Schema, defaultValues } from '@schemas/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import MediumForm from './MediumForm';
export default function MFormProvider() {
  const methods = useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(zodSchema),
    defaultValues: defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <MediumForm />
    </FormProvider>
  );
}
