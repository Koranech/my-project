import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import * as Joi from "joi";

interface IFormProps {
    username: string
    password: string,
    age: number
}

function App() {

const userValidator = Joi.object({
    username: Joi.string().min(3).max(10).required().messages({
        'string.min':'Min length is 3',
        'string.max': 'Max length is 100',
    }),
    password: Joi.string().min(4).max(20).required().messages({
        'string.min':'Min length is 4',
        'string.max': 'Max length is 100',
    }),
    age: Joi.number().min(1).max(117).required().messages({
        'number.min':'Min length is 1',
        'number.max': 'Max length is 117',
    })
})
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({
        mode: 'all', resolver: joiResolver(userValidator)
    })
    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('username')}/>
                    {errors.username && <h2>{errors.username.message}</h2>}
                </label>

                <label>
                    <input type="text" {...register('password')}/>
                    {errors.password && <h2>{errors.password.message}</h2>}
                </label>

                <label>
                    <input type={'number '} {...register('age')}/>
                    {errors.age && <h2>{errors.age.message}</h2>}
                </label>
                <button disabled={!isValid}>Submit</button>
            </form>
        </div>
    );
}

export default App
