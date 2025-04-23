<div class="container">
  <form method="POST">
    <label for="name">Имя</label>
    <input required type="text" name="name" placeholder="Иван">

    <label for="surname">Фамилия</label>
    <input required type="text" name="surname" placeholder="Иванов">
    
    <label for="gender">Пол</label>
    <div class="gender">
      <div>
        Мужчина
        <input required type="radio" name="gender" value="male">
      </div>
      <div>
        Женщина
        <input required type="radio" name="gender" value="female">
      </div>
    </div>

    <label for="email">Почта</label>
    <input required type="email" name="email" placeholder="mail@gmail.com">

    <label for="password">Пароль</label>
    <input required type="password" name="password">

    <div class="agreement">
      <label for="agreement">Даю согласие на обработку данных</label>
      <input required name="agreement" type="checkbox">
    </div>

    <input type="submit" class="accent_button" value="Зарегистрироваться"/>

    <a href="/login">Уже зарегистрированы? Войдите в свой профиль</a>
  </form>
</div>

<title>Регистрация</title>

<style>
  .agreement {
    display: flex;
    justify-content: space-between;
  }

  .gender {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  form {
    margin: auto;
  }

  input {
    margin-bottom: 10px;
  }

  input[type="submit"] {
    margin-top: 10px;
    font-size: 18px;
  }
</style>
