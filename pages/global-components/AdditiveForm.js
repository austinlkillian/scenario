import React, { useState } from 'react';
import { cloneDeep } from 'lodash'
import NumberFormatCustom from './NumberFormatCustom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AdditiveForm({formView, changeFormView, saveForm, title, defaultLabel, initialForm}) {
  const [fields, setFields] = useState(cloneDeep(initialForm));

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

 const handleEditLabel = (e) => {
    const {innerText} = e.target
    const updatedFields = fields.map((field) => {
      if(field.label === innerText) {
        field.edit = true
      }
      return field
    })
    setFields(updatedFields);
  }

 const handleChangeLabel = (e) => {
    const {name, value} = e.target
    const updatedFields = fields.map((field) => {
      if(field.label === name) {
        field.label = value
      }
      return field
    })
    setFields(updatedFields);
  }

  const handleSaveLabel = (e) => {
    if (e.key === 'Enter') {
      const updatedFields = fields.map((field) => {
        if(field.label === e.target.name) {
          field.edit = false
        }
        return field
      })
      setFields(updatedFields);
    }
  }

  const handleAdd = (e) => {
    e.preventDefault();
    setFields([
      ...fields,
      {
        id: `${fields.length}`,
        name: `${fields.length}`,
        label: `${defaultLabel} ${fields.length + 1}`,
        value: '',
        edit: false,
      }
    ])
  };

  const handleBack = async () => {
    await saveForm(fields)
    changeFormView('back')
  };

  const handleNext = async () => {
    await saveForm(fields)
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
      <Box component="form" noValidate sx={{ mt: 3, minWidth: '400px' }}>
        <Grid container spacing={2}>
          {fields.map((field, i) => {
            return <Grid key={i} item xs={12}>
              {!field.edit && <label onClick={handleEditLabel}>{field.label}</label>}
              {field.edit && <input name={field.label} value={field.label} onChange={handleChangeLabel} onKeyDown={handleSaveLabel}/>}
              <TextField
                type="text"
                id={field.id}
                name={field.name}
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
              type="button"
              variant="outlined"
              onClick={handleAdd}
            >
              +
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {formView !== 1 && <Grid item xs={6}>
            <Button
              type="button"
              onClick={handleBack}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, mr: 2 }}
            >
              Back
            </Button>
          </Grid>}
          <Grid item xs={formView === 1 ? 12 : 6}>
            <Button
              type="button"
              onClick={handleNext}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}