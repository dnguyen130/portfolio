import { useTheme } from "../../utils/provider"
import Image from "next/image";

const NavBar = ({

}) => {

  const { theme } = useTheme();

  return(
    <div className="navbar">
      <Image src="/logo.svg" height={100} width={100} />
      <Image src="/home.svg" height={60} width={60} />
      <Image src="/about.svg" height={60} width={60} />
      <Image src="/toolkit.svg" height={60} width={60} />
      <Image src="/portfolio.svg" height={60} width={60} />
      <Image src="/contact.svg" height={60} width={60} />

    </div>
  )

}

export default NavBar;