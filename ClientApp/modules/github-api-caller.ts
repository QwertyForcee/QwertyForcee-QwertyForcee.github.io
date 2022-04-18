export function getCommits() {
    fetch('https://api.github.com/repos/QwertyForcee/QwertyForcee.github.io/commits')
    .then(response => response.json()) //Converting the response to a JSON object
    .then( data => {
        console.log(data);
    })
    .catch( error => console.error(error));
}
