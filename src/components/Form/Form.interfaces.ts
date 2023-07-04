type RadioGroupOption = (typeof radioGroupOptions)[number];

type NumberRange = [number, number];

const radioGroupOptions = ['female', 'male'] as const;

type SelectValue = number | '';

export type FormValues = {
  Native: string;
  TextField: string;
  tipoAccesorioId: number;
  sombreroId: SelectValue;
  calzadoId: SelectValue;
  TipoDeAccesorio: number;
  AccesorioCabeza: number;
  AccesorioCalzado: number;
  Checkbox: boolean;
  switch: boolean;
  RadioGroup: RadioGroupOption;
  MUI_Slider: NumberRange;
  //   country: NestedValue<{ code: string; label: string; phone: string }>;
};
