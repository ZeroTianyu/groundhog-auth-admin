import {BaseEntity} from "@/api/typings";

// 角色对象
interface Role extends BaseEntity {
	roleName: string,
	sort: number,
}