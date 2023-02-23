import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import defaultValues from "../utils/defaultValues";

const FormUsers = ({ createNewUser, updateInfo, updateUserById, handleClose, setUpdateInfo }) => {

  const { reset, register, handleSubmit } = useForm()

  const submit = data => {
    if (updateInfo) {
      updateUserById(updateInfo.id, data)
    } else {
      createNewUser(data)
    }
    reset(defaultValues)
    handleClose()
  }

  useEffect(() => {
    if (updateInfo) reset(updateInfo)
  }, [updateInfo])

  const handleX = ()=>{
    handleClose()
    reset(defaultValues)
    setUpdateInfo()
  }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <h2 className="form__title">Form User</h2>
      <div className="form__x" onClick={handleX}>X</div>
      <div className="form__item">
        <label className="form__label" htmlFor="firsName">Firs name</label>
        <input className="form__input" {...register('first_name')} type="text" id="firsName" />
      </div>
      <div className="form__item">
        <label className="form__label" htmlFor="lastName">Last name</label>
        <input className="form__input" {...register('last_name')} type="text" id="lastName" />
      </div>
      <div className="form__item">
        <label className="form__label" htmlFor="email">Email</label>
        <input className="form__input" {...register('email')} type="email" id="email" />
      </div>
      <div className="form__item">
        <label className="form__label" htmlFor="password">Pasword</label>
        <input className="form__input" {...register('password')} type="password" id="password" />
      </div>
      <div className="form__item">
        <label className="form__label" htmlFor="birthday">Birthday</label>
        <input className="form__input" {...register('birthday')} type="date" id="birthday" />
      </div>
      <button className="form__btn">{updateInfo ? 'Update' : 'Create'}</button>
    </form>

  );
};

export default FormUsers;
