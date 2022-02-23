import { Pagination } from "../mod.ts";

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}
