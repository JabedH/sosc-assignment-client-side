import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../asset/img/google.png";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user || gUser) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="my-10">
        <h1 className="text-2xl mb-5">Login</h1>
        <div class=" flex justify-center">
          <div class=" w-96 lg:flex-row-reverse ">
            <div class="card flex-shrink-0 shadow-2xl bg-base-100">
              <div class="card-body ">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                          Alt label
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
                    <label class="label">
                      <a href="#" class="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary">Login</button>
                  </div>
                </form>
                <div className="flex ">
                  <Link className="text-primary" to="/signup">
                    Create new account
                  </Link>
                </div>
                <div className="">
                  <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <button
                      onClick={() => signInWithGoogle()}
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

export default Login;
