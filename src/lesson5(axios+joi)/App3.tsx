import {useForm} from "react-hook-form";

interface IFormProps {
    username: string
    password: string,
    age: number
}

function App() {

    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({
        mode: 'all'
    })
    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label><input type="text" {...register('username', {
                    required: {value: true, message: 'This field is required'},
                    minLength: {value: 3, message: 'Min length is 3'},
                    maxLength: {value: 100, message: 'Max length is 100'}
                })}/>{errors.username && <h2>{errors.username.message}</h2>}</label>

                <label> <input type="text" {...register('password', {
                    required: {value: true, message: 'This field is required'},
                    minLength: {value: 3, message: 'Min length is 4'},
                    maxLength: {value: 100, message: 'Max length is 20'}
                })}/>{errors.password && <h2>{errors.password.message}</h2>}</label>

                <label><input type={'number'} {...register('age', {
                    valueAsNumber: true,
                    required: {value: true, message: 'This field is required'},
                    min: {value: 1, message: 'Min age is 1'},
                    max: {value: 117, message: 'Max age is 117'}
                })}/>{errors.age && <h2>{errors.age.message}</h2>}</label>
                <button disabled={!isValid}>Submit</button>
            </form>
        </div>
    );
}

export default App
