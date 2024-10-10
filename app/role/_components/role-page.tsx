"use client"
import {useEffect, useState} from "react";
import {rolePage} from "@/api/role";
import {Role} from "@/api/role/typings";
import {DataTable} from "@/components/data-table";
import {columns} from "@/app/role/_components/columns";

export default function RolePage() {

	const [roleList, setRoleList] = useState<Role[]>([]);

	useEffect(() => {
		rolePage().then(e => {
			console.log(e.data.data.records)
			setRoleList(e.data.data.records);
		})
	}, []);

	return (
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={roleList}/>
			</div>

	)
}
