import { Button } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const [isSignIn, setSignIn] = useState(false);
    const[loading,setloading]=useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const toggleSignIn = () => {
        setSignIn(!isSignIn);
    };

    const onSubmit = (data: any) => {
        console.log("Form data:", data);
        navigate('/browse')
        
    };

    return (
        <>
            <div className='form'>
                <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
                <form className='form-content' onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Enter your email:
                        <input
                            className={'email-box'}
                            type='email'
                            placeholder='Email'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && <div className="error-message">{errors.email.message}</div>}
                    </label>
                    <label>
                        Enter Password
                        <input
                            className={'password-box'}
                            type='password'
                            placeholder='Password'
                            {...register('password', {
                                required: 'Password is required',
                                pattern: {
                                    value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                                    message: 'Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.',
                                },
                            })}
                        />
                        {errors.password && <div className="error-message">{errors.password.message}</div>}
                    </label>
                    {!isSignIn && (
                        <label>
                            UserName
                            <input
                                className={'userName-box '}
                                type="text"
                                placeholder="UserName"
                                {...register('userName', {
                                    required: 'UserName is required',
                                    pattern: {
                                        value: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
                                        message: 'Please enter a valid userName.',
                                    },
                                })}
                            />
                            {errors.userName && <div className="error-message">{errors.userName.message}</div>}
                        </label>
                    )}
                    <button className="inputButton" >
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
                <p>{isSignIn ? 'New to Site?' : 'Already Have an Account?'}</p> 
                <span onClick={toggleSignIn}>{isSignIn ? 'Sign Up' : 'Sign In'}</span>
            </div>
        </>
    );
};

export default LoginForm;
