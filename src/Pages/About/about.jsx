import AboutHeader from "../../Images/4.jpg";
import "./about.css";
import AboutImg from "../../Images/home_about.png";
const About = () => {
  return (
    <>
      <div className="about_header">
        <div>
          <img src={AboutHeader} alt="" />
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
    </>
  );
};
export default About;
