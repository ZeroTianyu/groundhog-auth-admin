import axiosInstance from "@/lib/axios-instance";
import {PageData} from "@/api/typings";
import {Role, RolePageRequest} from "@/api/role/typings";


export function rolePage(pageRequest:RolePageRequest) {
	return axiosInstance.get<PageData<Role>>("/role/page",{pageRequest});
}
