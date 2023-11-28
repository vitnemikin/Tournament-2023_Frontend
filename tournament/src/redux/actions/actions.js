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
      .then(console.log("успешно отправлен запрос"))
      .then((response) => response.json())
      .then((data) => {
        // Если наш запрос успешен - диспатчим действие для обновления состояния
        console.log("USPEH")
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

export function confirmUser(username, password) {
  return (dispatch) => {
    fetch(`/auth/${username}/confirm?token`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "CONFIRM_USER_SUCCESS",
          userData: data,
        });
      })
      .catch((error) => {
        console.error("Ошибка при входе пользователя", error);
        dispatch({
          type: "CONFIRM_USER_ERROR",
          error,
        });
      });
  };
}

export function loginUser(login, password) {
  return (dispatch) => {
    fetch(`/auth/login`, {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
  console.log("операционка: " + os);
  return (dispatch) => {
    fetch(`/downloads/${os}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "DOWNLOAD_GAME",
          downloadData: data,
        });
      })
      .catch((error) => {
        console.error("Error during downloadGame:", error);
      });
  };
}
