import axiosInstance from "@/lib/axios-instance";
import {PageData} from "@/api/typings";
import {CreateOrUpdateRoleRequest, Role, RolePageRequest} from "@/api/role/typings";


//分页查询
export function rolePage(pageRequest: RolePageRequest) {
	return axiosInstance.get<PageData<Role>>("/role/page", {params: pageRequest});
}


// 创建或更新
export function createOrUpdateRole(request: CreateOrUpdateRoleRequest) {
	return axiosInstance.post<boolean>("/role/createOrUpdate", request);
}