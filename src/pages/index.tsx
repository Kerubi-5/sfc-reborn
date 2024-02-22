import React from 'react';
import { AboutSection } from '../sections/About';
import { ArticlesSection } from '../sections/Articles';
import { ContactSection } from '../sections/Contact';
import { HeroSection } from '../sections/Hero';
import { InterestsSection } from '../sections/Interests';
import { Page } from '../components/Page';
import { ProjectsSection } from '../sections/Projects';
import { Seo } from '../components/Seo';

export default function IndexPage() {
  return (
    <>
      <Seo title="👋  Hi, I'm SalesFlow Coach!" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={['Medium']}
        />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" /> */}
      </Page>
    </>
  );
}
