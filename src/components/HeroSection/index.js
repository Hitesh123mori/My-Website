import React from 'react';
import Typewriter from 'typewriter-effect';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyledComponents'
import { Bio } from '../../data/constant';
import HeroIMG from '../../images/photo.jpg'
import HeroAnimation from '../../HeroBgAnimation'

const HeroSection = () => {
  return (
    <div id="about">

      <HeroContainer>

        <HeroBg>
          <HeroAnimation>

          </HeroAnimation>



        </HeroBg>

        <HeroInnerContainer>



          <HeroLeftContainer>

            <Title>
              Hi,I am <br />
              {Bio.name}
            </Title>

            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>

            <SubTitle>
              {Bio.description}
            </SubTitle>
            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>

          </HeroLeftContainer>

          <HeroRightContainer>

          <Img src={HeroIMG} alt="hero-image" />


          </HeroRightContainer>


        </HeroInnerContainer>





      </HeroContainer>



    </div>
  )
}

export default HeroSection