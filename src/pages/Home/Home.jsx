import { HomeTitle, HomeTitleBox, NavLinkStyled } from './Home.styled';
import ParticlesLines from 'components/ParticlesLines/ParticlesLines';
import { useAuth } from 'hooks';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HomeTitleBox>
      <ParticlesLines />

      {isLoggedIn ? (
        <HomeTitle>
          Greetings, thank you for registering and showing confidence in us, use
          the contact book with pleasure =)
        </HomeTitle>
      ) : (
        <HomeTitle>
          Hello, in order to use the site, you need to 
          <NavLinkStyled to="/register"> registration</NavLinkStyled>, 
          or if you were previously registered, you can{' '}
          <NavLinkStyled to="/login"> log in</NavLinkStyled>.
        </HomeTitle>
      )}
    </HomeTitleBox>
  );
};

export default HomePage;