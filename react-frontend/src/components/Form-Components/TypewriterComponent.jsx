import { Typewriter } from "react-simple-typewriter";

const TypewriterComponent = () => {
  return (
    <h3>
      Elevate your HR{" "}
      <span className="loop">
        <Typewriter
          words={["Management!", "Journey!", "Experience!"]}
          loop={0} // 0 = infinite
          cursor={false} // If true show cursor
          cursorStyle="|" // Change the style of the cursor
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h3>
  );
};

export default TypewriterComponent;
