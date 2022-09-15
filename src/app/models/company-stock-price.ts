export class CompanyStockPrice {
    private _ticker: string = '';
    private _price: number = 0;
    private _priceDate: number = 0;

    get ticker(): string {
        return this._ticker;
    }
    set ticker(value: string) {
        this._ticker = value;
    }

    get price(): number {
        return this._price;
    }
    set price(value: number) {
        this._price = value;
    }

    get priceDate(): number {
        return this._priceDate;
    }
    set priceDate(value: number) {
        this._priceDate = value;
    }
}
