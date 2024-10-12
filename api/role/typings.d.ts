import {BaseEntity, PageRequest} from "@/api/typings";

// 角色对象
interface Role extends BaseEntity {
	roleName: string,
	sort: number,
}


// 角色分页请求对象
interface RolePageRequest extends PageRequest {
	id?: string,
	roleName?: string,
	beginCreateDate?: Date,
	endCreateDate?: Date,
}

// 角色新增或修改对象
interface CreateOrUpdateRoleRequest {
	id?: string,
	roleName: string,
	sort?: number,
}