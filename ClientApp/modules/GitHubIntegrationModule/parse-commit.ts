import { Commit } from "./commit-model";
import { parseCommitUrl } from "./parse-commit-url";

export function parseCommit(data:any, username?: string, repository?: string){
    return {
        authorName: data.author.login,
        authorId: data.author.id,
        message: data.commit.message,
        sha: data.sha,
        url: username && repository ? parseCommitUrl(username, repository, data.sha) : null,
      } as Commit;
}