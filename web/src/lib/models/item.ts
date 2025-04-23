type Money = number;
type Currency = '₽' | '$' | '€';
type Tags = string[];

export type Product = {
    name:        string,
    description: string;
    cost:        Money;
    currency:    Currency;
    tags:        Tags;
};
