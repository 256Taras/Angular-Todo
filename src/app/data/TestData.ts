import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Сімя'},
    {id: 3, title: 'Навчання'},
    {id: 4, title: 'Курси'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Фінанси'},
    {id: 8, title: 'Гаджети'},
    {id: 9, title: 'Відпочинок'},
    {id: 10, title: 'Карєра'},
    {id: 11, title: 'Ремонт'},
  ];


  static priorities: Priority[] = [
    {id: 1, title: 'Низький', color: '#e5e5e5'},
    {id: 2, title: 'Середній', color: '#85D1B2'},
    {id: 3, title: 'Високий', color: '#F1828D'},
    {id: 4, title: 'Терміново!!', color: '#F1128D'}
  ];


  // не забывать - индексация приоритетов и категорий начинается с нуля
  static tasks: Task[] = [
    {
      id: 1,
      title: 'Стати Техлідом',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2020-07-12')
    },

    {
      id: 2,
      title: 'Взяти ревень pre intermediate',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2020-07-12')
    },

    {
      id: 3,
      title: 'Вивчити react hooks',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1]
    },

    {
      id: 4,
      title: 'написати API на Nest',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2020-07-13')
    },
    {
      id: 5,
      title: 'serverless на next.js',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Сходить на семинар по программированию',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2020-07-02')
    },

    {
      id: 7,
      title: 'microservices на node.js',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 8,
      title: 'Почати верстати',
      completed: false,
      category: TestData.categories[5]
    },
    {
      id: 9,
      title: 'Закріпити JavaScript',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2020-07-16')
    }

  ];

}

