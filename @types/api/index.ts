interface APIResponse<T> {
  message: string;
  data: T;
  code?: number;
}
