import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        WEB DEVELOPER || UI/UX DESIGNER || ANDROID DEVELOPER
        </SectionText>
        <Button onClick={()=>window.location='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'}>Contact Here</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;