import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import UpdateUserModal from "./UpdateUserModal";
import newUserProfile from "../../asset/img/user.png";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

const Profile = () => {
  const [user] = useAuthState(auth);
  const queryEmil = user?.email;
  const [getUser, setUser] = useState([]);
  // console.log(getUser);
  // console.log(user?.email);

  // console.log(user);

  const {
    data: newUsers,
    isLoading,
    refetch,
  } = useQuery(
    "newUsers",
    () => async () =>
      await fetch(`http://localhost:5000/allUsers?email=${queryEmil}`, {
        // fetch(`http://localhost:5000/allUsers/${queryEmil}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          data.map((myData) => setUser(myData));
          refetch();
          
        })
  );

  if (isLoading) {
    return <Loading />;
  }
  // newUsers.map((newUser) => console.log(newUser));

  return (
    <div className="my-10 flex justify-center">
      {/* {newUsers?.map((newUser) => ())} */}
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
                <td>{getUser.name ? getUser.name : user?.displayName}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user?.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{getUser?.phone ? getUser?.phone : ""}</td>
              </tr>
              <tr>
                <td>Education:</td>
                <td>{getUser?.education ? getUser?.education : ""}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>{getUser?.address ? getUser?.address : ""}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <MyProfileModal newUser={newUser} refetch={refetch} /> */}
        <UpdateUserModal newUsers={getUser} refetch={refetch} />
      </div>
    </div>
  );
};

export default Profile;
