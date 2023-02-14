const Register = () => {
    const handleRegister = () => {
        const usernameInput = document.querySelector(".username_input");
        const passwordInput = document.querySelector(".password_input");
        const data = {
            username: usernameInput.value,
            password: passwordInput.value,
        }
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <div className="register">
            <input placeHolder="username" className="username_input"></input>
            <input placeHolder="password" className="password_input"></input>
            <button onClick={handleRegister}></button>
        </div>
    )
}

export default Register;