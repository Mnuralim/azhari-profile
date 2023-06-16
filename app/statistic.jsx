"use client";
import React from "react";

const Statistic = ({ data }) => {
  const updatedAt = data?.updatedAt;
  const date = new Date(updatedAt);

  // Daftar nama bulan dalam bahasa Indonesia
  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  // Mendapatkan jam dan menit dari objek Date
  const jam = date.getHours();
  const menit = date.getMinutes().toString().padStart(2, "0");

  // Mendapatkan tanggal, bulan, dan tahun dari objek Date
  const tanggal = date.getDate();
  const namaBulan = bulan[date.getMonth()];
  const tahun = date.getFullYear();

  // Menggabungkan jam, menit, tanggal, bulan, dan tahun menjadi format yang diinginkan
  const formattedDate = `jam ${jam}.${menit} WITA, ${tanggal} ${namaBulan} ${tahun}`;

  console.log(formattedDate);

  return (
    <section id="award" className="relative flex items-center px-10 lg:px-24">
      <div className="flex items-center justify-start w-full">
        <div>
          <div>
            <p className="text-xl font-bold">Jumlah Kunjungan : {data.numbOfView}</p>
            <p>Terakhir Dikunjungi : {formattedDate}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
