export class Quote {
    public quote: string;
    public person: string;
    public pk: number;

    constructor(person: string, quote: string, pk: number) {
        this.person = person;
        this.quote = quote;
        this.pk = pk;
    }
}
