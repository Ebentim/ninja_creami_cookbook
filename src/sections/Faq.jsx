import {faq} from "../constants/index.jsx";

const Faq = () => {
    return (
        <section>
            <div>
                {faq.map(({question, answer}) => (
                    <div key={question}>
                        <p>{question}</p>
                        <p>{answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Faq
