// Define the CollaborationItems interface
interface CollaborationItems {
    title: string;
    subTitle: string;
    grids: { // Corrected from 'girds' to 'grids'
        id: number;
        heading: string;
        content: string;
        link: string;
        imageLink: string;
    }[];
}

export const CollaborationData: CollaborationItems = {
    title: "Bring every team together under one roof",
    subTitle: "Spend less time trying to get aligned and more time driving projects forward with confidence",
    grids: [
        {
            id: 0,
            heading: 'Everything in one place',
            content: 'The context you need, when you need it. See software team release dates, real-time views of Figma designs, and more, all inside Jira',
            link: 'Explore Features',
            imageLink: 'https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/4w86phc3kwpstrwwfm7csc/new-staggered-double-feature-1.webp'
        },
        {
            id: 1,
            heading: 'Tailor it for your team',
            content: 'Configure Jira to match your team’s processes, workflows, language, and more. Integrate with every tool you use to get work done',
            link: 'Learn More',
            imageLink: 'https://wac-cdn.atlassian.com/misc-assets/webp-images/new-staggered-double-feature-2.webp'
        }
    ]
};
