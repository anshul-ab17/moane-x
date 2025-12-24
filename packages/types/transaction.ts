import { TransactionStatus, TransactionType } from "./enums";

export interface Transaction {
  id: string;
  walletId: string;
  amount: number;         
  type: TransactionType; 
  status: TransactionStatus; 
  createdAt: string;      
}