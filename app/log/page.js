'use client'
import { useEffect, useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { app } from "../config"
import { useRouter } from 'next/navigation';


const page = () => {
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

    <div className="flex flex-col items-center justify-center h-screen">
  <div className="bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 text-white p-6 rounded-md shadow-md">
    {!otpSent ? (
      <div id="recaptcha-container" className="mb-4">
        
      </div>
    ) : null}
  
    <input
      type="tel"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
      placeholder="Enter the phone number"
      className="border border-gray-300 p-3 rounded-md text-black mb-4 w-full focus:outline-none focus:border-blue-500"
    />
  
    <input
      type="text"
      value={otp}
      onChange={handleOtpChange}
      placeholder="Enter OTP"
      className="border border-gray-300 p-3 rounded-md text-black mb-4 w-full focus:outline-none focus:border-blue-500"
    />
  
    <button
      onClick={otpSent ? handleOtpSubmit : handleSendOtp}
      className={`bg-${otpSent ? 'green' : 'blue'}-500 text-white p-3 rounded-md transition duration-300 w-full focus:outline-none hover:bg-opacity-80`}
    >
      {otpSent ? 'Submit OTP' : 'Send OTP'}
    </button>
    
  </div>
</div>

  


  )
}

export default page