import HeaderImg from "../../Images/8.jpg";
import AboutImg from "../../Images/home_about.png";
import Img1 from "../../Images/96.jpg";
import Img2 from "../../Images/9.jpg";
import Img3 from "../../Images/7.jpg";
import second_header from "../../Images/10.jpg";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="header">
        <div>
          <div className="img">
            <img src={HeaderImg} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="HeaderContent">
          <h6>
            {" "}
            Why You Not Try Buy A <span>Horse</span> ?
          </h6>
          <button className="btn">Read More</button>
        </div>
      </div>

      {/* About Section */}
      <div className="about container">
        <div className="row">
          <div className="col-sm-5">
            <img src={AboutImg} className="img-fluid" alt="" />
          </div>

          <div className="col-sm-6">
            <h6>Easy Coding Tutorial</h6>
            <h5>We Always With You...</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              aspernatur quis ab! Iusto, veniam obcaecati. Aspernatur eius non
              quasi quam, eaque modi ipsam sequi dolore illo, aperiam quisquam
              minus debitis. <br />
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam eligendi aspernatur eum ea obcaecati voluptatem aut
              tempore libero perferendis. Cupiditate nam quasi assumenda
              exercitationem aspernatur a minima provident veritatis! Aut.{" "}
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, excepturi. Natus magni corporis, tempore quaerat in
              consequatur iste doloribus molestiae fugiat libero a quia
              repellat, quos ad adipisci, dolore necessitatibus?
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="details container">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Img1} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>Horsebrid</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mid">
            <div className="box">
              <img src={Img2} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>Horsebrid</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img3} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>Horsebrid</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Header */}
      <div className="second_header">
        <div>
          <img src={second_header} alt="" />
        </div>
        <div className="Overlay"></div>
      </div>

      {/* Details */}
      <div className="details container">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Img1} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>Horsebrid</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mid">
            <div className="box">
              <img src={Img2} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>Horsebrid</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img3} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>Horsebrid</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
