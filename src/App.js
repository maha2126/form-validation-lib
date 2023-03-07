import './App.css';
import {useForm} from 'react-hook-form'

const App = () => {
  const {register, handleSubmit, formState:{errors}} = useForm();

  const addUser = data =>{
    console.log(data)
  }
  return <div>
    <h1>Signup</h1>
    <form className='form' onSubmit={handleSubmit(addUser)} >
      {errors.first && errors.last && <p>First or Last name is required...</p>}
      {errors.age && <p>Age must be a number between 18 and 30</p>}
      <div>
        <label>First name</label>
        <input type="text" {...register("first",{required:true})}/>
      </div>
      <div>
      <label>Last name</label>
        <input type="text" {...register("...last",{required:true})}/>
      </div>
      <div>
        <label>Age</label>
        <input type="number" {...register("...age",{pattern:/[\d]/,required:true, min:18, max:30})}/>
      </div>
      <button>Save</button>
    </form>
  </div>
}
export default App;
