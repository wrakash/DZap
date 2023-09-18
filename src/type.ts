export interface InputType {
  splitingOperater: string;
  lineNo: number;
  address: string;
  amount: string;
}

export interface ErrorType {
  type: string;
  details: string[];
}
