import {testimonials} from "../constants/index.jsx";
import Card from "../components/Card.jsx";

const Testiminials = () => {
    return (
        <section>
            <h3>What Our Readers Say</h3>
            <div>
                {testimonials.map(({image, name, desc,})=>(
                    <Card key={desc} image={image} name={name} desc={desc}/>
                ))}
            </div>
        </section>
    )
}
export default Testiminials
