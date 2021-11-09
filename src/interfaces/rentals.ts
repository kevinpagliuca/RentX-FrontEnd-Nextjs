export interface IRental {
  id: string;
  start_date: string;
  endDate?: string;
  expected_return_date: string;
  total?: number;
  isPaid?: boolean;
  created_at?: string;
}
