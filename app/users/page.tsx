"use client";

import { signOut } from "next-auth/react";

const UsersPage = () => {
  return (
    <div>
      <button onClick={() => signOut()}>LogOut</button>
    </div>
  );
};

export default UsersPage;
