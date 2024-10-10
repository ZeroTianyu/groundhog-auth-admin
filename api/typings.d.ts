export interface Result<T> {
  code: number;
  message: string;
  success: boolean;
  data: T;
}


export interface Result<T> {
	code: number;
	message: string;
	success: boolean;
	data: T;
}

export type PageData<T> = {
	records: T[];
	total: number;
	size: number;
	current: number;
	pages: number;
}