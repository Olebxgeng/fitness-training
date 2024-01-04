import {useState} from "react"
import { testimonials } from "../data"
import SectionHead from "./SectionHead"
import { FaQuoteLeft } from "react-icons/fa"
import Card from "../UI/Card"
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const Testimonials = () => {

    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]

    const prevTestimonialHandler = () =>{
        
        setIndex(prev => prev -1)
           
        console.log("prevTestimonialHandler - index", index);
        
        if(index <= 0){
            setIndex(testimonials.length -1)
       }

    }

    
    const nextTestimonialHandler = () =>{

        setIndex(prev => prev +1)
        
        console.log("nextTestimonialHandler", index);
        
        if(index >= testimonials.length - 1){
             setIndex(0)
        }
    }

 console.log("Testimonials",{name})
  return (
    <section className="testimonials">
        <div className="container testimonials_container">
            <SectionHead icon={<FaQuoteLeft/>} title="Testimonials" className="testimonials_head"/>
            <Card className="testimonial">
                <div className="testimonial_avatar">
                    <img src={avatar} alt={name}/>
                </div>
                <p className="testimonial_quote">
                    {`"${quote}"`}
                </p>
                <h5>{name}</h5>
                <small className="testimonial_title">{job}</small>
            </Card>
            <div className="testimonials_btn_container">
                <button className="testimonials_btn" onClick={prevTestimonialHandler}><IoIosArrowDropleft/></button>
                <button className="testimonials_btn" onClick={nextTestimonialHandler}><IoIosArrowDropright/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials