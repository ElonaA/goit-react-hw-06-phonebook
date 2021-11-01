## Телефонная книга

Выполни рефакторинг кода приложения «Телефонная книга» добавив управление
состоянием при помощи библиотеки [Redux](https://redux.js.org/).

Пусть Redux-состояние выглядит следующим образом.

```shell
{
  contacts: {
    items: [],
    filter: ''
  }
}
```

### Шаг 1

Используй только возможности библиотеки Redux (без redux-toolkit).

- Создай хранилище и добавь
  [инструменты разработчика](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm)
- Создай действия (actions) сохранения и удаления контакта, а также обновления
  фильтра.
- Вынеси типы действий в отдельный файл констант.
- Создай редюсеры контактов и фильтра.
- Свяжи React-компоненты с Redux-логикой при помощи бибилиотеки
  [react-redux](https://react-redux.js.org/).

### Шаг 2

Выполни рефакторинг кода и сократи Redux-бойлерплейт используя библиотеку
[Redux Tookit](https://redux-toolkit.js.org/). Используй функции
`configureStore()`, `createAction()` и `createReducer()`.
