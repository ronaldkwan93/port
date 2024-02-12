import React from "react";
import {
  AboutSection,
  // ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="RK DEV." />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="details" heading="What I offer:" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ContactSection sectionId="github" heading="Got a question?" />
      </Page>
    </>
  );
}
