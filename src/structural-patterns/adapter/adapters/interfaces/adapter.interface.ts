export interface ParsedData {
  name: string;
  age: number;
}

export interface DataAdapter {
  getData(): Promise<ParsedData>;
}
