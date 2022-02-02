import { useTheme } from "../../utils/provider"
import Image from "next/image";

const NavBar = ({

}) => {

  const { theme } = useTheme();

  return(
    <div className="navbar">
      <Image src="/logo.svg" alt="Logo"  height={100} width={100} />
      <Image src="/home.svg" alt="Home" height={60} width={60} />
      <Image src="/about.svg" alt="About" height={60} width={60} />
      <Image src="/toolkit.svg" alt="Toolkit" height={60} width={60} />
      <Image src="/portfolio.svg" alt="Portfolio" height={60} width={60} />
      <Image src="/contact.svg" alt="Contact" height={60} width={60} />

    </div>
  )

}

export default NavBar;