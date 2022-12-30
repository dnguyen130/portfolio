import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      type: "linear",
      duration: 0.5,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;
