import { User } from "./user";

export interface Blog {
    blogPostId: number;
    blogText: string;
    postDateTime: string;
    postTitle: string;
    user: User;
}
