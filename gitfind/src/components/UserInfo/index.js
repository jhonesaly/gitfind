// src/components/UserInfo.js
import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div className="perfil">
      <img src={user.avatar_url} className="profile" alt="imagem de perfil" />
      <div>
        <h3>{user.name}</h3>
        <span>@{user.login}</span>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export { UserInfo };
