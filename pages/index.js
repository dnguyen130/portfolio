import NavBar from "../components/NavBar"
import Container from "../components/Container"

export default function Home() {
  return (
    <div>
      <Container>
        <NavBar />
        <div className="column intro">
          <div>
            <h2>Ahoy, I'm</h2>
            <h1>Danny Thai Nguyen</h1>
          </div>
          <h3>I’m a web developer with a desire to create interactive and accessible applications and experiences on the web.</h3>
          <h3>Currently a digital design &amp; development student at BCIT, learning modern web/mobile development, UI/UX and graphic design.</h3>
        </div>
      </Container>
      <Container>
      </Container>
    </div>
  )
}
