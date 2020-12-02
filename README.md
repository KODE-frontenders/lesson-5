# Enkodeng project

- [Enkodeng project](#enkodeng-project)
  - [Задачи](#задачи)
  - [Usage](#usage)

## Задачи

Исправьте ошибки типизации после включения строгого режима проверки типов.

⚠️ **Поправка к лекции**: `typesafe-actions` не умеет работать с thunk (только saga и observable), так что его не нужно использовать. 

⚠️ Улучшен линтинг и форматинг в проекте. В случае исользования расширений Eslint / Prettier возможны конфликты на уровне автоматического форматирования через TypeScript в вашей IDE — решением будет изменение настроек или возвращение к стандартным значениям.  

Дизайн-макет: https://www.figma.com/file/HbaePNYYfSLoizyVOKDevM/Toduber?node-id=0%3A175
API сервера: https://documenter.getpostman.com/view/8858534/SW7dX7JG

## Usage

CRA based project. Preflight checking turned off!

```bash
yarn # install dependencies
yarn start
yarn storybook # or
```