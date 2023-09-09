import React from "react";
import { useNavigate } from "react-router-dom";
import { HiHome, HiFingerPrint } from 'react-icons/hi';
import { FaBitcoin, FaMoneyBill, FaChild, FaRecordVinyl  } from 'react-icons/fa';

const PlanButtons = () => {
  const navigate = useNavigate();
  return (
    <>
    <h2 className="pt-12 flex items-center justify-center text-left text-xl font-extrabold">Check Out Our Plans...</h2>
    <div className="m-12 flex flex-row flex-wrap items-center justify-center gap-8">
      <Button icon={<FaBitcoin />} title={'Cryptocurrency'} />
      <Button icon={<HiHome />} title={'Real Estate'} />
      <Button icon={<FaMoneyBill />} title={'Retirement'} />
      <Button icon={<FaChild />} title={'Children'} />
      <Button icon={<FaRecordVinyl />} title={'Recovery'} />
      <Button icon={<HiFingerPrint />} title={'Nfts'} />
    </div>
    </>
  );
};

export default PlanButtons;

const Button = ({ icon, title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/packages");
        }}
        className="btn bg-teal-600 text-white hover:bg-teal-700 flex gap-4 outline-none border-none uppercase w-full items-center justify-center"
      >
        <span className="text-[20px] font-bold">{icon}</span> {title}
      </button>
    </div>
  );
};
