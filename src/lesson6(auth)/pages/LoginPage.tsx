import {login, type LoginData} from "../services/api.services.ts";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import * as Joi from "joi";

const LoginPage = () => {

    // useEffect(() => {
    //     login({
    //         username: 'emilys',
    //         password: 'emilyspass',
    //         expiresInMins: 1,
    //     })
    //
    // }, []);
    const loginValidator = Joi.object({
        username: Joi.string().min(5).max(15).required().messages({
            'string.min': 'Min 5',
            'string.max': 'Max 15',
        }),
        password: Joi.string().min(5).max(15).required().messages({
            'string.min': 'Min 5',
            'string.max': 'Max 15',
        }),
        expiresInMins: Joi.number().min(1).max(60).required().messages({
            'string.min': 'Min 1',
            'string.max': 'Max 60',
        }),
    })
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<LoginData>({
        mode: 'all',
        resolver: joiResolver(loginValidator),
    });
    const customHandler = ({username, password, expiresInMins}: LoginData) => {
        login({
            username: username,
            password: password,
            expiresInMins: expiresInMins,
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('username')}/>
                    {errors.username && <p>{errors.username.message}</p>}
                </label>
                <label>
                    <input type="text" {...register('password')}/>
                    {errors.password && <p>{errors.password.message}</p>}
                </label>
                <label>
                    <input type="number" {...register('expiresInMins')}/>
                    {errors.expiresInMins && <p>{errors.expiresInMins.message}</p>}
                </label>
                <button disabled={!isValid}>Submit</button>
            </form>
        </>
    );
};

export default LoginPage;
