import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Greet from './components/greetfuncational';
import Welcome from './components/classcomp';
// import State from './components/state';
// import Counter from './components/counter';
// import Destruct from './components/destructureing';
// import FunClick from './components/functionalClick';
// import Clicking from './components/classClick';
import Forms from './components/formsClass';
import FormFun from './components/formsFunction';
import BasicTable from './components/Table-mat-UI';
import Main from './components/main';
import TableData from './components/TableData';
import TabView from './components/tabview';
import EdiTest from './components/EDItest';
import DropFile from './components/drag&drop';
// import Auto from './components/Autocomplete';
import Data from './components/data';
import Crud from './components/Crud';
import Upload from './components/uploadfile';
import Doughnutchart from './components/charts/Doughnut';
import Barchart from './components/charts/Barchart';
import Login from './components/project/login';
import Home from './components/project/main';
import MainMenu from './components/menu';
import SampleAavatar from './components/avatar';
import Formvalidate from './components/forms/formvalidate';
import TableBasic from './components/table';
import DataGrid from './components/forms/grid';
import CompnentOne from './components/tasks/component1';
import OtherComponent from './components/tasks/component2';
function App() {
  return (
    <div className="App">
      {/* <Greet name="gowthami">
        <p>child props</p>
        <button>Action</button>
      </Greet> */}
      {/* <Greet></Greet> */}
      {/* <Welcome></Welcome> */}
      {/* <State></State> */}
      {/* <Counter></Counter> */}
      {/* <Destruct name="Gowthami"></Destruct> */}
      {/* <FunClick></FunClick> */}
      {/* <Clicking></Clicking> */}
      <Routes>
        <Route path="/tablebasic" element={<TableBasic/>}/>
        <Route path='/avatar' element={<SampleAavatar/>}/>
        <Route path="/greet" element={<Greet />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Forms" element={<Forms />} />
        <Route path='/FormFun' element={<FormFun />} />
        <Route path='/Table' element={<BasicTable />} />
        <Route path='/Main' element={<Main/>} />
        <Route path='/TableData' element={<TableData/>} /> 
        <Route path='/TabView' element={<TabView/>} />
        <Route path='/Edi' element={<EdiTest/>} />
        <Route path='/DropFile' element={<DropFile/>} />
        {/* <Route path='/auto' element={<Auto></Auto>}/> */}
        <Route path='/data' element={<Data/> } />
        <Route path='/crud' element={<Crud/>} />
        <Route path='/Upload' element={<Upload/>} />
        <Route path='/doughnut' element={<Doughnutchart/>} />
        <Route path='/bar' element={<Barchart/>} />
        <Route path='/MainMenu' element={<MainMenu/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path ='/validate' element={<Formvalidate/>}/>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path='/DataGrid' element={<DataGrid/>}/>
        <Route path='/ComponentOne' element={<CompnentOne/>}/>
        <Route path='/other' element={<OtherComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
