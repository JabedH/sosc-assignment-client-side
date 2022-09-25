import React from "react";
import UpdateUserModal from "./UpdateUserModal";

const Profile = () => {
  return (
    <div className="my-10 flex justify-center">
      {/* {newUsers.map((newUser) => ())} */}
      <div>
        <div class="avatar mb-5">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {/* <img src={user.photoURL ? user.photoURL : newUser.img} /> */}
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
                {/* <td>{newUser.name ? newUser.name : user?.displayName}</td> */}
              </tr>
              <tr>
                <td>Email:</td>
                <td></td>
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
        <UpdateUserModal  />
      </div>
    </div>
  );
};

export default Profile;
