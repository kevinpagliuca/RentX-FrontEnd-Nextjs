import { ICars } from './cars';

export interface IRental {
  id: string;
  start_date: Date;
  end_date?: Date;
  expected_return_date: Date;
  total?: number;
  isPaid?: boolean;
  created_at?: string;
  car: ICars;
}
