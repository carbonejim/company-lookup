export class CompanyInfo {
    private _name: string = '';
    private _ticker: string = '';
    private _description: string = '';
    private _homepageUrl: string = '';
    private _price: number = 0;
    private _priceDate: number = 0;
    private _logoUrl: string = '';
    private _addressCity: string = '';
    private _addressState: string = '';
    private _employeeCount: number = 0;

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get ticker(): string {
        return this._ticker;
    }
    set ticker(value: string) {
        this._ticker = value;
    }

    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }

    get homepageUrl(): string {
        return this._homepageUrl;
    }
    set homepageUrl(value: string) {
        this._homepageUrl = value;
    }

    get price(): number {
        return this._price;
    }
    set price(value: number) {
        this._price = value;
    }

    get formattedPrice(): string {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        return formatter.format(this._price);
    }

    get priceDate(): number {
        return this._priceDate;
    }
    set priceDate(value: number) {
        this._priceDate = value;
    }

    get formattedPriceDate(): string {
        const milliseconds = this._priceDate;
        const dateObject = new Date(milliseconds);
        return dateObject.toLocaleDateString('en-US');
    }

    get logoUrl(): string {
        return this._logoUrl + '?apiKey=6Z0PsW1iNHZzd5tC8gupdHHBRz74zhiK';
    }
    set logoUrl(value: string) {
        this._logoUrl = value;
    }

    get addressCity(): string {
        return this._addressCity;
    }
    set addressCity(value: string) {
        this._addressCity = value;
    }

    get addressState(): string {
        return this._addressState;
    }
    set addressState(value: string) {
        this._addressState = value;
    }

    get employeeCount(): number {
        return this._employeeCount;
    }
    set employeeCount(value: number) {
        this._employeeCount = value;
    }

    get formattedEmployeeCount(): string {
        var formatter = new Intl.NumberFormat('en-US');
        return formatter.format(this._employeeCount);
    }
}
