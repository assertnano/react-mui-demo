type RadioGroupOption = (typeof radioGroupOptions)[number];

type NumberRange = [number, number];

const radioGroupOptions = ['female', 'male'] as const;

export type FormValues = {
  Native: string;
  TextField: string;
  Select: number;
  Checkbox: boolean;
  switch: boolean;
  RadioGroup: RadioGroupOption;
  MUI_Slider: NumberRange;
  //   country: NestedValue<{ code: string; label: string; phone: string }>;
};
