## Быстров Максим  гр. 953504

1. Приложение для работы команды над проектом. Можно создавать тикеты, описывать фичу/баг, ставить приоритет выполнения задачи, назначать кому-то эту задачу, оставлять комментарии. Смотря на доску - наблюдаешь в каком сейчас состоянии разработка проекта, и кто из команды чем занят. 

2. https://www.figma.com/file/nirHUjLx70NS84917imFhu/Untitled?node-id=0%3A1

https://www.figma.com/proto/nirHUjLx70NS84917imFhu/Untitled?node-id=366%3A3&scaling=min-zoom&page-id=0%3A1

3. 
    1) Создание тикета.
    2) Просмотр и редактирование тикета.
    3) Комментирование.
    4) Перемещение тикета drag & drop'ом в нужный статус тикера.
    5) Статистика
    6) Список участников проекта + список проектов

4. 
    User:
        - id `number`

        - name `string`
        
        - email `string`

        - password `string`

        - avatar `blob`


    Ticket:
        - id `number`

        - type `string`
        
        - assignedTo `number`
        
        - description `string`
        
        - project `Project`
        
        - comments `Comment[]`

    Project:
        
        - id `number`
        
        - name `string`
        
        - members `User[]`
        
        - tickets `Ticket[]`
        
        - avatar `blob`
        
        - updatedOn `string | Date`

    Comment: 
        - user `User`
        
        - text `string`
       
        - ticket `Ticket`