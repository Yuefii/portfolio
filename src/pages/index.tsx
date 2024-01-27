import { motion } from "framer-motion";
import Profile from "@/components/Home/Profile";
import Footer from "@/components/Footer/Footer";
import Project from "@/components/Projects/Project";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="bg-white top-24 relative shadow-md rounded-xl max-w-2xl mx-4 sm:mx-auto"
      >
        <Profile/>
        <Project/>
        <Footer/>
      </motion.div>
    </>
  );
};

export default Home;
