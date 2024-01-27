import { motion } from "framer-motion";
import Profile from "@/components/Home/Profile";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="bg-white top-24 relative shadow-md rounded-xl max-w-xl mx-4 sm:mx-auto"
      >
        <Profile/>
      </motion.div>
    </>
  );
};

export default Home;
