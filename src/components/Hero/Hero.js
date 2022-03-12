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
          Marijuana Shop - Frankfurt
        </SectionTitle>
        <SectionText>
        The purpose of Marijuana.gmbh is to help aspiring and established people to take their skills to the next level and build awesome thinks.
        you can order from www.foodpanda.de
        </SectionText>
        <Button onClick={() => window.location = 'https://foodpanda.de'}>Shop Online</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;