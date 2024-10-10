"use client"
import {Button} from "@/components/ui/button";
import {toast} from "@/hooks/use-toast";
import {useEffect} from "react";
import {rolePage} from "@/api/role";

export default function Page() {


	useEffect(() => {
		rolePage().then(e => {
			console.log(e);
		})
	}, []);

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
