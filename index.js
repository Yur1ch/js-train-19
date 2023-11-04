// 1. Створення базового об'єкту "Book":
const Book = {
  title: "Загальна Книга",
  author: "Анонім",
  pages: 0,
  read() {
    console.log(`Ви читаєте ${this.title} від ${this.author}`);
  },
};

console.log("Завдання: 1 ==============================");
console.log("Об'єкт: Book");
console.log(Book);

// 2. Наслідування від базового об'єкту Book:
const Novel = Object.create(Book);
Novel.genre = "Новела";

console.log("Завдання: 2 ==============================");
console.log("Об'єкт: Novel (з наслідуванням від Book)");
console.log(Novel);
console.log("genre властивість Novel:", Novel.genre);

// 3. Створення нового об'єкту та зміна його прототипу:
const Biography = {
  title: "Загальна Біографія",
  author: "Біограф",
  pages: 200,
};

Object.setPrototypeOf(Biography, Novel);

console.log("Завдання: 3 ==============================");
console.log("Об'єкт: Biography");
console.log(Biography);
console.log(
  "Biography є прототипом Novel:",
  Object.getPrototypeOf(Biography) === Novel
);

// 4. Інкапсуляція властивості та додання властивості:
const ScienceBook = Object.create(Book);

Object.defineProperty(ScienceBook, "info", {
  value: "написана в 1915 році",
  writable: false, // Властивість не можна змінювати напряму
  enumerable: true,
  configurable: false, // Не можна видаляти
});

ScienceBook.setInfo = function (newInfo) {
  // Сетер для властивості info
  this.info = newInfo;
};

console.log("Завдання: 4 ==============================");
console.log("Властивість info об'єкта ScienceBook:", ScienceBook.info);

// Спроба змінити властивість info приведе до помилки
try {
  ScienceBook.info = "Нова інформація";
} catch (error) {
  console.error(error);
}

// Зміна властивості info за допомогою сетера
ScienceBook.setInfo("Нова інформація");
console.log(
  "Властивість info об'єкта ScienceBook після використання сетера:",
  ScienceBook.info
);

// 5. Поліморфізм: створення нового об'єкта та перевизначення його методу:
const Textbook = Object.create(ScienceBook);

Textbook.read = function () {
  console.log(
    `Ви читаєте підручник "${this.title}" від ${this.author}. ${this.info}`
  );
};

Textbook.title = "Фізика у Вищій Школі";
Textbook.author = "Дж. Д. Джонс";

console.log("Завдання: 5 ==============================");
console.log("Об'єкт: Textbook");
console.log(Textbook);

// Виклик перевизначеного методу read об'єкту Textbook
Textbook.read();

// 6. Абстракція: створення об'єкта з загальними властивостями
const Media = {
  format: "Загальний Формат",
  length: 0,
  play() {
    console.log(
      `Зараз відтворюється медіа у форматі ${this.format} з тривалістю ${this.length} секунд`
    );
  },
};

// Об'єкт Song наслідує властивості і функції від об'єкта Media
const Song = Object.create(Media);
Song.artist = "Загальний Виконавець";
Song.title = "Загальна Пісня";

console.log("Завдання: 6 ==============================");
console.log("Об'єкт: Song");
console.log(Song);

// Викликаємо функцію play об'єкту Song
Song.play();

