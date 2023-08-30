const fetchUsers = async () => {
  try {
    alert("Bắt đầu");

    const response = await axios.get(
      "http://5d6e3cc8777f67001403658b.mockapi.io/list_user"
    );
    alert("Đã lấy dữ liệu");
    console.log(response.data);

    alert("Kết thúc gọi API");
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();
