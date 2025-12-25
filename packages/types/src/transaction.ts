import { TransactionStatus, TransactionType } from "./src/enums";

export interface Transaction {
  id: string;
  walletId: string;
  amount: number;         
  type: TransactionType; 
  status: TransactionStatus; 
  createdAt: string;      
}