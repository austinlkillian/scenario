import React, { useState } from 'react';
import NumberFormatCustom from './NumberFormatCustom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AdditiveForm({title, initialForm, changeFormView}) {
  const [fields, setFields] = useState(initialForm);

  const handleChange = (e) => {
    const {name, value} = e.target
    const updatedFields = fields.map(field => {
      if(field.name === name) {
        field.value = value
      }
      return field
    })
    setFields(updatedFields);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setFields([
      ...fields,
      {
        id: `${fields.length}`,
        name: `${fields.length}`,
        label: `Monthly Bill ${fields.length + 1}`,
        value: 0
      }
    ])
  };

  const handleBack = () => {
    changeFormView('back')
  };

  const handleNext = () => {
    changeFormView('next')
  };

  return (
    <Box
      sx={{
        mt: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
      <Box component="form" noValidate onSubmit={handleAdd} sx={{ mt: 3, minWidth: '400px' }}>
        <Grid container spacing={2}>
          {fields.map((field, i) => {
            return <Grid key={i} item xs={12}>
              <TextField
                type="text"
                id={field.id}
                name={field.name}
                label={field.label}
                required
                fullWidth
                autoFocus
                value={field.value}
                onChange={handleChange}
                InputProps={{inputComponent: NumberFormatCustom}}
              />
            </Grid>
          })}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="outlined"
            >
              +
            </Button>
          </Grid>
        </Grid>
        <Button
          type="button"
          onClick={handleBack}
          variant="contained"
          sx={{ mt: 3, mb: 2, mr: 2 }}
        >
          Back
        </Button>
        <Button
          type="button"
          onClick={handleNext}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}