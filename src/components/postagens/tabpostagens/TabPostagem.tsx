import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagens/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Sobre-mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="2">
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Meu nome é Eduardo e estou me tornando um desenvolvedor Java Full-Stack. Essa é a minha primeira experiência com front-end.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;