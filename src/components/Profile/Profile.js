import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import UpdateUserModal from "./UpdateUserModal";
import newUserProfile from "../../asset/img/user.png";

const Profile = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <div className="my-10 flex justify-center">
      {/* {newUsers.map((newUser) => ())} */}
      <div>
        <div class="avatar mb-5">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={user?.photoURL ? user?.photoURL : newUserProfile}
              alt=""
            />
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="table  w-96">
            <thead>
              <tr>
                <th>Title</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name: </td>
                <td>{user?.displayName}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user?.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td></td>
              </tr>
              <tr>
                <td>Education:</td>
                <td></td>
              </tr>
              <tr>
                <td>Address:</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <MyProfileModal newUser={newUser} refetch={refetch} /> */}
        <UpdateUserModal newUser, refetch />
      </div>
    </div>
  );
};

export default Profile;
