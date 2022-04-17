export function getCommits() {
    fetch('https://api.github.com/users/QwertyForcee/repos')
    .then(response => response.json()) //Converting the response to a JSON object
    .then( data => {
        console.log(data);
    })
    .catch( error => console.error(error));
}