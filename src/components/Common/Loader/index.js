import "./style.css";
import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="boxContainer">
            <motion.div
                className="box"
                animate={{
                    scale: [1, 1.5, 1.5, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["50%", "50%", "0%", "0%", "50%"]
                }}
                transition={{
                    duration: 1.6,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            />
        </div>
    );
}
