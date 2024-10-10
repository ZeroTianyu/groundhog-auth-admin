"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Role} from "@/api/role/typings";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Role>[] = [
	{
		accessorKey: "id",
		header: () => <div className="text-center">id</div>,
	},
	{
		accessorKey: "createTime",
		header: "创建时间",
	},
	{
		accessorKey: "deleted",
		header: "是否删除",
		cell: ({ row }) => {
			const deleted = parseFloat(row.getValue("deleted"))
			return <div className="text-center font-medium">{deleted?"是":"否"}</div>
		},
	}, {
		accessorKey: "roleName",
		header: "角色名称",
	}, {
		accessorKey: "updateTime",
		header: "更新时间",
	}, {
		accessorKey: "sort",
		header: "排序",
	}
]
