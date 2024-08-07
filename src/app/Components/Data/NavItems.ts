export default class NavItems {

    private _navItems: string[]
    constructor(items: string[]) {
        this._navItems = items;
    }
    getItems(): string[] {
        return this._navItems;
    }
}
