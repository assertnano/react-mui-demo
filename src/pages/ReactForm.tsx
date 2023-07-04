import { Checkbox, FormControlLabel, Radio, RadioGroup, Slider, Stack, Switch, TextField } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { FormValues } from '../components/Form/Form.interfaces';
import { defaultValues } from '../components/Form/Form.constants';
import FormButtonsResult from '../components/Form/FormButtonsResult';
import { calzados, sombreros, tiposAccesorio } from '../database/selects';
import FormSelect from '../components/Form/FormSelect';
import { useEffect } from 'react';
import Header from './Header';

let renderCount = 0;

const ReactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues });

  const onSubmit: SubmitHandler<FormValues> = data => alert(JSON.stringify(data));
  renderCount++;

  console.log('Errors: ', errors);

  useEffect(() => {
    const tipoAccesorioId = watch('tipoAccesorioId');
    if (tipoAccesorioId === 2) {
      setValue('calzadoId', 23);
      setValue('sombreroId', '');
    } else if (tipoAccesorioId === 1) {
      setValue('calzadoId', '');
      setValue('sombreroId', 12);
    }
  }, [watch('tipoAccesorioId')]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <Header renderCount={renderCount} />

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

        {/* SELECTS */}
        <Stack direction='row' spacing={2} my={8}>
          <FormSelect control={control} name='tipoAccesorioId' options={tiposAccesorio} label='Tipo de Accesorio' />

          <FormSelect control={control} name='sombreroId' options={sombreros} label='Sombreros' />

          <FormSelect control={control} name='calzadoId' options={calzados} label='Calzados' />
        </Stack>

        <section>
          <label>MUI Switch</label>
          <Controller name='switch' control={control} render={({ field }) => <Switch {...field} />} />
        </section>

        {/* <section>
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
        </section> */}

        <section>
          <label>MUI autocomplete</label>
          {/* <MuiAutoComplete control={control} /> */}
        </section>
      </div>

      <FormButtonsResult {...{ reset }} defaultValues={defaultValues} />
    </form>
  );
};

export default ReactForm;
