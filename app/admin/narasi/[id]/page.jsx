"use client";
import React, { useState, forwardRef, useEffect } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useParams, useRouter } from "next/navigation";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditNarasi = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [article, setArticle] = useState("");
  const [image, setImage] = useState(null);
  const [alert, setAlert] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();

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

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://colorful-calf-helmet.cyclic.app/get-narasi/${params.id}`);
      const getAllData = await res.json();
      setTitle(getAllData.title);
      setDate(getAllData.year);
      setPlace(getAllData.place);
      setArticle(getAllData.article);
      setImage(getAllData.image);
    };
    getData();
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("year", date);
    formData.append("place", place);
    formData.append("article", article);
    formData.append("image", image);

    try {
      const response = await axios.put(`https://colorful-calf-helmet.cyclic.app/update-narasi/${params.id}`, formData);
      if (response.status == 200) {
        setLoading(false);
        setOpen(true);
        setAlert("Sukses");
        setTitle("");
        setDate("");
        setPlace("");
        setArticle("");
        setImage(null);
        router.push("/admin/narasi");
      }
    } catch (error) {
      setAlert("Gagal");
    }
  };

  return (
    <section className="relative flex items-center min-h-screen mt-10 mb-20 lg:mt-20" id="contact">
      <div className="w-full">
        <h1 className="mt-16 text-4xl font-bold text-center lg:text-5xl">
          Edit <span className="text-indigo-500"> Narasi</span>
        </h1>
        <div className="flex flex-col items-center justify-center mt-10 lg:flex-row lg:gap-10">
          <motion.div variants={slideIn("right", "tween", 0.5, 1)} initial="hidden" whileInView="show" className="w-3/4 py-10 mt-10 bg-white shadow-md px-7 rounded-xl md:mt-5 lg:w-1/3 dark:bg-slate-700">
            <form onSubmit={handleForm} className="flex flex-col items-center justify-center gap-3">
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="title">
                  Judul :
                </label>
                <input
                  className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                  type="text"
                  placeholder="Judul"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="date">
                  Tanggal :
                </label>
                <input
                  className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                  type="text"
                  placeholder="Tanggal"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="place">
                  Tempat :
                </label>
                <input
                  className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                  type="text"
                  placeholder="Tempat"
                  id="place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="gambar">
                  Gambar :
                </label>
                <input className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500" type="file" placeholder="gambar" id="gambar" onChange={(e) => setImage(e.target.files[0])} />
              </div>
              <div className="w-full">
                <label className="text-slate-500 md:text-lg dark:text-slate-200" htmlFor="article">
                  Artikel :
                </label>
                <textarea
                  name="article"
                  id="article"
                  rows="4"
                  placeholder="Artikel..."
                  className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base dark:bg-slate-500"
                  value={article}
                  onChange={(e) => setArticle(e.target.value)}
                  required
                ></textarea>
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

export default EditNarasi;
