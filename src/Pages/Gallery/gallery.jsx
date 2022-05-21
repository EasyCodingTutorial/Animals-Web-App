import GalleryHeader from "../../Images/9.jpg";
import "./gallery.css";
import Img1 from "../../Images/2.jpg";
import Img2 from "../../Images/3.jpg";
import Img3 from "../../Images/7.jpg";
import Img4 from "../../Images/4.jpg";
import Img5 from "../../Images/5.jpg";
import Img6 from "../../Images/8.jpg";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <img src={GalleryHeader} alt="" />
      </div>

      {/* Gallery Section */}
      <div className="gallery_main container">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Img1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img2} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img3} className="img-fluid" alt="" />
            </div>
          </div>

          {/* Second Row */}

          <div className="col-sm-4">
            <div className="box">
              <img src={Img4} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img5} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img6} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
