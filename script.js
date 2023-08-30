const fetchUsers = () => {
  axios
    .get("http://5d6e3cc8777f67001403658b.mockapi.io/list_user")
    .then((response) => {
      console.log(`GET list users`, response);
      const users = response.data;
      console.log("list users", users);
    })
    .catch((error) => console.error(error));
};

fetchUsers();
