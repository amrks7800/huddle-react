import { StyledHeader } from "./styles/Header-s";
import { Nav } from "./styles/Header-s";
import { Logo } from "./styles/Header-s";
import { Container } from "./styles/Container-s";
import { Flex } from "./styles/Flex-s";
import { Button } from "./styles/Button-s";
import { Image } from "./styles/Header-s";
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./imgs/logo.svg" />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./imgs/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
