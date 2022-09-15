export class CompanySearchResult {
    private _name: string = '';
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    private _ticker: string = '';
    get ticker(): string {
        return this._ticker;
    }
    set ticker(value: string) {
        this._ticker = value;
    }
}
