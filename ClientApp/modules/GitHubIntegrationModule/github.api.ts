export class GitHubAPI {
    static getCommits(username: string, repository: string) {
        if (username && repository) {
            return fetch(`https://api.github.com/repos/${username}/${repository}/commits?page=1&per_page=50`)
                .then(response => response.json())
                .then(data => {
                    return data;
                })
                .catch(error => {
                    console.error(error);
                });
        }
        return []
    }

}


// export function getCommits(username: string, repository: string) {
//     if (username && repository) {
//         return fetch(`https://api.github.com/repos/${username}/${repository}/commits`)
//             .then(response => response.json())
//             .then(data => {
//                 return data;
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }
//     return []
// }
