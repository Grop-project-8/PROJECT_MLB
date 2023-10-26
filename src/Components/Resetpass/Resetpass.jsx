import React, { useState } from 'react';
import logo_horizon from "../../assets/logo_circle/logo_horizon.svg";
import { GrFormPrevious } from "react-icons/gr";
import { sendOTP, rePass } from '../../Function/userRouter'; 
import { toast } from "react-toastify";
import { Spin, Modal } from "antd";
import { useNavigate } from 'react-router-dom';




export default function ForgotPassword() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [emailError, setEmailError] = useState();

  const handleConfirmEmail = async () => {
    try {
      setLoading(true); 
      const res = await sendOTP({ email });
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      toast(res.message);
      setLoading(false);
      setEmailError(false) 
    } catch (error) {
      toast.error('Error sending OTP');
      setLoading(false); 
      setEmailError(true)
      
    }
  };
  

  const handleChangePassword = async () => {
    try {
      setLoading(true);
      const res = await rePass({ otp, newPassword });
      toast(res);
      navigate('/');
      setEmailConfirmed(true);
    } catch (error) {
      toast.error('Error sending OTP');
      
    }
  };
  

  const goBack = () => {
    window.history.back();
  };

  const hideInput = emailConfirmed  &&  !emailError ? '' : 'invisible';

  return (
    <>
      {/* ข้อความและปุ่มถอยหลัง */}
      <div className="grid justify-center sm-max md:disabled: gap-4">
        <div className="relative">
          <img src={logo_horizon} className="w-[266px] h-[67px]" alt="" />
          <GrFormPrevious
            className="absolute inline-block top-0 left-0 bg-white h-[67px]"
            onClick={goBack}
          />
        </div>

        {/* ช่องกรอกอีเมล */}
        <div className="grid mx-[auto] gap-2">
          <p className="text-[36px]">Forgot password</p>
          <input
            type="email"
            name=""
            id=""
            placeholder=" E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[50px] border-2 border-slate-900 w-full rounded-lg"
          />
          <br />

          {/* ปุ่มยืนยันอีเมล */}
          <div>
            <button
              onClick={() => {
                handleConfirmEmail();
                setEmailConfirmed(true);
              }}
              disabled={loading} // ป้องกันการคลิกขณะโหลด
              className="hover:text-[#fff565] bg-[#9ffc41]  hover:scale-110 duration-300  py-2 px-4 rounded self-center"
            >
              Confirm E-mail
            </button>
          </div>
          <div>
            <p className='text-gray-400 '>after recive confirmation E-mail, type the OTP down below <span> <br /> Plese stay on this page</span></p>
          </div>

          {/* ช่องกรอกรหัส OTP และรหัสผ่านใหม่ */}
          
          <div className={`grid ${hideInput}  gap-1 pt-8`}>
          <input
            type="text"
            placeholder=" Input OTP here "
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="p-2 border-2 border-slate-900 w-full rounded-lg"
          />
            <br />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="p-2 border-2 border-slate-900 w-full rounded-lg"
          />
          <br />

          {/* ปุ่มเปลี่ยนรหัสผ่าน */}
          <div>
            <button
              onClick={handleChangePassword}
              disabled={loading} // ป้องกันการคลิกขณะโหลด
              className="hover:text-[#fff565] bg-[#9ffc41]  hover:scale-105 duration-150 py-2 px-4 rounded self-center"
            >
              Change Password
            </button>
          </div>

          </div>

          

        </div>
      </div>

      {/* แสดง Modal เมื่อกำลังโหลด */}
      <Modal
        visible={loading}
        footer={null}
        closable={false}
        centered
        maskClosable={false}
      >
        <div style={{ textAlign: "center" }}>
          <Spin size="large" />
          <p style={{ marginTop: 20 }}>Loading...</p>
        </div>
      </Modal>
    </>
  );
}
