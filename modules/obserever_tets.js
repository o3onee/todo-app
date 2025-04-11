

// Функция для создания объекта состояния с паттерном Наблюдатель
function createObservableArray() {
    const observers = []; // Массив для хранения подписчиков
    const state = []; // Массив, который мы будем отслеживать

    return {
        // Метод для подписки на изменения
        subscribe(observer) {
            observers.push(observer); // Добавляем нового наблюдателя
        },
        // Метод для уведомления всех подписчиков
        notify() {
            observers.forEach(observer => observer(state)); // Уведомляем каждого наблюдателя с текущим состоянием
        },
        // Метод для добавления элемента в массив
        addItem(item) {
            state.push(item); // Добавляем элемент в массив
            this.notify(); // Уведомляем подписчиков о новом состоянии
        },
        // Метод для получения текущего состояния
        getState() {
            return state; // Возвращаем текущее состояние
        },
        // Метод для изменения значения у объекта в массиве по индексу
        updateValue(index, key, newValue) {
            if (index >= 0 && index < state.length) { // Проверяем, что индекс в пределах массива
                const obj = state[index];
                if (obj.hasOwnProperty(key)) {
                    obj[key] = newValue; // Изменяем значение по указанному ключу
                } else {
                    console.error('Ключ не найден'); // Обработка ошибки: ключ не найден
                }
                this.notify(); // Уведомляем подписчиков о новом состоянии
            } else {
                console.error('Индекс вне диапазона'); // Обработка ошибки: индекс вне диапазона
            }
        }
    };
}

// Создаем наблюдаемый массив
const observableArray = createObservableArray();

// Создаем наблюдателей
const observer1 = (data) => {
    console.log('Наблюдатель 1: Текущее состояние массива', data);
};

const observer2 = (data) => {
    console.log('Наблюдатель 2: Текущее состояние массива', data);
};

// Подписываем наблюдателей на изменения
observableArray.subscribe(observer1);
observableArray.subscribe(observer2);

// Добавляем элементы в массив
observableArray.addItem({ id: 1, name: 'Объект 1' });
observableArray.addItem({ id: 2, name: 'Объект 2' });
observableArray.addItem({ id: 3, name: 'Объект 3' });

// Получаем текущее состояние
console.log('Текущее состояние:', observableArray.getState());

// Обновляем значение ключа 'name' у объекта с индексом 0
observableArray.updateValue(0, 'name', 'Новый объект 1');

// Получаем текущее состояние после изменения значения
console.log('Текущее состояние после изменения значения:', observableArray.getState());