import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { ToastContainer } from 'react-toastify';
import ScoreCard from '@/components/ScoreCard';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: "",
        email: "",
        phone: "",
        scores: []
    });
    async function data() {
        const e = localStorage.getItem('loggedInEmail')
        const url = `http://localhost:4000/user/profile?email=${e}`;
        const headers = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        const response = await fetch(url, headers);
        const result = await response.json();
        const { name, email, phone, scores } = result;
        setProfileData({
            name: name,
            email: email,
            phone: phone,
            scores: scores
        });
    }
    useEffect(() => {
        data();
    }, [])

    return (
        <>
            <Navbar />
            <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Profile Page</div>
                        <div className="text-gray-700 text-base mb-2">
                            <p><strong>Name:</strong> {profileData.name}</p>
                            <p><strong>Email:</strong> {profileData.email}</p>
                            <p><strong>Phone:</strong> {profileData.phone}</p>
                        </div>
                    </div>
                    {/* <div className="px-6 py-4 bg-gray-100">
                        <h3 className="font-semibold text-lg mb-2">Scores</h3>
                        <ul className="list-disc list-inside">
                            {profileData.scores.map((score, index) => (
                                <ScoreCard key={index} score={score} />
                            ))}
                        </ul>
                    </div> */}
                    <div className="min-h-screen bg-gray-100 p-6">
                        <h1 className="text-3xl font-bold mb-6">Score Cards</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {profileData.scores.map((score, index) => (
                                <ScoreCard key={index} score={score} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Profile;
