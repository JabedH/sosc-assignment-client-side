import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../asset/img/google.png";
import auth from "../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  console.log(gUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    await createUserWithEmailAndPassword(email, password);
    fetch(`http://localhost:5000/saveUser/${email}`, {
      method: "PUT",
      body: JSON.stringify({
        email: email,
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  if (gUser) {
    const email = gUser?.user?.email;
    console.log(email);
    fetch(`http://localhost:5000/saveUser/${email}`, {
      method: "PUT",
      body: JSON.stringify({
        email: gUser?.user?.email,
        name: gUser?.user?.displayName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user || gUser) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="my-10">
        <h1 className="text-2xl mb-5">Sign Up</h1>
        <div class=" flex justify-center">
          <div class=" w-96 lg:flex-row-reverse ">
            <div class="card flex-shrink-0 shadow-2xl bg-base-100">
              <div class="card-body ">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type Name"
                      class="input input-bordered"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please provide a name",
                        },
                      })}
                      {...register("name", {
                        minLength: {
                          value: 4,
                          message: "Name must be 4 character",
                        },
                      })}
                    />
                    <label class="label">
                      {errors.name?.type === "required" && (
                        <span class="label-text-alt text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </label>
                    <label class="label">
                      {errors.name?.type === "minLength" && (
                        <span class="label-text-alt text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Type Email"
                      class="input input-bordered"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Please provide a email",
                        },
                      })}
                      {...register("email", {
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "provide a valid email",
                        },
                      })}
                    />
                    <label class="label">
                      {errors.email?.type === "required" && (
                        <span class="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                    <label class="label">
                      {errors.email?.type === "pattern" && (
                        <span class="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      class="input input-bordered"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Please provide a password",
                        },
                      })}
                      {...register("password", {
                        minLength: {
                          value: 6,
                          message: "Password must be 6 character or more",
                        },
                      })}
                    />
                    <label class="label">
                      {errors.password?.type === "required" && (
                        <span class="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                    <label class="label">
                      {errors.password?.type === "minLength" && (
                        <span class="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                    {/* <label class="label">
                      <a href="#" class="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label> */}
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary">Signup</button>
                  </div>
                </form>
                <div className="flex ">
                  <p>Do you have an account?</p>
                  <Link className="text-primary" to="/login">
                    Login here
                  </Link>
                </div>
                <div className="">
                  <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <button
                      onClick={() => signInWithGoogle()}
                      // onSubmit={handleSubmit(onSubmit)}
                      className="btn btn-outline flex justify-around"
                    >
                      <h3 className=" font-bold text-[16px]">
                        CONTINUE WITH GOOGLE
                      </h3>
                      <img className="w-10" src={google} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
