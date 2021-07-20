import React from 'react';
import img1 from "../../Images/gallery/coffee-img-1.jpeg"
import img2 from "../../Images/gallery/coffee-img-2.jpeg"
import img3 from "../../Images/gallery/coffee-img-3.jpeg"
import img4 from "../../Images/gallery/coffee-img-4.jpg"
import img5 from "../../Images/gallery/coffee-img-5.jpg"
import img6 from "../../Images/gallery/coffee-img-6.jpeg"
import img7 from "../../Images/gallery/coffee-img-7.jpeg"
import img8 from "../../Images/gallery/coffee-img-8.jpeg"
import img9 from "../../Images/gallery/coffee-img-9.jpeg"
import img10 from "../../Images/gallery/coffee-img-10.jpg"




const GalleryNew = () => {
    const images = [img1, img7, img3, img8, img5, img6, img2, img9, img4, img10]

    return (
        <div className="galleryNew">
            <div className="galleryNew__items">
                {images.map((image, i) => {
                    return (
                        <div className="galleryNew__item" key={i}>
                            <img src={image} alt="i" key={i}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default GalleryNew;
