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
    <div
      id="call-to-actions"
      className="w-[95%] lg:w-9/12 mx-auto flex flex-col items-center justify-center mt-4 scroll-m-[60px]"
    >
      <div className="bg-l2 w-full py-6 flex flex-col items-center justify-center mt-4">
        <h4 className="highlight">Get Your Free Purchase Coupon Now!</h4>
        <p>Enjoy exclusive discounts on our cookbooks.</p>
        <form className="flex flex-col justify-start gap-3 w-11/12 md:w-[450px]">
          <label htmlFor={"email"} className="highlight">
            Email
          </label>
          <div className="flex gap-3 w-full ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              className="rounded-md w-2/3 p-2 focus:outline-p17"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              onSubmit={handleSubmit}
              additionalClassName="bg-t10 border-s1 border hover:bg-s1 hover:text-p1 transition-colors duration-500 w-36 text-[12px] text-center"
              disabled={submitting}
            >
              claim your coupon
            </Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <CallToAction />
      </div>
    </div>
  );
};
export default CallToActions;
