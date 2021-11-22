import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ListParagraph, ListTitle } from '../Technologies/TechnologiesStyles';
import { Span, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Content Coming Soon!
      </SectionTitle>
      <SectionText>
        My name is <Span color="white">Scott Sullivan</Span> and I am an XR developer with a passion for building a community and sharing what I've learned about programming XR interactions. In the near future I plan to build this site into a platform for bringing together other devs of all experience levels to share knowledge and learn more together than we can on our own.
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;