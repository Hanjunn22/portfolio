import { AiFillBulb, AiFillGithub, AiFillMail } from 'react-icons/ai';
// import { RxNotionLogo } from 'react-icons/rx';
// import { RiProfileFill } from 'react-icons/ri';
import styled from 'styled-components';

const ContactMe = () => {
  return (
    <ContactMeContainer>
      <SocialItem>
        <a
          href="https://www.notion.so/0fbd40509b444dc3a75a7f169091835f"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <AiFillBulb />
          </div>
          Blog
        </a>
      </SocialItem>
      <SocialItem>
        <a
          href="https://github.com/Hanjunn22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <AiFillGithub />
          </div>
          Github
        </a>
      </SocialItem>
      <SocialItem>
        <a
          href="mailto:hanjunn22@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <AiFillMail />
          </div>
          Email
        </a>
      </SocialItem>
      <SocialItem>
        {/* <a
          href="여기에 포트폴리오 주소"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <RiProfileFill />
          </div>
          Profile
        </a> */}
      </SocialItem>
    </ContactMeContainer>
  );
};

const ContactMeContainer = styled.ul`
  width: 59rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SocialItem = styled.li`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.lineColor};

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    font-size: 1.2rem;
  }
  .icon {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    font-size: 2rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.pointColor};
    transition: 0.3s;
  }
  :hover {
    .icon {
      font-size: 2.5rem;
    }
  }
`;

export default ContactMe;
