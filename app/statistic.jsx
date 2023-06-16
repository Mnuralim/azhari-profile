"use client";
import React from "react";

const Statistic = ({ data }) => {
  const updatedAt = data?.updatedAt;
  const date = new Date(updatedAt);

  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const jam = date.getHours();
  const menit = date.getMinutes().toString().padStart(2, "0");

  const tanggal = date.getDate();
  const namaBulan = bulan[date.getMonth()];
  const tahun = date.getFullYear();

  const formattedDate = `jam ${jam}.${menit} WITA, ${tanggal} ${namaBulan} ${tahun}`;

  console.log(formattedDate);

  return (
    <section className="relative flex items-center px-10 lg:px-24">
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
