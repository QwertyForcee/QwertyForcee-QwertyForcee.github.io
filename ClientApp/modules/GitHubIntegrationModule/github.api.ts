import { Commit } from './commit-model';
import { validContributersResponse } from './contributers-validation';
import { Contributor } from './contributor';

export class GitHubAPI {
  static getCommits(username: string, repository: string): Promise<Commit[]> {
    if (username && repository) {
      return fetch(`https://api.github.com/repos/${username}/${repository}/commits?page=1&per_page=50`)
        .then(response => response.json())
        .then(json => {
          const data = json.map((commit: any) => {
            return {
              authorName: commit.author.login,
              authorId: commit.author.id,
              message: commit.commit.message,
              sha: commit.sha,
              url: commit.url
            } as Commit
          });
          return data;
        })
        .then(data => {
          return data;
        })
        .catch(error => {
          console.error(error);
        });
    }
    return Promise.resolve([]);
  }

  static getContributors(username: string, repository: string): Promise<Contributor[]> {
    if (username && repository) {
      return fetch(`https://api.github.com/repos/${username}/${repository}/contributors`)
        .then(response => response.json())
        .then(data => {
          return data.map((c: any) => {
            return {
              id: c.id,
              name: c.login,
              contributionsCount: c.contributions,
            } as Contributor;
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
    return Promise.resolve([]);
  }

  static searchCommitsByMessage(username: string, repository: string, message: string){
    if (username && repository && message){
      return fetch(`https://api.github.com/search/commits?q=${message} repo:${username}/${repository}`) //q=${message} repo:${username}/${repository}
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data;
      })
    }

    return Promise.resolve([]);
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
