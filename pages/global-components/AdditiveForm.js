import React, { useState } from 'react';
import { cloneDeep } from 'lodash'
import NumberFormatCustom from './NumberFormatCustom'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AdditiveForm({formView, changeFormView, saveForm, title, defaultLabel, initialField}) {
  const [fields, setFields] = useState(cloneDeep(initialField));

  const handleChange = (e, id) => {
    const {value} = e.target
    const updatedFields = fields.map(field => {
      if(field.id === id) {
        field.value = value
      }
      return field
    })
    setFields(updatedFields);
  };

 const handleEditLabel = (id) => {
    const updatedFields = fields.map((field) => {
      if(field.id === id) {
        field.edit = true
      }
      return field
    })
    setFields(updatedFields);
  }

 const handleChangeLabel = (e, id) => {
    const {value} = e.target
    const updatedFields = fields.map((field) => {
      if(field.id === id) {
        field.label = value
      }
      return field
    })
    setFields(updatedFields);
  }

  const handleSaveLabel = (e, id) => {
    if (e.key === 'Enter') {
      const updatedFields = fields.map((field) => {
        if(field.id === id) {
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
        id: `${initialField[0].id}${fields.length + 1}`,
        name: `${initialField[0].name}${fields.length + 1}`,
        label: `${defaultLabel} ${fields.length + 1}`,
        value: '',
        edit: false,
      }
    ])
  };

  const handleDelete = (id) => {
    if(fields.length > 1) {
      const updatedFields = fields.filter((field) => {
        if(field.id !== id) return field
      })
      setFields(updatedFields);
    }
  }

  const handleBack = async () => {
    await saveForm(fields)
    changeFormView('back')
  };

  const handleNext = async () => {
    await saveForm(fields)
    if(formView < 3) {
      changeFormView('next')
    } else {
      changeFormView('finish')
    }
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
              {!field.edit && <label onClick={() => handleEditLabel(field.id)}>{field.label}</label>}
              {field.edit && 
                <input 
                  name={field.label} 
                  value={field.label} 
                  onChange={(e) => handleChangeLabel(e, field.id)} 
                  onKeyDown={(e) => handleSaveLabel(e, field.id)}
                />
              }
              <Grid container spacing={1}>
                <Grid item xs={11}>
                  <TextField
                    type="text"
                    id={field.id}
                    name={field.name}
                    fullWidth
                    autoFocus
                    value={field.value}
                    onChange={(e) => handleChange(e, field.id)}
                    InputProps={{inputComponent: NumberFormatCustom}}
                  />
                </Grid>
                <Grid item xs={1}>
                  {fields.length > 1 && <IconButton 
                    className="full-height"
                    type="button"
                    color="error"
                    size="large"
                    onClick={() => handleDelete(field.id)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>}
                </Grid>
              </Grid>
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
              {formView < 3 ? 'Next' : 'Finish'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}