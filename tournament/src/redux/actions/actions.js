export function registerUser(userData) {
  return (dispatch) => {
    // Здесь мы выполняем асинхронный HTTP-запрос, отправляя данные на сервер с использованием fetch
    fetch("/auth/registration", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Если наш запрос успешен - диспатчим действие для обновления состояния
        dispatch({
          type: "REGISTER_USER_SUCCESS",
          userData: data,
        });
      })
      .catch((error) => {
        // Ну а тут для ошибочек
        console.error("Ошибка при регистрации пользователя", error);
        dispatch({
          type: "REGISTER_USER_ERROR",
          error,
        });
      });
  };
}

export function loginUser(username, password) {
  return (dispatch) => {
    fetch(`auth/${username}/confirm?token`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "LOGIN_USER_SUCCESS",
          userData: data,
        });
      })
      .catch((error) => {
        console.error("Ошибка при входе пользователя", error);
        dispatch({
          type: "LOGIN_USER_ERROR",
          error,
        });
      });
  };
}


export function downloadGame(os) {
  return (dispatch) => {
    fetch(`/downloads/${os}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "DOWNLOAD_GAME",
          downloadData: data,
        });
      })
  };
}