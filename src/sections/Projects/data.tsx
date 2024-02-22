import { graphql, useStaticQuery } from 'gatsby';
import { Project } from '../../components/Project';

interface ProjectsSectionQueryResult {
    allProjectsJson: {
        sections: {
            button: {
                label: string;
                url: string;
                visible: boolean;
            };
            projects: Project[];
        }[];
    };
}

export const useLocalDataSource = (): ProjectsSectionQueryResult => {
    return useStaticQuery(graphql`
        query ProjectsSectionQuery {
            allProjectsJson {
                sections: nodes {
                    button {
                        label
                        url
                        visible
                    }
                    projects {
                        category
                        description
                        image {
                            alt
                            linkTo
                            src {
                                childImageSharp {
                                    gatsbyImageData(width: 400)
                                }
                            }
                            objectFit
                        }
                        links {
                            type
                            url
                        }
                        tags
                        title
                        visible
                    }
                }
            }
        }
    `);
};
