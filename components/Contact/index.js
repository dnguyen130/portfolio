import styled from "styled-components"
import { useTheme } from "../../utils/provider"
import { site_theme } from "../../utils/variables"
import { SiFacebook, SiTwitter, SiLinkedin, SiGithub } from 'react-icons/si'

import { useRef } from 'react';
import emailjs, { init } from '@emailjs/browser';

import ImgButton from '../ImgButton';

init("user_NBrl3xmy2qTPZHQYDw16x");

const ContactCont = styled.div`
  height: 300px;
  background: linear-gradient(135deg, ${props=>props.bargrad1}, 50%, ${props=>props.bargrad2});
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 5px 5px 5px black;
  margin-bottom: 50px;
`

const SocialCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 100%;
  border: 1px solid red;
`

const SocialHeader = styled.h1`
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ButtonRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 20px;
`

const FormCont = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 50%;
`

const FormInput = styled.input`
  font-size: 2em;
`

const FormTextArea = styled.textarea`

`

const Contact = () => {
  
  const {theme} = useTheme();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0ywqtim', 'template_v98mzdk', form.current, 'user_NBrl3xmy2qTPZHQYDw16x')
      .then((result) => {
        console.log(result.text);
      }, (err) => {
        console.log(err.text);
      })
    }

  return (
    <ContactCont bargrad1={site_theme[theme].gray} bargrad2={site_theme[theme].background}>
      <SocialCont>
        <SocialHeader>Social Platforms</SocialHeader>
        <ButtonRow>
          <ImgButton>
            <SiFacebook size="40px"/>
          </ImgButton>
          <ImgButton>
            <SiTwitter size="40px" />
          </ImgButton>
          <ImgButton>
            <SiLinkedin size="40px" />
          </ImgButton>
          <ImgButton>
            <SiGithub size="40px" />
          </ImgButton>
        </ButtonRow>
      </SocialCont>
      <FormCont ref={form} onSubmit={sendEmail}>
        <FormInput 
          type="text" 
          name="user_name" 
        />
        <FormInput 
          type="email" 
          name="user_email" 
        />
        <FormTextArea name="message" />
        <FormInput
          type="submit"
          value="Send" 
        />
      </FormCont>
    </ContactCont>
  )
}

export default Contact;