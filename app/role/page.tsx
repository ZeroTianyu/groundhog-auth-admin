"use client"
import {Button} from "@/components/ui/button";
import {toast} from "@/hooks/use-toast";
import {useEffect, useState} from "react";
import {rolePage} from "@/api/role";
import {Role} from "@/api/role/typings";

export default function Page() {

	const [roleList, setRoleList] = useState<Role[]>([]);

	useEffect(() => {
		rolePage().then(e => {
			setRoleList(e.data.data.records);
		})
	}, []);

	return (
		<div>
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
			{roleList.map((role: Role) => (
				role.roleName
			))}

		</div>

	)
}
