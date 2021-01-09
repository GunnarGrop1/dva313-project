import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AiOutlineDashboard, AiOutlineSetting} from 'react-icons/ai';
import GlobalMenuBar from './components/globalMenuBar';
import Dashboard from './Dashboard';
import Settings from './Settings';

const links = [
    {
        component: Dashboard,
        path: "/",
        icon: AiOutlineDashboard
    },
    {
        component: Settings,
        path: "/settings",
        icon: AiOutlineSetting
    }
];

function App() {
    return (
        <BrowserRouter>
          <div className="App">
            <GlobalMenuBar links={links} />
            <Switch>
              {
                  links.map((obj, i) => {
                      return (<Route key={i} path={obj.path} exact component={obj.component}/>);
                  })
              }
            </Switch>
          </div>
        </BrowserRouter>
    );
}

export default App;
