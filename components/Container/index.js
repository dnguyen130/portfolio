import { useTheme } from "../../utils/provider"

const Container = ({
  children
}) => {

  const { theme } = useTheme();

  return (
    <div className="container">
      {children}
    </div>
  )

}

export default Container;