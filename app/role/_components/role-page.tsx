"use client"
import {useEffect, useState} from "react";
import {rolePage} from "@/api/role";
import {Role, RolePageRequest} from "@/api/role/typings";
import {DataTable} from "@/components/data-table";
import {columns} from "@/app/role/_components/columns";

export default function RolePage() {

	const [roleList, setRoleList] = useState<Role[]>([]);

	const [pageRequest, setPageRequest] = useState<RolePageRequest>({
		deleted: null,
		id: null,
		page: 10,
		roleName: null,
		size: 1
	});

	useEffect(() => {
		rolePage(pageRequest).then(e => {
			setRoleList(e.data.data.records);
		})
	}, []);

	return (
		<div>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={roleList}/>
			</div>
		</div>


	)
}
