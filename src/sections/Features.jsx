import {features} from "../constants/index.jsx";
import Card from "../components/Card.jsx";

const Features = () => {
    return (
        <section>
            <h3>Why you will love this cookbook</h3>
            <div>
                {features.map(({icon, title, desc})=>(
                    <Card key={title} icon={icon} title={title} desc={desc}/>
                ))}
            </div>
        </section>
    )
}
export default Features
