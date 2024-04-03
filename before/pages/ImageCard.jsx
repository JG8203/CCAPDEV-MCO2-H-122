import React from 'react';
export default ImageCard;
function ImageCard({src}) {
    return (
        <div className="w-52 h-80 rounded-lg border border-black flex justify-center items-center overflow-hidden">
            <img src={src} alt="image" className="w-full h-full object-cover"/>
        </div>
    );
}


