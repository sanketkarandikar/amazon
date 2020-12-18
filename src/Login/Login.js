import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from '../firebase';
import { useStateValue } from '../Store/StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user);
            if(user) {
                dispatch({
                    type: 'SET_USER',
                    user
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        });
    }, [])


    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleLogin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            if (auth) {
                history.push("/");
            }
        })
        .catch(err => console.log(err));
    }

    const handleSignup = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            if (auth) {
                history.push("/");
            }
        })
        .catch(err=> console.log(err));
    }
    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt="Logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>
                        Email
                    </h5>
                    <input type="text" value={email} onChange={(e) =>handleEmail(e)}/>
                    <h5>
                        Password
                    </h5>
                    <input type="password" value={password} onChange={(e) =>handlePassword(e)}/>
                    <button type="submit" onClick={(e) => handleLogin(e)} className="login__signin">Sign in</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    
                </form>
            </div>
            <div className="login__divider">New to Amazon?</div>
            <button onClick={(e)=> handleSignup(e)} className="login__signup">Create amazon account</button>
        </div>
    )
}

export default Login
