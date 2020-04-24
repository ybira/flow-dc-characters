export interface PagedResponse<T> {
  embedded: T[];
  metadata: {
    totalDocument: number;
    pages: number;
    page: number;
    pagePer: number;
  };
}
