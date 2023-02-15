import Switch from '@mui/material/Switch';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { handleNotification } from '../features/handleNotification';
import { HOST } from '../App';

const Home = () => {

    const [alarm1, setAlarm1] = useState(moment());
    const [alarm2, setAlarm2] = useState(moment());
    const [alarm3, setAlarm3] = useState(moment());
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const handleSwitch1 = () => {
        setChecked1(!checked1);
        const newChecked1 = !checked1;  //dùng biến tạm vì checked1 vẫn chưa chắc được set
        const data = {
            checked1: newChecked1,
            checked2: checked2,
            checked3: checked3,
            alarm1: alarm1.toDate(),
            alarm2: alarm2.toDate(),
            alarm3: alarm3.toDate()
        }
        console.log(data);

        fetch(`${HOST}/alarm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
    }

    const handleSwitch2 = () => {
        setChecked2(!checked2);
        const newChecked2 = !checked2;
        const data = {
            checked1: checked1,
            checked2: newChecked2,
            checked3: checked3,
            alarm1: alarm1.toDate(),
            alarm2: alarm2.toDate(),
            alarm3: alarm3.toDate()
        }
        console.log(data);

        fetch(`${HOST}/alarm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
    }

    const handleSwitch3 = () => {
        setChecked3(!checked3);
        const newChecked3 = !checked3;
        const data = {
            checked1: checked1,
            checked2: checked2,
            checked3: newChecked3,
            alarm1: alarm1.toDate(),
            alarm2: alarm2.toDate(),
            alarm3: alarm3.toDate()
        }
        console.log(data);

        fetch(`${HOST}/alarm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
    }

    // Mục đích: Khi đặt giờ, thì tự động cho checked = true, và cập nhật giờ luôn
    // Nhưng: Người dùng chỉnh giờ thay đổi liên tục trong một lần
    // Nên: Khi đặt giờ, tự động cho checked = false để người dùng phải bấm checked thủ công
    const handleAlarm1 = (newValue) => {
        setAlarm1(newValue);
        setChecked1(false);
    }

    const handleAlarm2 = (newValue) => {
        setAlarm2(newValue);
        setChecked2(false);
    }

    const handleAlarm3 = (newValue) => {
        setAlarm3(newValue);
        setChecked3(false);
    }

    //get thông tin ban đầu nếu đã đăng nhập trước đó
    useEffect(() => {
        fetch(`${HOST}/alarm`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}
        })
            .then(res => res.json())
            .then((data) => {
                setAlarm1(moment(data.alarm1));
                setAlarm2(moment(data.alarm2));
                setAlarm3(moment(data.alarm3));
                setChecked1(data.checked1);
                setChecked2(data.checked2);
                setChecked3(data.checked3);
            })
    }, [])


    return (
        <div className="Home">
            <h2>Medicine Keeper</h2>
            <button onClick={(e) => handleNotification(e)}>Notify</button>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
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