interface CollaborationItems {
    title: string;
    subTitle: string;
    grids: { 
        id: number;
        heading: string;
        content: string;
        link: string;
        imageLink: string;
    }[];
}

export default class FetchCollaborationItems {
    private collaborationItems: CollaborationItems[];

    constructor(collaborationItems: CollaborationItems[]) { // Updated to accept the correct type
        this.collaborationItems = collaborationItems;
    }

    getAllItems(): CollaborationItems[] {
        return this.collaborationItems;
    }
}
