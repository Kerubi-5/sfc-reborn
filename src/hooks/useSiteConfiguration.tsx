import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { AllSettingsQueryResult } from '../types';

export interface SiteConfiguration {
    featureToggles: {
        useCookieBar: boolean;
        useDarkModeAsDefault: boolean;
        useDarkModeBasedOnUsersPreference: boolean;
    };
    logo: {
        text: string;
        image?: {
            extension?: string;
            publicURL?: string;
            svg?: { originalContent?: string };
            childImageSharp?: { gatsbyImageData?: IGatsbyImageData };
        };
        imageDark?: {
            extension?: string;
            publicURL?: string;
            svg?: { originalContent?: string };
            childImageSharp?: { gatsbyImageData?: IGatsbyImageData };
        };
    };
    navigation: {
        ctaButton: {
            label: string;
            openNewTab: boolean;
            url: string;
        };
        footer: {
            label: string;
            url: string;
        }[];
        header: {
            label: string;
            url: string;
        }[];
    };
}

export function useSiteConfiguration(): SiteConfiguration {
    const data: AllSettingsQueryResult<{ siteConfiguration: SiteConfiguration }> = useStaticQuery(query);
    return data.allSettingsJson.settings[0].siteConfiguration;
}

export const query = graphql`
    query SiteConfiguration {
        allSettingsJson: allContentJson {
            settings: nodes {
                siteConfiguration {
                    featureToggles {
                        useCookieBar
                        useDarkModeAsDefault
                        useDarkModeBasedOnUsersPreference
                    }
                    logo {
                        text
                        image {
                            extension
                            publicURL
                            svg {
                                originalContent
                            }
                            childImageSharp {
                                gatsbyImageData(width: 320, placeholder: BLURRED)
                            }
                        }
                        imageDark {
                            extension
                            publicURL
                            svg {
                                originalContent
                            }
                            childImageSharp {
                                gatsbyImageData(width: 320, placeholder: BLURRED)
                            }
                        }
                    }
                    navigation {
                        ctaButton {
                            label
                            openNewTab
                            url
                        }
                        footer {
                            label
                            url
                        }
                        header {
                            label
                            url
                        }
                    }
                }
            }
        }
    }
`;
