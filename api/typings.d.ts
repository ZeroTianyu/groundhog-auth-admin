// 响应对象
export interface Result<T> {
	code: number;
	message: string;
	success: boolean;
	data: T;
}

//分页对象
export type PageData<T> = {
	records: T[];
	total: number;
	size: number;
	current: number;
	pages: number;
}

// 基础对象
export interface BaseEntity {
	id: string;
	createTime: string;
	createrName: string;
	createrId: string;
	updateTime: string;
	updaterId: string;
	updaterName: string;
	deleted: boolean;

}
// 分页基础请求对象
export interface PageRequest {
	page: number;
	size: number;
}