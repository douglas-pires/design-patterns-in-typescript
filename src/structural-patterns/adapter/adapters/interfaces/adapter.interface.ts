export interface ParsedData {
  name: string;
  price: number;
}

export interface DataAdapter {
  getData(): Promise<ParsedData>;
}
