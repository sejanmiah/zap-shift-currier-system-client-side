import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const {register,handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>

  
              <h1 className="text-5xl my-10 font-bold">Creat An Account now!</h1>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>

        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" {...register('password')} className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>

        </fieldset>

        </form>

      </div>
    </div>
        </div>
    );
};

export default Register;