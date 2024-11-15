export interface Author {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface AuthorList {
  total: number;
  data: Author[];
}
