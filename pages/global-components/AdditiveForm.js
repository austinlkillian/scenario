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

export default function AdditiveForm({formView, changeFormView, saveForm, title, defaultLabel, formData}) {
  const [fields, setFields] = useState(cloneDeep(formData));

  const handleChange = (e, id, sourceField) => {
    const {value} = e.target
    const updatedFields = fields.map(field => {
      if(field.id === id) {
        field[sourceField] = value
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
        id: `${formData[0].id}${fields.length + 1}`,
        name: '',
        amount: '',
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

  const handleFormSubmit = async (direction) => {
    await saveForm(fields)
    changeFormView(direction)
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
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    id={field.id}
                    fullWidth
                    autoFocus
                    label={`${defaultLabel} Name`}
                    value={field.name}
                    onChange={(e) => handleChange(e, field.id, 'name')}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    type="text"
                    id={field.id}
                    fullWidth
                    label={`${defaultLabel} Amount`}
                    value={field.amount}
                    onChange={(e) => handleChange(e, field.id, 'amount')}
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
              onClick={() => handleFormSubmit('back')}
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
              onClick={formView < 3 ? () => handleFormSubmit('next') : () => handleFormSubmit('finish')}
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