import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import './index.css';
import exampleImage from '../../assets/img/logo-background-white.png';
import { SingleLineInput } from '../../components/Input/index';
import validationLogin from '../../validators/login';

const Login = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationLogin),
  });

  const onSubmit = () => {
    navigate('/home');
  };

  return (
    <div className='login img-background px-sm-3 px-0'>
      <div className='col-md-6 container-white p-3'>
        <div className='row'>
          <div className="col-md-7 line-right d-flex justify-content-center align-items-center">
            <img src={exampleImage} alt="Logo" className='logo' />
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-100 d-flex justify-content-center">
              <div className='row'>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <SingleLineInput
                      type="text"
                      placeholder="Email"
                      {...field}
                      error={errors.email}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <SingleLineInput
                      type="password"
                      placeholder="Password"
                      {...field}
                      error={errors.password}
                    />
                  )}
                />
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-8 px-0 d-flex justify-content-center align-items-center'>
                      <button type="submit" className="btn btn-primary mt-sm-3 mt-md-5 w-100">
                        Log in
                      </button>
                    </div>
                    <a className='link mt-3 fs-12px'>forget my password</a>
                    <a href={'/sign-up'} className='link mt-4 fs-12px'>Don't have an account? Sing Up</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
