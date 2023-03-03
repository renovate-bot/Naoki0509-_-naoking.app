import { CustomNextPage, GetStaticProps } from "next";
import "animate.css";
import { Blog } from "@/pages/blog";
import { client } from "@/client/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { FixedLayout } from "@/layouts/FixedLayout";

export type BlogProps = MicroCMSListResponse<BlogItemProps>;

export type BlogItemProps = {
	title: string;
	body: string;
	image?: {
		url: string;
		width: number;
		height: number;
		alt: string;
	};
};

export const BlogPage: CustomNextPage<BlogProps> = (props) => {
	return <Blog {...props} />;
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const data = await client.getList<BlogItemProps>({
		endpoint: "blog",
	});

	return {
		props: data,
	};
};

BlogPage.getLayout = FixedLayout;

export default BlogPage;
