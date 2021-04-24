export interface IMenuItem {
    id: number;
    name: string;
    path: string;
};

export interface IFlashcardFilter {
    id: number;
    name: string;
    path: string;
};

export interface ICategory {
    id: number;
    name: string;
    path: string;
    cards: number | undefined;
};

export interface ICard {
    id: number;
    cardTitle: string;
    cardContent: string;
    categoryId: number;
};