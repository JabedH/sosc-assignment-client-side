import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const UpdateUserModal = ({ newUser, refetch }) => {
  const [user] = useAuthState(auth);
  console.log(newUser);
  const email = newUser?.email;

  const handleBooking = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const education = event.target.education.value;
    const img = event.target.img.value;
    const address = event.target.address.value;
    const allData = {
      name: name,
      phone: phone,
      education: education,
      address: address,
      img: img,
    };
    fetch(`http://localhost:5000/allusers/${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        if (data.result.modifiedCount > 0) {
          toast("Successfully Your profile updated");
        }
        refetch();
      });
  };
  return (
    <div className="">
      <label for="myProfile-modal" class="btn modal-button my-5">
        <p>Edit Your Information</p>
      </label>
      <input type="checkbox" id="myProfile-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle  bg-transparent">
        <div className="modal-box">
          <label
            htmlFor="myProfile-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg ">Your Information</h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="grid gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              name="name"
              placeholder="Edit Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              value={user?.email}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Type Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="education"
              placeholder="Type your education"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              name="address"
              placeholder="Type Your Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="img"
              placeholder="Past your image link"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Save"
              className="btn btn-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModal;
