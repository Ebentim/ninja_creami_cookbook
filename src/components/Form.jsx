import { useForm, ValidationError } from '@formspree/react';

export const ContactForm =()=> {
    const [state, handleSubmit] = useForm("mwpkearp");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
First name
            </label>
            <input
                id="name"
                type="text"
                name="name"
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}