export function registerUser(userData) {
  console.log(userData);
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
        if(data.statusCode === 200 ){
          console.log("данные успешно получены,", data);
          dispatch({
            type: "REGISTER_USER_SUCCESS",
          });
        } else {
          console.error(`Ошибка ${data.statusCode}, данные не получены! Снизу подробнее`);
          console.log(data);
          dispatch({
            type: "REGISTER_USER_ERROR",
            error: data
          })
       
        }
        // Если наш запрос успешен - диспатчим действие для обновления состояния
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

export function confirmUser(username, token) {
  return (dispatch) => {
    fetch(`/auth/${username}/confirm?${token}`)
      .then((response) => console.log(response.data.message))
      .then(() => {
        dispatch({
          type: "CONFIRM_USER_SUCCESS",
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
        if (data.statusCode !== 200) {
          dispatch({
            type: "LOGIN_USER_SUCCESS",
            userData: data,
            
          });
        } else {
          console.log("Ошибка при входе пользователя: ", data.statusCode);
          dispatch({
            type: "LOGIN_USER_ERROR",
            error: data.statusCode,
          });
        }
      });
  };
}

export function downloadGame(os) {
  console.log("операционка: " + os);
  return (dispatch) => {
    fetch(`/downloads/${os}`)
      .then((response) => {
        if (response.status !== 200) {
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

