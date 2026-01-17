import React, { useRef, useState } from 'react';
import defaul_img from '../Assets/image.jpeg'; 
import './ImageGenerator.css';
// 1. Import the library
import { InferenceClient } from "@huggingface/inference";

const ImageGeneartor = () => {
  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState(false);
  let inputRef = useRef(null);


  const token = process.env.REACT_APP_HUGGING_FACE_TOKEN; 

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    setLoading(true);

    try {
  
      const client = new InferenceClient(token);


      const imageBlob = await client.textToImage({
        model: "stabilityai/stable-diffusion-xl-base-1.0",
        inputs: inputRef.current.value,
        parameters: { negative_prompt: "blurry" }
      });
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImage_url(imageObjectURL);

    } catch (error) {
      console.error("Error generating image:", error);
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='ai-image-generator'>
     <div className="header">Ai Image <span>Generator</span></div>
      
      <div className="img-loading">
        <div className="image">
            <img src={image_url === "/" ? defaul_img : image_url} alt="Generated" />
        </div>
        <div className="loading">
            <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
            <div className={loading ? "loading-text" : "display-none"}>Loading...</div>
        </div>
      </div>

      <div className="search-box">
        <input type="text" ref={inputRef} className='search-input' placeholder='Describe What You Want To See' />
        <div className="generate-btn" onClick={() => {imageGenerator()}}>Generate</div>
      </div>
    </div>
  )
}

export default ImageGeneartor;