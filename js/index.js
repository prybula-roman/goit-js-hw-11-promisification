import { users } from "./users.js";
console.log("#########################################");
//========================1=================================
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

//===========================2===================================
const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );
  const promise = new Promise((resolve) => {
    resolve(updatedUsers);
  });
  return promise;
};

const logger_2 = (updatedUsers) => console.table(updatedUsers);
toggleUserState(users, "Mango").then(logger_2);
toggleUserState(users, "Lux").then(logger_2);
toggleUserState(users, "Ajax").then(logger_2);
//=============================3=================================

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const makeTransaction = (transaction /*, onSuccess, onError*/) => {
  const delay = randomIntegerFromInterval(200, 500);
  console.log("makeTransaction::delay=", delay);
  console.log("transaction.id=", transaction.id);
  console.log("transaction.amount=", transaction.amount);
  const promise = new Promise((onSuccess, onError) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        onSuccess(transaction.id, delay);
      } else {
        onError(transaction.id);
      }
    }, delay);
  });
  return promise;
};

const logSuccess = (id, time) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = (id) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
makeTransaction({ id: 70, amount: 150 });
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
