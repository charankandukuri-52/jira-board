import './HeroCardsItems'
export default class HeroCardItems {
    private heroCardItems: { [key: string]: any }[]
    constructor(items: { [key: string]: any }[]) {
        this.heroCardItems = items
    }
    getItems(): { [key: string]: any }[] {
        return this.heroCardItems;
    }
} 