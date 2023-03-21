import { User } from "./user";

export interface Blog {
    blogPostId: number;
    blogText: string;
    blogDescription: string;
    postDateTime: string;
    blogTitle: string;
    user: User;
}
