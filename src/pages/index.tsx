import React from 'react';
import { HeroSection } from '../sections/Hero';
import { Page } from '../components/Page';
import { Seo } from '../components/Seo';
import { ArticlesSection } from '../sections/Articles';

export default function IndexPage() {
  return (
    <>
      <Seo title="👋  Hi, I'm SalesFlow Coach!" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={['Blog']}
        />
        {/*
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" /> */}
      </Page>
    </>
  );
}
