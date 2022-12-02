import styled from "styled-components";

const ProfileCardCont = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  border-radius: 10px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileHero = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  background-color: red;
`;

export default function ProfileCard() {
  return (
    <ProfileCardCont>
      <ProfileHero />
    </ProfileCardCont>
  );
}
