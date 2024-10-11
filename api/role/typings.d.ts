import {BaseEntity, PageRequest} from "@/api/typings";

// 角色对象
interface Role extends BaseEntity {
	roleName: string,
	sort: number,
}


// 角色分页请求对象
interface RolePageRequest extends PageRequest {
	id: string | null,
	roleName: string | null,
	deleted: boolean | null,
}