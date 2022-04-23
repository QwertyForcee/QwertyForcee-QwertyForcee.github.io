export function parseCommitUrl(username: string, repository: string, sha: string){
    if (username && repository && sha){
        return `https://github.com/${username}/${repository}/commit/${sha}`;
    }
    return null;
}