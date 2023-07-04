import { DefaultValues } from 'react-hook-form';
import { FormValues } from './Form.interfaces';

export const defaultValues: DefaultValues<FormValues> = {
  Native: '',
  TextField: '',
  tipoAccesorioId: 1,
  sombreroId: "",
  calzadoId: "",
  Checkbox: false,
  switch: false,
  RadioGroup: 'female',
  MUI_Slider: [0, 10],
  //   country: { code: 'AF', label: 'Afghanistan', phone: '93' },
};
