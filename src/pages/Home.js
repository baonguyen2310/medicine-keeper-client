import Switch from '@mui/material/Switch';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import moment from 'moment';

const Home = () => {
    const [alarm1, setAlarm1] = useState(moment()); //ban đầu phải fetch để lấy dữ liệu đã lưu
    const [alarm2, setAlarm2] = useState(moment());
    const [alarm3, setAlarm3] = useState(moment());
    const [checked1, setChecked1] = useState(false); //ban đầu phải fetch để lấy dữ liệu đã lưu
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const handleSwitch1 = () => {
        setChecked1(!checked1);
    }

    const handleSwitch2 = () => {
        setChecked2(!checked2);
    }

    const handleSwitch3 = () => {
        setChecked3(!checked3);
    }

    const handleAlarm1 = (newValue) => {
        setAlarm1(newValue);
        setChecked1(false); //Khi đặt giờ thì checked false
    }

    const handleAlarm2 = (newValue) => {
        setAlarm2(newValue);
        setChecked2(false);
    }

    const handleAlarm3 = (newValue) => {
        setAlarm3(newValue);
        setChecked3(false);
    }

    useEffect(() => {
        const data = {
            username: 'jack',
            password: 'jack',
            checked1: checked1,
            checked2: checked2,
            checked3: checked3,
            alarm1: alarm1.toDate(),
            alarm2: alarm2.toDate(),
            alarm3: alarm3.toDate()
        }
        console.log(data);

        fetch('http://localhost:5000/alarm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }, [checked1, checked2, checked3])  //khi checked thay đổi trạng thái thì post lên server

    return (
        <div className="Home">
            <h2>Medicine Keeper</h2>
            <div className="alarms-container">
                <div className="alarms">
                    <ul className="alarms-list">
                        <li className="alarm-item">
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <TimePicker
                                    label="Morning"
                                    value={alarm1}
                                    onChange={(newValue) => handleAlarm1(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <Switch className="alarm-switch" checked={checked1} onChange={handleSwitch1} />
                        </li>
                        <li className="alarm-item">
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <TimePicker
                                    label="Afternoon"
                                    value={alarm2}
                                    onChange={(newValue) => handleAlarm2(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <Switch className="alarm-switch" checked={checked2} onChange={handleSwitch2} />
                        </li>
                        <li className="alarm-item">
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <TimePicker
                                    label="Evening"
                                    value={alarm3}
                                    onChange={(newValue) => handleAlarm3(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <Switch className="alarm-switch" checked={checked3} onChange={handleSwitch3} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;