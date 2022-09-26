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

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = user?.email;
    const text = e.target.text.value;
    const name = getUser?.name ? getUser?.name : user?.displayName;
    e.target.text.value = "";
    const allData = { email, text, name };
    console.log(allData);
    if (text) {
      fetch(
        `https://sosc-assignment-server-side-production.up.railway.app/quotes`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(allData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.result);
        });
    }
  };
  const {
    data: newUsers,
    isLoading,
    refetch,
  } = useQuery(
    "newUsers",
    () => async () =>
      await fetch(
        `https://sosc-assignment-server-side-production.up.railway.app/allUsers?email=${queryEmil}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          data.map((myData) => setUser(myData));
          // refetch();
        })
  );
  console.log(user);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-10  lg:grid lg:grid-cols-3 grid-cols-1 lg:items-center">
      <div className="col-span-2 flex justify-center">
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
      <div className="grid justify-center">
        <h3 className="my-10 font-bold text-xl">Write short quotes</h3>
        <form onSubmit={handleSubmit} action="" className="grid w-72">
          <textarea
            className="textarea textarea-bordered"
            placeholder="quotes"
            name="text"
          ></textarea>
          <input type="submit" value="Submit" className="btn mt-5" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
