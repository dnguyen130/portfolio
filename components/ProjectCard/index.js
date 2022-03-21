import styled from "styled-components";

const ProjectCardCont = styled.div`
	border: 1px solid red;
	flex: 1;
	height: 300px;
	margin: 40px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ProjectCard = () => {
	return (
		<ProjectCardCont>
			<h3>Steady</h3>
		</ProjectCardCont>
	);
};

export default ProjectCard;
