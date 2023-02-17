import "./Stacks.css";
import { icons } from "./icons";
import { motion } from "framer-motion";

export default function Stacks() {
  return (
    <div className="stacks container">
      <div className="carousel--description">
        <p>I have significant experience with these tools.</p>
        <hr></hr>
        <div className="scroll--container">
          <span className="scroll">
            {" "}
            {"< --"} Click and Hold the icons then Swipe left to see more{" "}
          </span>
        </div>
      </div>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -4000 }}
        className="carousel"
      >
        {icons.map((icon) => {
          return (
            <motion.div className="item">
              <img src={icon} alt="" key={icon} />
            </motion.div>
          );
        })}
        {icons.map((icon) => {
          return (
            <motion.div className="item">
              <img src={icon} alt="" key={icon} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
