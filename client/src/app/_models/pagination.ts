export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;

}
export class PaginatedResult<T> {
    result: T;// T dai dien cho array of members: Member[];
    pagination: Pagination;


}