export class Location {
    private city: string;
    private country: string;
    private postcode: number;

    constructor(city: string, country: string, postcode: number) {
        this.city = city;
        this.country = country;
        this.postcode = postcode;
    }

    public getCity(): string {
        return this.city;
    }

    public setCity(city: string): void {
        this.city = city;
    }

    public getCountry(): string {
        return this.country;
    }

    public setCountry(country: string): void {
        this.country = country;
    }

    public getPostcode(): number {
        return this.postcode;
    }

    public setPostcode(postcode: number): void {
        this.postcode = postcode;
    }    
}