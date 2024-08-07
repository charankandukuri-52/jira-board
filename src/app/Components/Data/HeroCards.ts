import './HeroImages';

interface HeroCardItem {
    id: string;
    Group: string;
    department: string;
    image: string;
}

export default class HeroCardItems {
    private heroCardItems: HeroCardItem[];

    constructor(items: HeroCardItem[]) {
        this.heroCardItems = items;
    }

    getItems(): HeroCardItem[] {
        return this.heroCardItems;
    }
}
