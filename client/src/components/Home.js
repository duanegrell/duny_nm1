import React, { useState } from 'react';
import "./Home.css"

function Home() {

  const [images, setImages] = useState([
    { id: 1, src: 'https://as2.ftcdn.net/v2/jpg/02/16/59/83/1000_F_216598336_iVTqnp9P0vx1oaBNpo72CsCT2oQROa8x.jpg' },
    { id: 2, src: 'https://img.freepik.com/premium-vector/little-kid-sit-wheelchair-feel-happy_97632-7222.jpg?w=2000' },
    { id: 3, src: 'https://thumbs.dreamstime.com/b/nervous-system-anatomy-children-nervous-system-educational-anatomy-infographic-chart-kids-nerves-spinal-cord-brain-183179689.jpg' },
  ]);

  return (
    <div className="title-container">
      <div className="image-container">

        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Image ${image.id}`}
            className="image"
          />
        ))}
      </div>
      <h1 className="title">PT624: Neuromuscular Evaluation and Treatment</h1>
    </div>
  );
}

export default Home;
