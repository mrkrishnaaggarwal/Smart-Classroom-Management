import React from 'react'
async function saveImageToBase64() {
  try {
    // Read image file and convert to Base64
    const image = fs.readFileSync("/Users/krishnaaggarwal/Desktop/Mac/ml/IMG_4864.jpg");
    const base64Image = image.toString('base64');
    
    // Create a document to store Base64 image
    const document = {
      imageData: base64Image,
      createdAt: new Date()
    };

    return document;
  } catch (err) {
    console.error('Error occurred while saving image:', err);
  }
}
const ProfessorClasses = () => {

  return (
    <div>
      ProfessorClasses
    </div>
  )
}

export default ProfessorClasses
