export function createSubject() {
    const observers = []; // Массив для хранения подписчиков
  
    return {
      // Метод для подписки на изменения
      subscribe(observer) {
        observers.push(observer); // Добавляем нового наблюдателя
      },
      // Метод для уведомления всех подписчиков
      notify(data) {
        observers.forEach((observer) => observer(data)); // Уведомляем каждого наблюдателя
      },

      //Инициализация субьекта
      initialization(data) {
        this.data = data;
        this.notify(this.data);
        this.state = '';
        this.currentUser = localStorage.getItem('currentUser')
        // this.users = localStorage.getItem('users')
        console.log(this.users)
      },

      // Метод для получения текущего состояния
      getTodos() {
        return this.data;
      },

      //Метод Rest
      reset() {
        this.data = [];
        this.filteredList = [];
        this.notify(this.data);
      },

      // Метод для добавления пользвательских данных
      addData(item) {
        this.data.unshift(item); // Добавляем элемент в массив данных

        if (this.state === '') {
          console.log('основной массив', this.state);
          this.notify(this.data);
        } else {
          if (this.state == 'do') {
            this.filterTasks(true);
          } else {
            this.filterTasks(false);
          }
        }
      },

      // Метод для изменения значения ключа обьекта
      modifyData(idTask, key, newValue) {
        this.data.forEach((element) => {
          if (element['id'] == idTask) {
            element[key] = newValue;
          }
        });

        if (this.state === '') {
          this.notify(this.data);
        } else {
          if (this.state == 'do') {
            this.filterTasks(true);
          } else {
            this.filterTasks(false);
          }
        }
      },

      // Метод для удаления обьекта по индексу
      removeItem(index) {
        this.data.splice(index, 1);
        this.notify(this.data); // Уведомляем подписчиков
      },

      //Метод для фильтрации задач по статусу выполнен/не выполнен
      filterTasks(status) {
        this.filteredList = this.data.filter((task) => task.done == status);
        status == true ? (this.state = 'do') : (this.state = 'undo');
        this.notify(this.filteredList); // Уведомляем подписчиков
      },

      //Метод для отображения всех задач
      allTasks() {
        this.state = '';
        this.notify(this.data);
      },

      //Получаем имя текущего пользователя
      getCurrentUser() {
        return this.currentUser;
      },

      //Устанавливаем имя текущего пользователя
      setCurrentUser(user) {
        this.currentUser = user;
        this.users.push(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(localStorage.getItem('currentUser'));
        // localStorage.setItem('users', JSON.stringify(this.users));
        this.notify(this.data);
      },

      // Свойство для хранения данных
      data: [], // Начальное состояние массива данных
      filteredList: [], // Массив с отфильтрованными элементами
      state: '', //Сотояние приложения. Отображаются все задачи или только отфильтрованные.
      currentUser: '',
      users: [],
    };
  }