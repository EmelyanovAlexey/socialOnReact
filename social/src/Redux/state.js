let renderEnterTree = () => {};

let BD = {
  dataProfile: {
    id: 1,
    status: 1,
    name: "Емельянов Алексей Алексеевич",
    dateBirth: "17.10.1998",
    city: "Новосибирск",
    description:
      "привет я такой-то такой-то, делаю то-то то-то, это если кратко о себе!",
    img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
  },
  myPosts: [
    {
      id: 1,
      idUser: 1,
      name: "Емельянов АА",
      text: "первый пост",
      postData: "12.12.2020 14:22",
    },
    {
      id: 2,
      idUser: 1,
      name: "Емельянов АА",
      text: "второй пост",
      postData: "12.10.2020 08:20",
    },
    {
      id: 3,
      idUser: 1,
      name: "Емельянов АА",
      text: "третий пост",
      postData: "12.08.2020 16:30",
    },
  ],
  //--------------------------------------------------
  dataListDialogs: [
    {
      id: 1,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      rider: 2,
    },
    {
      id: 2,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      rider: 1,
    },
    {
      id: 3,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      rider: 0,
    },
  ],
  dataDialog: [
    {
      id: 2,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      text: "asdasda",
    },
    {
      id: 2,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      text: "asdasda",
    },
    {
      id: 1,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      text: "asdasdasasad",
    },
    {
      id: 2,
      img: "https://i.playground.ru/p/MdE1jjqrmXkxDlkYZ7D4bg.jpeg",
      name: "Емельянов Алексей Алексеевич",
      textData: "12.10.1998 12:18",
      text: "asdasda",
    },
  ],
};

export const addMyPost = (postJSON) => {
  BD.myPosts.push(postJSON);
  renderEnterTree();
};

export const addChatMassage = (massageJSON) => {
  BD.dataDialog.push(massageJSON);
  renderEnterTree();
};

export const subscribe = (observer) => {
  renderEnterTree = observer;
};

export default BD;
