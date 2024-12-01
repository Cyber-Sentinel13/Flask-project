import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'credit',
    amount: 2500,
    description: 'Salary Deposit',
    date: '2024-03-15',
  },
  {
    id: '2',
    type: 'debit',
    amount: 85,
    description: 'Grocery Shopping',
    date: '2024-03-14',
  },
  // Add more transactions as needed
];

export function TransactionList() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${
                transaction.type === 'credit' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-red-100 text-red-600'
              }`}>
                {transaction.type === 'credit' ? <ArrowDownLeft /> : <ArrowUpRight />}
              </div>
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span className={`font-semibold ${
              transaction.type === 'credit' 
                ? 'text-green-600' 
                : 'text-red-600'
            }`}>
              {transaction.type === 'credit' ? '+' : '-'}${transaction.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}