'use Client'
import React, { useEffect, useState } from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { app } from "./config"
import { useRouter } from 'next/navigation';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    window.RecaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      'size': 'normal',
      'callback': (response) => {

      },
      'expired-callback': () => {

      }
    });
  }, [auth]);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = async () => {
    try {
      const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, '')}`;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.RecaptchaVerifier);
      setConfirmation(confirmation);
      setOtpSent(true);
      setPhoneNumber('');
      alert('otp has been sent');
    } catch (error) {
      console.error(error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      console.log(otp);
      await confirmation.confirm(otp);
      setOtp('');
      router.push('/dashbord')
      console.log('successful, give route');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!otpSent ? (
        <div id='recaptcha-container'>

        </div>
      ) : null}

      <input type='tel'
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder='enter the phone number'
        className='border border-gray-500 p-2 rounded-md text-black' />

      <input
        type='text'
        value={otp}
        onChange={handleOtpChange}
        placeholder='Enter OTP'
        className='border border-gray-500 p-2 rounded-md text-black'
      />

      <button onClick={otpSent ? handleOtpSubmit : handleSendOtp}
        className={`bg-${otpSent ? 'green' : 'blue'} -500 text-white p-2 `}
        style={{ backgroundColor: otpSent ? 'green' : 'blue' }}>
        {otpSent ? 'submit otp' : 'send otp'}
      </button>
    </div>
  );
};

export default Login;
