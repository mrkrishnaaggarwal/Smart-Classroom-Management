import React, { useState } from 'react';
import axios from 'axios';

const UploadPhoto = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setUploadStatus('Please select a file before uploading.');
            return;
        }

        // Convert the selected file to Base64
        const convertToBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result.split(',')[1]); // Remove the prefix part of the base64 string
                reader.onerror = error => reject(error);
            });
        };

        try {
            const base64Image = await convertToBase64(file);
            console.log(base64Image);
            const response = await axios.post('http://localhost:3000/api/v1/professor.attendance', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                image: base64Image
            }, {
                headers: {
                    'Content-Type': 'application/json', // Ensure the content type is JSON
                },
            });

            setUploadStatus('Upload successful!');
            // console.log('Upload successful!', response.data);
        } catch (error) {
            setUploadStatus('Error uploading file.');
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit" className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>Upload Photo</button>
            </form>
            { uploadStatus && <div>{uploadStatus}</div> }
        </div>

    );
};

export default UploadPhoto;
