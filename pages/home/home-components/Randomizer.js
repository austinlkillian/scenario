import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Randomizer() {
  const [selectedItem, setSelectedItem] = useState(1);

  const randomize = (x) => {
    let item = selectedItem
    if (x > 0) {
      setTimeout(() => {
        if(selectedItem === 3) {
          item = 1
          setSelectedItem(item)
        } else {
          item = item + 1
          setSelectedItem(item);
        }
        
        console.log('selected: ', selectedItem)
        randomize(x - 1)
      }, 300)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    randomize(12)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component="h1" variant="h5">
            Randomize
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, minWidth: '400px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <p className={`${selectedItem === 1 ? 'highlight' : ''}`}>Choice 1</p>
              </Grid>
              <Grid item xs={12}>
                <p className={`${selectedItem === 2 ? 'highlight' : ''}`}>Choice 2</p>
              </Grid>
              <Grid item xs={12}>
                <p className={`${selectedItem === 3 ? 'highlight' : ''}`}>Choice 3</p>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Randomize
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}