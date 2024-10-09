"use client"
import {Button} from "@/components/ui/button";
import {toast} from "@/hooks/use-toast";
import axiosInstance, {PageData} from "@/lib/axios-instance";

interface Role {
	id: string,
	roleName: string,
}

export default function Page() {
	axiosInstance.get<PageData<Role>>("/role/page").then((response) => {
		console.log(response.data.data.records);
	}).catch((err) => {
		toast({title: "请求错误", description: err.message, variant: "destructive"});
	})
	return (
		<Button
			onClick={() => {
				toast({
					title: "网络错误",
					description: "请检查",
					variant: "destructive"
				})
			}}
		>
			Show Toast
		</Button>
	)
}
