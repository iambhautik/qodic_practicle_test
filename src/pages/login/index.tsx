import styled from "styled-components";
import { Input } from "../../components/Input";

const LoginWrapper = styled.div`

    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;

    .login-container{
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 300px;
    }

    h2 {
        text-align: center;
        color: #1877f2;
    }
    form {
        display: flex;
        flex-direction: column;
    }

`;



const Login = () => {
    return (
        <LoginWrapper>
            <div className='login-container'>
                <h2>Login</h2>
                <form>
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <button type='submit'>Log In</button>
                </form>
            </div>
        </LoginWrapper>
    );
};

export default Login;
