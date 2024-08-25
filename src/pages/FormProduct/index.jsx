import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SingleLineInput } from '../../components/Input/index';
import validationProduct from '../../validators/product';

const FormProduct = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationProduct),
  });

  const onSubmit = () => {
    navigate('/home');
  };

  return (
    <div className='form-product'>
      <div className='col-md-4 container-white p-3'>
          <form onSubmit={handleSubmit(onSubmit)} className="w-100 d-flex justify-content-center">
              <div className='row'>
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
                      <Controller
                        name="code"
                        control={control}
                        render={({ field }) => (
                        <SingleLineInput
                            type="number"
                            padding=''
                            placeholder="Code"
                            rowSpacing="my-2"
                            min="0"
                            step="1"
                            {...field}
                            error={errors.code}
                        />
                        )}
                      />
                      <Controller
                        name="quantity"
                        control={control}
                        render={({ field }) => (
                        <SingleLineInput
                            type="number"
                            padding=''
                            placeholder="Quantity"
                            rowSpacing="my-2"
                            min="0"
                            step="1"
                            {...field}
                            error={errors.quantity}
                        />
                        )}
                      />
                      <Controller
                        name="price"
                        control={control}
                        render={({ field }) => (
                        <SingleLineInput
                            type="number"
                            padding=''
                            placeholder="Price"
                            rowSpacing="my-2"
                            min="0"
                            step="1"
                            {...field}
                            error={errors.price}
                        />
                        )}
                      />
                  </div>
                  <div className='d-flex justify-content-center align-items-center'>
                      <div className='row d-flex justify-content-center align-items-center'>
                          <div className='col-12 px-0 d-flex justify-content-center align-items-center'>
                              <button type="submit" className="btn btn-primary mt-sm-3 mt-md-5 w-100">
                                Register
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
      </div>
    </div>
  );
};

export default FormProduct;
