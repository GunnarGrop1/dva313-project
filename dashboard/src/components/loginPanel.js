import React from 'react';

function LoginPanel() {
    return(<div class="login">
        <form method="post">
            <h1>Login</h1>
            <input type="text" name="username" placeholder="Username" required="required" />
            <input type="password" name="password" placeholder="Password" required="required" />
            <button type="submit" class="btn">Login</button>
        </form>
    </div>);
}

export default LoginPanel;