async function fetchGitData() {
  const request = fetch("https://api.github.com/users/mahmoudakram-hub");
  request = request.json();
  return request;
}

export { fetchGitData };
