import React, {FC} from 'react';
import './App.css';
import MyList from "./components/List";
import MyModal from "./components/Modal";

const App: FC = () => (
    <div className="App">
      <MyList/>
      <MyModal/>
    </div>
);

export default App;
