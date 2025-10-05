
import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";


function Form() {
  const [discordTag, setDiscordTag] = useState("");
  const [enterMotive, setEnterMotive] = useState("");
  const [sendedBy, setSendedBy] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [isError, setIsError] = useState(false);

  const redirect = useNavigate();

  const handleSend = async () => {
    try {
      const res = await fetch(
        import.meta.env.VITE_WEBHOOK,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `Discord tag: ${discordTag}\nWhy: ${enterMotive}\nSent by: ${sendedBy}`,
          }),
        }
      );

      if (res.ok) {
        setIsError(false);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        redirect('/')
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      setIsError(true);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <div className="body-content">
      <div className="Form">
        <input required="yes" type="text" name="text" autocomplete="off" class="input" placeholder="Discord tag" onChange={(e) => setDiscordTag(e.target.value)}/>
        <input required="yes" type="text" name="text" autocomplete="off" class="input" placeholder="Why do you want to enter?" onChange={(e) => setEnterMotive(e.target.value)}/>
        <input required="yes" type="text" name="text" autocomplete="off" class="input" placeholder="Did someone send you? Who?" onChange={(e) => setSendedBy(e.target.value)}/>
        <button type="button" class="button" onClick={handleSend}>
          <span class="fold"></span>

          <div class="points_wrapper">
            <i class="point"></i>
            <i class="point"></i>
            <i class="point"></i>
            <i class="point"></i>
            <i class="point"></i>
            <i class="point"></i>
            <i class="point"></i>
            <i class="point"></i>
            <i class="point"></i>
            <i class="point"></i>
          </div>

          <span class="inner">
            <svg
              class="icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
            >
              <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
            </svg>
            Send it!
          </span>
        </button>

        {showNotification && (
          <div className={`notification ${isError ? "error" : "success"}`}>
            {isError ? "An error occurred!" : "Sent successfully!"}
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
