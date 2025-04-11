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


      // Метод для добавления данных
      addData(item) {
        // this.data.push(item); // Добавляем элемент в состояние
        console.log(this.state)
      
        this.data.unshift(item); // Добавляем элемент в состояние

        if ((this.state === '')) {
          console.log('основной массив',this.state)
          this.notify(this.data)
        }
        else {
          if (this.state == 'do') {
            this.filterTasks(true)
          }
          else {
            this.filterTasks(false)
          }
        }
      },


      // Метод для изменения значения ключа обьекта
      modifyData(idTask, key, newValue) {
       this.data.forEach((element) => {
         if (element['id'] == idTask) {
            element[key]=newValue
          }
        } )

        // const obj = this.data[index];
        // obj[key] = newValue;

        if ((this.state === '')) {
          // console.log('основной массив',this.state)
          this.notify(this.data)
        }
        else {
          if (this.state == 'do') {
            this.filterTasks(true)
          }
          else {
            this.filterTasks(false)
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
          this.filteredList = this.data.filter(task => task.done == status)
          status == true?this.state='do':this.state='undo'
        this.notify(this.filteredList); // Уведомляем подписчиков
      },
        
        //Метод для отображения всех задач 
      allTasks() {
        this.state=''
          this.notify(this.data)
        },
              // Свойство для хранения данных
      data: [], // Начальное состояние массива данных
      filteredList:[],
      state: '',
    };
  }