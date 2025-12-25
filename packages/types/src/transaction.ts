import { TransactionStatus, TransactionType } from "./enums.js";

export interface Transaction {
  id: string;
  walletId: string;
  amount: number;         
  type: TransactionType; 
  status: TransactionStatus; 
  createdAt: string;      
}