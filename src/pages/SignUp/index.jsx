import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import './index.css';
import exampleImage from '../../assets/img/logo-background-white.png';
import { SingleLineInput } from '../../components/Input/index';
import validationSignUp from '../../validators/sign-up';

const SingUp = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSignUp),
  });

  const onSubmit = () => {
    navigate('/home');
  };

  return (
    <div className='sign-up img-background px-sm-3 px-0'>
        <div className='col-md-4 container-white p-3'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-100 d-flex justify-content-center">
                <div className='row'>
                    <div className="mb-3 d-flex justify-content-center align-items-center">
                        <img src={exampleImage} alt="Logo" className='logo' />
                    </div>
                    <div className='row px-4 d-flex justify-content-center align-items-center m-0'>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                            <SingleLineInput
                                type="text"
                                rowSpacing="my-2"
                                placeholder="Name"
                                {...field}
                                error={errors.name}
                            />
                            )}
                        />
                        <div className='row m-0 px-sm-3 px-md-4'>
                            <div className='col-md-4 px-0'>
                                <Controller
                                    name="age"
                                    control={control}
                                    render={({ field }) => (
                                    <SingleLineInput
                                        type="number"
                                        padding=''
                                        placeholder="Age"
                                        rowSpacing="my-2"
                                        min="0"
                                        step="1"
                                        {...field}
                                        error={errors.age}
                                    />
                                    )}
                                />
                            </div>
                            <div className='col-md-8' style={{paddingRight:'0'}}>
                                <Controller
                                    name="phoneNumber"
                                    control={control}
                                    render={({ field }) => (
                                    <SingleLineInput
                                        type="text"
                                        padding=''
                                        placeholder="Phone Number"
                                        rowSpacing="my-2"
                                        {...field}
                                        error={errors.phoneNumber}
                                    />
                                    )}
                                />
                            </div>
                        </div>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                            <SingleLineInput
                                type="text"
                                placeholder="Email"
                                rowSpacing="my-2"
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
                                rowSpacing="my-2"
                                {...field}
                                error={errors.password}
                            />
                            )}
                        />
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-8 px-0 d-flex justify-content-center align-items-center'>
                                <button type="submit" className="btn btn-primary mt-sm-3 mt-md-5 w-100">
                                Register
                                </button>
                            </div>
                            <a href='/' className='link mt-3 fs-12px'>go back</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
};

export default SingUp;
