<div class="container">
  <form method="POST">
    <label for="email">Почта</label>
    <input required type="email" name="email" placeholder="mail@gmail.com">

    <label for="password">Пароль</label>
    <input required type="password" name="password">

    <input required type="submit" class="accent_button" value="Войти"/>

    <a href="/register">Нету профиля? Регистрируйтесь сейчас</a>
  </form>
</div>

<title>Вход в личный кабинет</title>

<style>
  form {
    margin: auto;
  }

  input {
    margin-bottom: 10px;
  }

  input[type="submit"] {
    font-size: 18px;
  }
</style>
