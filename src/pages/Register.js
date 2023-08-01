import { HOST } from "../App";
import '../asset/css/style.css';
const Register = () => {
    const handleRegister = () => {
        const usernameInput = document.querySelector(".username_input");
        const passwordInput = document.querySelector(".password_input");
        const espcodeInput = document.querySelector(".espcode_input");
        const data = {
            username: usernameInput.value,
            password: passwordInput.value,
            ESPCODE: espcodeInput.value
        }
        fetch(`${HOST}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.status == 200) {
                    alert("Đăng ký thành công");
                    window.location.replace("/login");
                } else {
                    alert("Tên đăng nhập hoặc ESPCODE đã được sử dụng");
                    window.location.reload();
                }
            })
    }

    return (
        <div className="register">
            <input placeholder="username" className="username_input"></input>
            <input placeholder="password" className="password_input"></input>
            <input placeholder="ESPCODE" className="espcode_input"></input>
            <button className="register-btn" onClick={handleRegister}>Register</button>
        </div>
    )
}

export default Register;