import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  let boxesArray = [];
  for(let i=0;i<boxes.length;i++){
  	boxesArray.push(boxes[i]); 
  }	
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>  
        {boxesArray.map((box, id)=> <div className='bounding-box' key={id} style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>)}
      </div>
    </div>
  );
}

export default FaceRecognition;