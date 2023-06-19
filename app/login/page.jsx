"use client";
import React, { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(data.error);
      if (data.ok) {
        router.push("/admin");
      } else {
        setOpen(true);
        setAlert(data.error);
        setLoading(false);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <motion.section variants={galleryContainerVariant} initial="hidden" whileInView="show" className=" fixed inset-0 flex h-screen justify-center overflow-auto z-[10000000] bg-slate-50 dark:bg-slate-800">
      <motion.div variants={galleryVariant} className="flex items-center justify-center w-full p-5 mb-10 md:px-80">
        <div className="w-1/2">
          <h1 className="mb-5 text-3xl font-bold text-center text-slate-50 lg:text-5xl">Login</h1>
          <form onSubmit={handleForm} className="flex flex-col items-center justify-center gap-6">
            <div className="w-full">
              <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="email">
                Email :
              </label>
              <input
                className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="password">
                Password :
              </label>
              <input
                className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="w-full mt-5">
              <button type="submit" className="w-full py-3 text-white bg-indigo-500 rounded px- ">
                <SendOutlinedIcon className="pr-2" />
                {loading ? "Masuk..." : "Masuk"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {alert} !!!
        </Alert>
      </Snackbar>
    </motion.section>
  );
};

export default Login;
