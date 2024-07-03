import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { LoginContext } from '../ContextProvider/Context';
import axios from 'axios';
import Header from './Header';
import { saveToken, getToken, deleteToken } from '../../indexedDB';


const Login = () => {

    const [passShow, setPassShow] = useState(false);
    const { logindata, setLoginData } = useContext(LoginContext);
    const [token, setToken] = useState(null);

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    });

    const history = useNavigate();

    const setVal = (e) => {
        const { name, value } = e.target;

        setInpval((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    const loginuser = async (e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("Email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("Include @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("Password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("Password must be at least 6 characters long!", {
                position: "top-center"
            });
        } else {
            try {
                const data = await fetch("/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

                const res = await data.json();

                if (res.status === 201) {
                    localStorage.setItem("usersdatatoken", res.result.token);
                    saveToken(res.result.token)
                        .then(() => {
                            console.log('Token saved successfully');
                        })
                        .catch((error) => {
                            console.error('Failed to save token', error);
                        });
                    history("/dash");
                    setInpval({ ...inpval, email: "", password: "" });
                }
            } catch (error) {
                console.error("Login Error:", error);
            }
        }
    };

    const googleSuccess = async (e) => {
        try {
            const decoded = jwtDecode(e.credential);
            const fname = decoded.name;
            const email = decoded.email;
            const data = await fetch("/googleLogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email
                })
            });
            console.log(data);

            const res = await data.json();
            if (res.status === 200) {
                localStorage.setItem("usersdatatoken", res.token);
                saveToken(res.token)
                .then(() => {
                    console.log('Token saved successfully');
                })
                .catch((error) => {
                    console.error('Failed to save token', error);
                });
                history("/dash");
            }
        } catch (error) {
            console.error("Google Sign In error:", error);
            toast.error("Google Sign In error. Please try again later.", {
                position: "top-center"
            });
        }
    };


    const googleError = (error) => {
        console.error('Google Sign In was unsuccessful:', error);
        toast.error('Google Sign In was unsuccessful. Please try again later.', {
            position: "top-center"
        });
        throw new Error('Google Sign In was unsuccessful');
    };


    return (
        <>
            <Header />
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are glad you are back. Please login.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <button className='btn' onClick={loginuser}>Login</button>
                        <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink> </p>
                    </form>
                    <GoogleLogin
                        clientId="798850360771-2del6ft13seuibb2248gsd6i4ffudh2g.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy={'single_host_origin'}
                        className="login-with-google-btn"

                    />
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default Login;
