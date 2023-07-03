import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Switch,
  TextField,
} from '@mui/material';
import { DefaultValues, useForm, SubmitHandler, Controller } from 'react-hook-form';
import { FormValues } from '../components/Form/Form.interfaces';
import { defaultValues } from '../components/Form/Form.constants';
import FormButtonsResult from '../components/Form/FormButtonsResult';

let renderCount = 0;

const ReactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = data => alert(JSON.stringify(data));
  renderCount++;

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <h1>{renderCount}</h1>
      <div className='container'>
        <section>
          <label>Native Input:</label>
          <input {...register('Native')} className='input' />
        </section>

        <section>
          <label>MUI Checkbox</label>
          <Controller name='Checkbox' control={control} render={({ field }) => <Checkbox {...field} />} />
        </section>

        <section>
          <label>Radio Group</label>
          <Controller
            render={({ field }) => (
              <RadioGroup aria-label='gender' {...field}>
                <FormControlLabel value='female' control={<Radio />} label='Female' />
                <FormControlLabel value='male' control={<Radio />} label='Male' />
              </RadioGroup>
            )}
            name='RadioGroup'
            control={control}
          />
        </section>

        <section>
          <label>MUI TextField</label>
          <Controller render={({ field }) => <TextField {...field} />} name='TextField' control={control} />
        </section>

        <section>
          <label>MUI Select</label>
          <Controller
            render={({ field }) => (
              <Select {...field}>
                <MenuItem value={10}>Calzado</MenuItem>
                <MenuItem value={20}>Cabeza</MenuItem>
                <MenuItem value={30}>Nada</MenuItem>
              </Select>
            )}
            name='TipoDeAccesorio'
            control={control}
          />
        </section>
        <section>
          <label>MUI Select</label>
          <Controller
            render={({ field }) => (
              <Select {...field}>
                <MenuItem value={1}>gorra</MenuItem>
                <MenuItem value={2}>sombrero</MenuItem>
                <MenuItem value={3}>boina</MenuItem>
              </Select>
            )}
            name='AccesorioCabeza'
            control={control}
          />
        </section>
        <section>
          <label>MUI Select</label>
          <Controller
            render={({ field }) => (
              <Select {...field}>
                <MenuItem value={4}>chancleta</MenuItem>
                <MenuItem value={5}>alpargata</MenuItem>
                <MenuItem value={6}>zapato</MenuItem>
              </Select>
            )}
            name='AccesorioCalzado'
            control={control}
          />
        </section>

        <section>
          <label>MUI Switch</label>
          <Controller name='switch' control={control} render={({ field }) => <Switch {...field} />} />
        </section>

        <section>
          <label>MUI Slider</label>
          <Controller
            name='MUI_Slider'
            control={control}
            defaultValue={[0, 10]}
            render={({ field }) => (
              <Slider
                {...field}
                onChange={(_, value) => {
                  field.onChange(value);
                }}
                valueLabelDisplay='auto'
                max={10}
                step={1}
              />
            )}
          />
        </section>

        <section>
          <label>MUI autocomplete</label>
          {/* <MuiAutoComplete control={control} /> */}
        </section>
      </div>

      <FormButtonsResult {...{ reset }} />
    </form>
  );
};

export default ReactForm;
