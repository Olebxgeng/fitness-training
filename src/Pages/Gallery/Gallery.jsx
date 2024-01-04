import "./Gallery.css"
import Header from "../../Components/Header"
import HeaderImage from "../../images/header_bg_3.jpg"


const Gallery = () => {

  const galleryLength = 15
  const images = []
  for (let i = 1; i<= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  console.log(images)

  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Quisquam id tenetur adipisci nesciunt ipsum amet in quibusdam, arcitecto nostrim nobis, est, dereunt odio possimus inventore eveniet illum perspiciatis
    </Header>
    <section className="gallery">
      <div className="container gallery_container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery ${index + 1}`}/>
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery