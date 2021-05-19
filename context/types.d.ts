export type Dispatch = ({ type: string, payload: any }) => unknown
export interface UseStoreReturn {
  state: Record
  dispatch: Dispatch
}
