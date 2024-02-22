import React from 'react';
import { Seo } from '../components/Seo';
import { LegalSection } from '../sections/Legal';
import { Page } from '../components/Page';

export default function ImprintPage() {
  return (
    <>
      <Seo title="Imprint" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="imprint" heading="Imprint" />
      </Page>
    </>
  );
}
