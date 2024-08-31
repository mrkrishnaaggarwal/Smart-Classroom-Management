import React from 'react'
// const waveBackground = 'https://img.freepik.com/free-vector/purple-gradient-background-wave-shape-modern-design_343694-2480.jpg?t=st=1724925300~exp=1724928900~hmac=f76b4d1ce30e08edbb4d88c381d482c71fc94fa7ee39137bbee6dcf581480d76&w=1060'
import waveBackground from '../assets/try2.jpeg'
const Welcome = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl p-4 ml-2 max-h-fit">
            <h2 className="text-sm font-semibold">WELCOME BACK</h2>
            <h1 className="text-3xl font-bold mt-1">Anshuman</h1>
            <div className='mt-1'>Great To See You Again !</div>
            <div className=''>Check Your Classes, Timetable, Homework, And Attendance On Your Dashboard.</div>
        </div>
      );
}

export default Welcome

// style={{
//   //backgroundImage: `url(${waveBackground})`, // Set the background image
//   backgroundSize: 'cover', // Ensure the image covers the entire card
//   backgroundRepeat: 'no-repeat', // Prevent the image from repeating
//   backgroundPosition: 'right', // Align the image to the right
// }}