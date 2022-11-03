export type TypeSortParams = {
  name: string;
  order: string;
};

export interface IFilterSliceState {
  curCategory: number;
  sortParams: TypeSortParams;
  searchValue: string;
}
