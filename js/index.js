import { users } from "./users.js";
console.log(users);
/*
const promise = new Promise((resolve, reject) => {
  const rez = Math.random() > 0.5;
  console.log(rez);
  setTimeout(() => {
    if (rez) {
      resolve("promise  OK");
    } else {
      reject("promise  error");
    }
  }, 1000);
});
promise
  .then((rez) => {
    //  console.log("then");
    console.log(console.log("1 :", rez));
    return 10;
  })
  .then((rez) => {
    console.log(console.log("2 :", rez));
    return rez;
  })
  .catch((rez) => {
    // console.log("catch");
    console.error(rez);
    return rez;
  });
*/
/*
const promise = new Promise((resolve, reject) => {
  const rez = Math.random() > 0.5;
  setTimeout(() => {
    if (rez) {
      resolve(5);
    } else {
      reject("promise  error");
    }
  }, 2000);
});

promise
  .then((value) => {
    console.log(value); // 5
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 10
    return value * 3;
  })
  .then((value) => {
    console.log(value); // 30
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Final task");
  });
*/
const delay = (ms) => {
  // Твой код
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  return promise;
};
const logger = (time) => console.log(`Resolved after ${time}ms`);
delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
/*
const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  callback(updatedUsers);
};
*/
//logger = (updatedUsers) => console.table(updatedUsers);
const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );
  console.log(toggleUserState);
  const promise = new Promise((resolve) => {
    resolve(updatedUsers);
  });
  return promise;
};

const logger_2 = (updatedUsers) => console.table(updatedUsers);
//console.log("toggleUserState:", toggleUserState(users, "Mano"));
toggleUserState(users, "Mango").then(logger_2);
toggleUserState(users, "Lux").then(logger_2);
