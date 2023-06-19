"use client";
import React, { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const JoinForm = ({ isShow, onClosed }) => {
  if (!isShow) return null;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [alert, setAlert] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(onClosed);

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
      const response = await axios.post("https://colorful-calf-helmet.cyclic.app/post-community", {
        name: name.toLowerCase(),
        address: address.toLowerCase(),
        mobile: mobile.toLowerCase(),
        age: age.toLowerCase(),
      });
      if (response.status == 200) {
        setLoading(false);
        setOpen(true);
        setAlert("Sukses");
        setName("");
        setAddress("");
        setMobile("");
        setAge("");
        setTimeout(() => {
          onClosed();
        }, 2000);
      }
    } catch (error) {
      setAlert("Gagal");
    }
  };

  return (
    <motion.section variants={galleryContainerVariant} initial="hidden" whileInView="show" className=" fixed inset-0 flex h-screen justify-center overflow-auto z-[10000000] bg-slate-50 dark:bg-slate-800">
      <motion.div variants={galleryVariant} className="flex w-full p-5 mt-20 mb-10 md:px-80">
        <div className="w-full h-24 ">
          <form onSubmit={handleForm} className="flex flex-col items-center justify-center gap-3">
            <div className="w-full">
              <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="name">
                Nama :
              </label>
              <input
                className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                type="text"
                placeholder="Nama"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="age">
                Umur :
              </label>
              <input
                className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                type="number"
                placeholder="Umur"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="alamat">
                Desa/Kelurahan :
              </label>
              <input
                className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                type="text"
                placeholder="Desa/Kelurahan"
                id="alamat"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="mobile">
                Nomor Hp :
              </label>
              <input
                className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                type="text"
                placeholder="No Handphone"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="self-start mt-5">
              <button type="submit" className="px-3 py-1 text-white bg-indigo-500 rounded ">
                <SendOutlinedIcon className="pr-2" />
                {loading ? "Mengirim..." : "Kirim"}
              </button>
            </div>
            <div className="self-start mt-20">
              <button onClick={onClosed} className="px-3 py-1 text-white bg-pink-500 rounded ">
                Kembali
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
