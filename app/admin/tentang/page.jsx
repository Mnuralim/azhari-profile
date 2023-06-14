"use client";
import React, { useState, forwardRef, useEffect } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Tentang = () => {
  const [name, setName] = useState("");
  const [wife, setWife] = useState("");
  const [firstchild, setFirstchild] = useState("");
  const [secondchild, setSecondchild] = useState("");
  const [thirdchild, setThirdchild] = useState("");
  const [fourthchild, setFourthchild] = useState("");
  const [birth, setBirth] = useState("");
  const [image, setImage] = useState(null);
  const [alert, setAlert] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://colorful-calf-helmet.cyclic.app/get-about/`);
      console.log(res);
      setName(res.data[0].name);
      setWife(res.data[0].wifeName);
      setFirstchild(res.data[0].firstchild);
      setSecondchild(res.data[0].secondchild);
      setThirdchild(res.data[0].thirdchild);
      setFourthchild(res.data[0].fourthchild);
      setBirth(res.data[0].birt);
      setImage(res.data[0].image);
    };
    getData();
  }, []);

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

    const formData = new FormData();
    formData.append("name", name);
    formData.append("wifeName", wife);
    formData.append("firstchild", firstchild);
    formData.append("secondchild", secondchild);
    formData.append("thirdchild", thirdchild);
    formData.append("fourthchild", fourthchild);
    formData.append("birt", birth);
    formData.append("image", image);

    try {
      const response = await axios.put("https://colorful-calf-helmet.cyclic.app/update-about/648710fa9ae0b2467056668e", formData);
      if (response.status == 200) {
        setLoading(false);
        setOpen(true);
        setAlert("Sukses");
        setName("");
        setWife("");
        setFirstchild("");
        setSecondchild("");
        setThirdchild("");
        setFourthchild("");
        setBirth("");
        setImage(null);
      }
    } catch (error) {
      setAlert("Gagal");
    }
  };

  return (
    <section className="relative flex items-center min-h-screen mt-10 mb-20 lg:mt-20" id="contact">
      <div className="w-full">
        <h1 className="mt-16 text-4xl font-bold text-center lg:text-5xl">
          Edit <span className="text-indigo-500">Tentang</span>
        </h1>
        <div className="flex flex-col items-center justify-center mt-10 lg:flex-row lg:gap-10">
          <motion.div variants={slideIn("right", "tween", 0.5, 1)} initial="hidden" whileInView="show" className="w-3/4 py-10 mt-10 bg-white shadow-md px-7 rounded-xl md:mt-5 lg:w-1/3 dark:bg-slate-700">
            <form onSubmit={handleForm} className="flex flex-col items-center justify-center gap-3">
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="name">
                  Nama dan Gelar :
                </label>
                <input
                  className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                  type="text"
                  placeholder="Nama dan Gelar"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="wife">
                  Nama Istri :
                </label>
                <input
                  className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                  type="text"
                  placeholder="Nama Istri"
                  id="wife"
                  value={wife}
                  onChange={(e) => setWife(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="firstchild">
                  Nama Anak Pertama :
                </label>
                <input
                  className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                  type="text"
                  placeholder="Nama Anak Pertama"
                  id="firstchild"
                  value={firstchild}
                  onChange={(e) => setFirstchild(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="secondchild">
                  Nama Anak Kedua :
                </label>
                <input
                  className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                  type="text"
                  placeholder="Nama Anak Kedua"
                  id="secondchild"
                  value={secondchild}
                  onChange={(e) => setSecondchild(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="thirdchild">
                  Nama Anak Ketiga :
                </label>
                <input
                  className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                  type="text"
                  placeholder="Nama Anak Ketiga"
                  id="thirdchild"
                  value={thirdchild}
                  onChange={(e) => setThirdchild(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="fourthchild">
                  Nama Anak Keempat :
                </label>
                <input
                  className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                  type="text"
                  placeholder="Nama Anak Keempat"
                  id="fourthchild"
                  value={fourthchild}
                  onChange={(e) => setFourthchild(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="tempat-lahir">
                  Tempat Tanggal Lahir :
                </label>
                <input
                  className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                  type="text"
                  placeholder="Tempat Tanggal Lahir"
                  id="tempat-lahir"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="gambar">
                  Gambar :
                </label>
                <input className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500" type="file" id="gambar" onChange={(e) => setImage(e.target.files[0])} />
              </div>
              <div className="self-start mt-5">
                <button type="submit" className="px-3 py-1 text-white bg-indigo-500 rounded ">
                  <SendOutlinedIcon className="pr-2" />
                  {loading ? "Mengirim..." : "Kirim"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {alert} !!!
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Tentang;
