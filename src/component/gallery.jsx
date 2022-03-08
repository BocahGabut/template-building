import React,{useEffect} from 'react'
import '../scss/gallery.scss'
import Aos from 'aos';

function GalleryFlex(props) {
  return (
    <div className="gallery">
        {props.data.map((column) => {
            return(
            <div className="gallery__column" >
               
               {column.data.map((image)=>{
                   return(
                    <a href="https://unsplash.com/@a2eorigins" className="gallery__link">
                        <figure className="gallery__thumb">
                            <img src={image.image} alt="Portrait by Alex Perez" className="gallery__image" />
                            <figcaption className="gallery__caption">Portrait by Alex Perez</figcaption>
                        </figure>
                    </a>
                   )
               })}
        
            </div>
            )
        })}
            
    </div>
  );
}

var anim = ['fade-up','fade-down','fade-right','fade-left','zoom-in','zoom-in-up','zoom-in-left','zoom-in-right','zoom-in-down','zoom-out','zoom-out-up','zoom-out-left','zoom-out-right','zoom-out-down'];

function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

const randomAos = () => {
    var getImage = document.querySelectorAll('.masory-items.aos-init')

    for(let i = 0; i < getImage.length;i++){
        getImage[i].setAttribute('data-aos',randomArrayShuffle(anim)[0])
    }

}

setTimeout(() => {
    randomAos()
}, 250);

const GalleryMasory = (props) => {
    return(
        <>
            {
                (props.animate === false) ? 
                    <div className="masory-container">
                    {
                        props.data.map((items) => {
                        return(
                                <div className="masory-items" key={items.id}>
                                    <img src={items.image} alt="" />
                                </div>
                            )
                        })
                    }
                </div> : 
                <div className="masory-container">
                    {
                        props.data.map((items) => {
                        return(
                                <div className="masory-items aos-init" key={items.id} 
                            data-aos="fade-up"
                                    data-aos-offset="200"
                                    data-aos-delay="250"
                                    data-aos-duration="1000">
                                    <img src={items.image} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}

const Gallery = (props) => {
    useEffect(() => {
        Aos.init({
          duration : 2000
        });
        Aos.refresh();
      }, []);
    switch(props.type) {
        case 'gallery-flex' : 
        return <GalleryFlex data={props.data} />
        case 'gallery-masory' : 
        return <GalleryMasory animate={props.animate} data={props.data} />
            default : return <GalleryFlex data={props.data} />
    }
}

export default Gallery