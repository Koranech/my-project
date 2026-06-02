import '../src/App.css';
import {type FormEvent, useState} from "react";

//Типізуємо дані з форми
interface IFormProps {
    username: string
    password: string
}

function App() {
    //Створюємо стейт для форми, значення за замовчуванням
    const [formState, setFormState] = useState<IFormProps>({
        username: 'anton',
        password: '12345'

    })
    // Виконуєм умовну відправку форми на апі з поточними даними форми
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // const form = e.target as HTMLFormElement
        // console.log(form)
        // console.log(form.username.value)
        // console.log(form.password.value)
        const user = {
            username: formState.username,
            password: formState.password
        }
        console.log(user)
    }
  //1 Спосіб як оновлювати форму, вчасності її інпут елементи
  //   const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
  //       const input = e.target as HTMLInputElement;
  //       console.log(input.value)
  //       setFormState({...formState, username:input.value})
  //   }
  //   const handlePasswordChange = (e: c) => {
  //       const input = e.target as HTMLInputElement;
  //       console.log(input.value)
  //       setFormState({...formState, password:input.value})
  //   }

    //2 Спосіб (універсально для двух інпутів)
    //Змінюємо значення для наших інпут елементів, по суті оновлювлюєм форму, вчасності її інпут елементи
    const handleInputChange = (e: FormEvent<HTMLInputElement> ) =>{
        const input = e.target as HTMLInputElement;
        console.log(input.name)
        setFormState({...formState, [input.name]: input.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App
