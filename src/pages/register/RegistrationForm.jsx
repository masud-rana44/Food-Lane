import { AiOutlineGoogle } from "react-icons/ai";

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Input } from "../../components/Input";
import { useAuth } from "../../contexts/authContext";
import axios from "axios";
import { Separator } from "../../components/Separetor";

const emailVerification = /\S+@\S+\.\S+/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

function RegistrationForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    registerWithEmail,
    signInWithGoogle,
    profileUpdate,
    isLoading,
    setIsLoading,
  } = useAuth();

  const [form, setForm] = useState({
    name: "",
    url: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, url } = form;

    if (!name || !url || !email || !password) {
      return toast.error("Missing required fields.");
    }

    if (!emailVerification.test(email)) {
      return toast.error("Please enter a valid email");
    }

    if (!passwordRegex.test(password)) {
      if (password.length < 6) {
        return toast.error("Password must be at least 6 characters long.");
      } else if (!/[A-Z]/.test(password)) {
        return toast.error("Password must contain at least one capital letter");
      } else if (!/[\W_]/.test(password)) {
        return toast.error(
          "Password must contain at least one special character"
        );
      }
    }

    try {
      const res = await registerWithEmail(email, password);
      await profileUpdate(name, url);
      await axios.post("https://resturent-server.vercel.app/users", {
        name,
        email,
        imageUrl: url,
      });

      // create the jwt
      fetch("https://resturent-server.vercel.app/jwt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: res.user.email,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      toast.success("Your account has been created successfully");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegistration = async () => {
    try {
      await signInWithGoogle();

      toast.success("Your account has been created successfully");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-slate-800 ">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight ">
        Create your account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5 mt-10">
        <Input
          id="name"
          label="Your name"
          type="text"
          disabled={isLoading}
          value={form.name}
          onChange={handleChange}
        />
        <Input
          id="url"
          label="Your image"
          type="text"
          disabled={isLoading}
          value={form.url}
          onChange={handleChange}
        />
        <Input
          id="email"
          label="Email address"
          type="email"
          disabled={isLoading}
          value={form.email}
          onChange={handleChange}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          value={form.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-sm text-white  bg-primary py-1 "
        >
          Register
        </button>
        <div className="mt-6">
          <div className="flex h-8 items-center space-x-6 mb-3">
            <Separator />
            <p className="flex-1 basis-[150%] text-sm font-medium">
              Or continue with
            </p>
            <Separator />
          </div>
          <div className="flex items-center gap-x-4 mb-6">
            <button
              onClick={handleGoogleRegistration}
              type="button"
              disabled={isLoading}
              className="w-full justify-center flex items-center gap-x-2 bg-[#4285f4] hover:bg-[#4285f4]/90 py-1 rounded-sm"
            >
              <AiOutlineGoogle /> Google
            </button>
          </div>

          <p className="text-sm text-center font-medium">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-700  hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
