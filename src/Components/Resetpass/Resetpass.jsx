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

  const handleConfirmEmail = async () => {
    try {
      setLoading(true); 
      const res = await sendOTP({ email });
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      toast(res.message);
      setLoading(false); 
    } catch (error) {
      toast.error('Error sending OTP');
      setLoading(false); 
    }
  };
  

  const handleChangePassword = async () => {
    try {
      setLoading(true);
      const res = await rePass({ otp, newPassword });
      toast(res);
      navigate('/');
    } catch (error) {
      toast.error('Error sending OTP');
    }
  };
  

  const goBack = () => {
    window.history.back();
  };

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
              onClick={handleConfirmEmail}
              disabled={loading} // ป้องกันการคลิกขณะโหลด
              className="bg-myGreen text-black  py-2 px-4 rounded self-center"
            >
              Confirm E-mail
            </button>
          </div>

          {/* ช่องกรอกรหัส OTP และรหัสผ่านใหม่ */}
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="p-2 border-2 border-slate-900 w-full rounded-lg"
          />

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
              className="bg-myGreen text-black  py-2 px-4 rounded self-center"
            >
              Change Password
            </button>
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
