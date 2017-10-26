<template>
  <ul class="menu">
    <li>Расписание</li>
    <li>Ваш профиль</li>
    <li class="u">Учебный план</li>
    <li>Факультатив</li>
    <li class="u">Задолженность</li>

    <li>Сервисы</li>
    <li>Тестирование</li>
    <li class="u">Опросник</li>

    <li>Сообщения<div class="message">2</div></li>
  </ul>
</template>

<script>
export default {
  name: 'menu',
  mounted () {
    console.log(this.$store.state)
  }
}
</script>

<style scoped>
  .menu {
    margin-top: 30px;
  }
  .menu li {
    display: flex;
    align-items: center;

    padding: 10px 0 10px 30px;
    line-height: 15px;

  }

  .menu li.u {
    border-bottom: 1px solid #bbb;
    margin-bottom: 15px;
    padding-bottom: 25px;
  }

  .menu li .message {
    margin-left: 10px;
    width: 27px;
    height: 27px;
    border-radius: 15px;
    background-color: #00b4e0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: #fff;
  }
</style>
