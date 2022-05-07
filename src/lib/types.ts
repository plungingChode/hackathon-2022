export type Location = {
	/** Latitude in degrees */
	lat: number;
	/** Longitude in degrees */
	lon: number;
};

export interface HasLocation {
	geocodes: {
		main: {
			latitude: number;
			longitude: number;
		};
	};
}

export type User = {
	id: string;
	name: string;
};

export type Tag = {
	id: number;
	description: string;
};

export type Character = {
	id: number;
	name: string;
	preferences: Tag[];
	isUserCreated: boolean;
};

export type Snippet = {
	id?: number;
	action: string;
	title: string;
	lore: string;
};

export type CompletedSnippet = Snippet & {
	params: Record<string, string>;
};

export type Story = {
	id: number;
	snippets: CompletedSnippet[];
};

export type FSQPlace = {
	fsq_id: string;
	name: string;
	description: string;
	categories: {
		id: number;
		name: string;
		icon: {
			prefix: string;
			suffix: string;
		};
	}[];
	geocodes: {
		main: {
			latitude: number;
			longitude: number;
		};
	};
	photos: {
		id: string;
		prefix: string;
		suffix: string;
	};
};

export type FSQPointOfInterest = FSQPlace & {
	snippet: Snippet;
	/** Distance from current location in metres */
	distance: number;
};
