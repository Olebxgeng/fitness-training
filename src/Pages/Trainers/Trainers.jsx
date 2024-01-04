import "./Trainers.css"
import Header from "../../Components/Header"
import HeaderImage from "../../images/header_bg_5.jpg"
import { trainers } from "../../data"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Trainer from "../../Components/Trainer";

const Trainers = () => {
  return (
    <>
    <Header title="Trainers" image={HeaderImage}>
      Facilis, iusto numquam laboriosam expedita qui excercitationem? Dicta vero accusantium est aut molestiae fugit doloremque suscipit quod.
    </Header>

    <section className="trainers">
      <div className="container trainers_container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return <Trainer key={id} image={image}  name={name} job={job} socials={[

              {icon: <FaInstagram/>, link: socials[0]},
              {icon: <FaXTwitter/>, link: socials[1]},
              {icon: <FaFacebook/>, link: socials[2]},
              {icon: <FaLinkedin/>, link: socials[3]},
            ]}     
            /> 

          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers