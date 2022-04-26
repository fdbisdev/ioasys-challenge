import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório!'),
    password: yup.string().required('Senha é obrigatória!'),
});

export default loginSchema;
