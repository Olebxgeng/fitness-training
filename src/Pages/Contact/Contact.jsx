import "./Contact.css"
import Header from "../../Components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import{ MdEmail} from "react-icons/md"
import { MdOutlineWhatsapp } from "react-icons/md"

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi cupla nobis nemo natus doloremque?
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="mailto:fake@fitnesstraining.com" target="_blank" rel="noreferrer">{<MdEmail/>}</a>
          <a href="https://wa.me//+27123456789" target="_blank" rel="noreferrer">{<MdOutlineWhatsapp/>}</a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact