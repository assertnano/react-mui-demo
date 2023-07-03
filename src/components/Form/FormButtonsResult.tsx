import * as React from 'react';
import type { UseFormReset } from 'react-hook-form';
import { FormValues } from './Form.interfaces';

const FormButtonsResult = ({ reset, defaultValues }: { reset: UseFormReset<FormValues>; defaultValues: any }) => (
  <>
    <button
      className='button buttonBlack'
      type='button'
      onClick={() => {
        reset(defaultValues);
      }}
    >
      Reset Form
    </button>
    <button className='button'>submit</button>
  </>
);

export default FormButtonsResult;
