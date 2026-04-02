import type {Reactions} from "./Reactions.ts";

export interface IPostDummy {
   id: number;
   title: string;
   body: string;
   tags: string[];
   reactions: Reactions;
   views: number;
   userId: number;
}
