import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div className="my-10">
        <h1 className="text-2xl mb-5">Sign Up</h1>
        <div class=" flex justify-center">
          <div class=" w-96 lg:flex-row-reverse ">
            <div class="card flex-shrink-0 shadow-2xl bg-base-100">
              <div class="card-body ">
                <form action="">
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
                    <label class="label">
                      <a href="#" class="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
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
                    <button className="btn btn-outline">
                      CONTINUE WITH GOOGLE
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
