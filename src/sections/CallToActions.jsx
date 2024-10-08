import CallToAction from "../components/CallToAction.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";
import axios from "axios";

const CallToActions = () => {
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post("/api/calltoactions", email);
      if (response.status === 200) {
        setSubmitting(false);
        setMessage("");
      } else {
        setMessage("Please try again later");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="bg-l2 w-9/12 mx-auto h-96 flex flex-col items-center justify-center mt-4">
      <form className="flex flex-col justify-start gap-3 w-11/12 md:w-96">
        <label htmlFor={"email"}>Email</label>
        <div className="flex gap-3 w-full flex-col md:flex-row">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
            className="rounded-md md:w-2/13 px-2 focus:outline-p17"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onSubmit={handleSubmit}
            additionalClassName="bg-s1 text-p1"
            disabled={submitting}
          >
            Get It
          </Button>
        </div>
      </form>
      <div className="h-0.5 w-11/12 bg-p9" />
      <CallToAction />
    </div>
  );
};
export default CallToActions;
