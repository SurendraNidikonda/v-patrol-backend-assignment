import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import './App.css'; // You can style the overlays as needed

const App = () => {
  const [logo,setLogo] = useState("https://res.cloudinary.com/daeetgsof/image/upload/v1703340040/pexels-robin-stickel-70497_m3ngn5.jpg");
  const [logoHeight,setLogoHeight] = useState(parseInt('100'))
  const [logoWidth,setLogoWidth] = useState(parseInt("400"))
  const [username,setUsername] = useState('Surendra Nidikonda')
  const [videoUrl,setVideoUrl] = useState("https://www.youtube.com/watch?v=Uj6CzaXgZgc")
  const [videoWidth,setVideoWidth] = useState(parseInt('600'));
  const [videoHeight,setVideoHeight] = useState(parseInt('50'));
  return (
    <div className='bg-container'>
        <img className='logo-image'  src= {`${logo}`} style={{height: `${logoHeight}px`,width: `${logoWidth}px`}}  alt='logo' />
        <input type='text' onChange={e => setLogo(e.target.value)} placeholder='Change Logo image' />
        <div className='logo-input'>
          <input type='text'  onChange={(e) => setLogoHeight(e.target.value)}  placeholder='logo height max 100px'/>
          <input type='text'  onChange= { (e) => setLogoWidth(e.target.value) } placeholder='logo width max 400px'/>
        </div>
        <div className='title'>
           <h1>Welcome to {username} for live Streaming App</h1>
           <input type='text' placeholder='Customize Username Title' onChange={e => setUsername(e.target.value)}/>
        </div>

        <div >
           <ReactPlayer style={{height:`${videoHeight}px`, width: `${videoWidth}px`}} url= {`${videoUrl}`} /> 
           
        </div>
        <div>
           <input type='text' onChange={e => setVideoUrl(e.target.value)} placeholder='Enter video Url'/>
           <input type='text'  onChange= { (e) => setVideoHeight(e.target.value) } placeholder='change height of video player'/>
           <input type='text'  onChange= { (e) => setVideoWidth(e.target.value) } placeholder='change width of video player'/>
        </div>
        
    </div>
  )
};

export default App;
