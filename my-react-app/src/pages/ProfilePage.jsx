import React, { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className='text-center py-20 text-gray-600'>
        <p>Please login to view your profile.</p>
        <button
          onClick={() => navigate('/login')}
          className='mt-4 bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800'
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#fffdf9] text-gray-800'>
      <div className='bg-white shadow-lg rounded-xl p-8 text-center'>
        <h2 className='text-2xl font-bold mb-2 text-amber-800'>
          Welcome, {user.name}
        </h2>
        <p className='text-gray-600 mb-4'>{user.email}</p>
        <button
          onClick={() => {
            logout();
            navigate('/login');
          }}
          className='bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800'
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
