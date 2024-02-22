import React from 'react';
import { LegalSection } from '../sections/Legal';
import { Page } from '../components/Page';
import { Seo } from '../components/Seo';

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
      </Page>
    </>
  );
}
