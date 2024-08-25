import * as yup from 'yup';

const validationProduct = yup.object({
  name: yup.string().required('Name is required'),
  code: yup.number('Invalid code format').required('Code is required'),
  quantity: yup.number().required('Quantity is required'),
  price: yup.number().required('Price is required'),
});

export default validationProduct;
