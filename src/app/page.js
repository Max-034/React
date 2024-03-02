'use client'

import React, { useState, useEffect } from 'react';


function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [agentId, setAgentId] = useState('add6443a-41bd-e414-f6ad-e58d267f4e95');
  const [imageOpacity, setImageOpacity] = useState(1);

  const handleImageClick= (aid) => {
    console.log('Image clicked');
    setIsImageClicked(true);
    setAgentId(aid)
    setImageOpacity(0.5);
  };

  const handleImageLeave = () => {
    setIsImageClicked(false);
    setImageOpacity(1.0);
  };

 

  useEffect(() => {

    

    
    fetch("https://valorant-api.com/v1/agents/" + agentId)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [agentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const imageData= [
    {id: 1 , src: 'valorant_agent_jett_by_nautox1x_ddytnyw.png' , alt:'add6443a-41bd-e414-f6ad-e58d267f4e95'},
    {id: 2 , src: 'valorant_agent_viper_by_nautox1x_ddyto6r.png' , alt: '707eab51-4836-f488-046a-cda6bf494859'},
    {id: 3 , src: 'chamber_render__high_res__by_lynwulf_dg7d28y.png' , alt: '22697a3d-45bf-8dd7-4fec-84a9e28c69d7'},
    {id: 4 , src: 'deadlock_render__high_res__by_lynwulf_dg7d1te.png' , alt: 'cc8b64c8-4b25-4ff9-6e7f-37b4da43d235'},
    {id: 5 , src: 'fade_renders__high_res__by_lynwulf_dg7d25q.png' , alt: 'dade69b4-4f5a-8528-247b-219e5a1facd6'},
    {id: 6 , src: 'gekko_render__high_res__by_lynwulf_dg7d20w.png' , alt: 'e370fa57-4757-3604-3648-499e1f642d3f'},
  ];

  return (
    
    <div className = "container">


      
      {imageData.map((image) => (
        <div className = "image-container">
          <div className = "image-wrapper">
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          style={{ width: '200px', margin: '100px' , opacity: imageOpacity}}
          onMouseEnter = {() => handleImageClick(image.alt)}
          onMouseLeave = {handleImageLeave}

        />
        </div>
   


        {isImageClicked && data && (image.alt === agentId) && (
          <div className = "item">

       
            <p className = "name" >{data.data.displayName}</p>
            <br></br>
            <p>{data.data.abilities[0].displayName.toUpperCase()} - {data.data.abilities[0].description}</p>
            <br></br>
            <p>{data.data.abilities[1].displayName.toUpperCase()} - {data.data.abilities[1].description}</p>
            <br></br>
            <p>{data.data.abilities[2].displayName.toUpperCase()} - {data.data.abilities[2].description}</p>
            <br></br>
            <p>{data.data.abilities[3].displayName.toUpperCase()} - {data.data.abilities[3].description}</p>

            
            
            
         
          </div>
        )}
        {isImageClicked && data && (image.id !== 'certainID') && (
          <div>
   
          </div>
        )}
        </div>
      ))}
      
    </div>

 
  );
}

export default MyComponent;

