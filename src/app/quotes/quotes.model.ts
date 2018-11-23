export class Quote {
    public quote: string;
    public person: string;

    constructor(person: string, quote: string) {
        this.person = person;
        this.quote = quote;
    }
}
