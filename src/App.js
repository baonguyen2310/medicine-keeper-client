import Switch from '@mui/material/Switch';
import './App.css';
import moreHorizIcon from './more_horiz.svg';
import addCircle from './add_circle.svg';
import clock from './clock.svg';

const App = () => {
    return (
        <div className="App">
            <h1>Bao Yeu Chi</h1>
            <h2>Medicine Keeper</h2>
            <p>Tonight, we will humping</p>
            <a href="http://google.com">Click here to watch our video</a>
            <div className="alarms-container-img">
                <img src={clock} alt="" />
            </div>
            <div className="alarms-container">
                <div className="alarms-header">
                    <p>Alarms</p>
                    <img src={moreHorizIcon} alt="" />
                </div>
                <div className="alarms">
                    <ul className="alarms-list">
                        <li className="alarm-item-box">
                            <div className="alarm-item">
                                <p className="alarm-time">07:30</p>
                                <p className="alarm-date">Mon, 14 Dec</p>
                                <Switch className="alarm-switch" />
                            </div> 
                        </li>
                        <li className="alarm-item-box">
                            <div className="alarm-item">
                                <p className="alarm-time">07:30</p>
                                <p className="alarm-date">Mon, 14 Dec</p>
                                <Switch className="alarm-switch" />
                            </div> 
                        </li>
                        <li className="alarm-item-box">
                            <div className="alarm-item">
                                <p className="alarm-time">07:30</p>
                                <p className="alarm-date">Mon, 14 Dec</p>
                                <Switch className="alarm-switch" />
                            </div> 
                        </li>
                    </ul>
                </div>
                <div className="add-button">
                    <img src={addCircle} alt="" />
                </div>
            </div>
        </div>
    );
}

export default App;