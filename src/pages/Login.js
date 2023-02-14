const Login = () => {
    const handleLogin = () => {
        const usernameInput = document.querySelector(".username_input");
        const passwordInput = document.querySelector(".password_input");
        const data = {
            username: usernameInput.value,
            password: passwordInput.value,
        }
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.accessToken);
            })
    }

    return (
        <div className="login">
            <input placeHolder="username" className="username_input"></input>
            <input placeHolder="password" className="password_input"></input>
            <button onClick={handleLogin}></button>
        </div>
    )
}

export default Login;