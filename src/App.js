import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GaneshChalisa from './Chalisa/GaneshChalisa';
import HanumanChalisa from './Chalisa/HanumanChalisa';
import AartiGanesha from './Aarti/AartiGanesha';
import AartiHanuman from './Aarti/AartiHanuman';
import DurgaChalisa from './Chalisa/DurgaChalisa';
import AartiDurga from './Aarti/AartiDurga';

function App() {
  return (
    <div className="App">
      <div className='App_container'>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/chalisa/ganesha" exact>
              <GaneshChalisa />
            </Route>
            <Route path="/chalisa/hanuman" exact>
              <HanumanChalisa />
            </Route>
            <Route path="/chalisa/durga" exact>
              <DurgaChalisa />
            </Route>
            <Route path="/aarti/ganesha" exact>
              <AartiGanesha />
            </Route>
            <Route path="/aarti/hanuman" exact>
              <AartiHanuman />
            </Route>
            <Route path="/aarti/durga" exact>
              <AartiDurga />
            </Route>
          </Switch>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
