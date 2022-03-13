import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
import styled from "styled-components";
import { site_theme } from "../../utils/variables";
import { useTheme } from "../../utils/provider";

const ChevronCont = styled.div`
	width: 40px;
	height: 40px;
	position: absolute;
	bottom: 2%;
	color: ${(props) => props.clr};
	transition: 0.25s;
	cursor: pointer;

	&:hover {
		color: ${(props) => props.hvrclr};
	}
`;

const Chevron = ({}) => {
	const { theme } = useTheme();

	return (
		<ChevronCont clr={site_theme[theme].text} hvrclr={site_theme[theme].strong}>
			<motion.div
				animate={{ y: -15 }}
				transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }}
			>
				<a href="#about">
					<FaAngleDoubleDown size="40px" />
				</a>
			</motion.div>
		</ChevronCont>
	);
};

export default Chevron;
