import React from "react";

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpen }) => {
  const handleDelete = () => {
    deleteUserById(user.id)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpen()
  }

  return (
    <article className="user__container">
      <h2 className="user__name">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="user__list">
        <li className="user__item">
          <span className="user__span">Email: </span>
          {user.email}
        </li>
        <li className="user__item">
          <span className="user__span">Birthday: </span>
          {user.birthday}
        </li>
      </ul>
      <button className="user__btn user__btn-delte" onClick={handleDelete}><box-icon name='trash' type='solid' color='#f96363' animation='tada-hover' flip='horizontal' ></box-icon></button>
      <button className="user__btn user__btn-update" onClick={handleUpdate}><box-icon name='edit-alt' animation='flashing-hover' color='#060606' ></box-icon></button>
    </article>
  );
};

export default UserCard;

