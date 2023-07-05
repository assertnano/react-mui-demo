import { DefaultValues } from 'react-hook-form';
import { FormValues } from './Form.interfaces';

export const defaultValues: DefaultValues<FormValues> = {
  Native: '',
  TextField: '',
  Checkbox: false,
  switch: false,
  RadioGroup: 'female',
  MUI_Slider: [0, 10],
  TipoDeAccesorio: 10,
  AccesorioCabeza: 10,
  AccesorioCalzado: 10,
};
