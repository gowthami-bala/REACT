
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EdiTest from './EDItest';
// import TableData from './TableData';
import { Card } from '@mui/material';
// import Upload from './uploadfile';
// import { useNavigate } from 'react-router-dom';
import DropFile from './drag&drop';
import { Button } from "@mui/material";
import Crud from './Crud';
import Doughnutchart from './charts/Doughnut';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  console.log(children);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabView() {
  const [value, setValue] = useState(0);
  const [chart, setchart] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const supplier = ['0000001251 - ATLANTIC INDIA RUBBER CO', '0000001253 - AUTOMOTIVE DIV ATWOOD INDUSTRIES INC', '0000001254 - AUDIOLOGICAL SERVICE SUPPLY CO INC', '0000001256 - AURORA BEARING CO', '0000001258 - CINTAS FIRE PROTECTION', '0000001259 - AUTO BOLT & NUT CO'];

  // const navigate = useNavigate();
  const navigateTo = () => {
    console.log("hello");

    setchart(true)
  }
  const navigateToBack = () => {
    setchart(false)
  }
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Advanced EDI Testing" {...a11yProps(0)} />
            <Tab label="Label compliance" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} >
          <Card>

            {chart === false ?
              <>
                <EdiTest
                supplier={supplier}></EdiTest>
                <DropFile></DropFile>
                <Button onClick={navigateTo}>START</Button>
                 </> :
                 <>
              <div style={{ paddingBottom: '20px' }}>
                <Doughnutchart />
                <Button onClick={navigateToBack}>BACK</Button>
              </div>
              </>
            }
            {/* <Upload></Upload> */}
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Crud></Crud>
          {/* <TableData></TableData> */}

        </TabPanel>

      </Box>

    </>
  );
}

// export default TabView