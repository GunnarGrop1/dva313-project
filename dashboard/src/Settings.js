import './settings.css';
import MetricDisplayList from './components/metricDisplayList';
import LoginPanel from './components/loginPanel';
import Cookies from 'js-cookie';

function Settings() {
    let element = Cookies.get('PHPSESSID') ? <MetricDisplayList /> : <LoginPanel />;
    
    return (
        <div id="settingsContainer">
            {element}
        </div>
    );
}

export default Settings;