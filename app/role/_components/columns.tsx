"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Role} from "@/api/role/typings";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel, DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Role>[] = [
	{
		id: "select",
		header: ({table}) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({row}) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "id",
		header: () => <div className="text-center">id</div>,
	}, {
		accessorKey: "roleName",
		header: "角色名称",
	},
	{
		accessorKey: "deleted",
		header: "是否删除",
		cell: ({row}) => {
			const deleted = parseFloat(row.getValue("deleted"))
			return <div className="text-center font-medium">{deleted ? "是" : "否"}</div>
		},
	},
	{
		accessorKey: "createTime",
		header: "创建时间",
	}, {
		accessorKey: "updateTime",
		header: "更新时间",
	}, {
		accessorKey: "sort",
		header: "排序",
	},
	{
		id: "actions",
		header: "操作",
		cell: ({row}) => {
			const payment = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4"/>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.id)}
						>
							复制权限id
						</DropdownMenuItem>
						<DropdownMenuSeparator/>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
