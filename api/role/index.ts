import axiosInstance from "@/lib/axios-instance";
import {PageData} from "@/api/typings";


export function rolePage() {
	return axiosInstance.get<PageData<Role>>("/role/page");
}
