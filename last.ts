type U = any;

let promises = [
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
];

const lastResolved = async (
  promises: Promise<any>[],
  defaultValue: U,
): Promise<any> => {
  if (promises.length === 0) return Promise.resolve([]);
  Promise.all(promises)
    .then(function (res) {
      console.log(res); // выведет [1, 2, 3] - результаты всех промисов
      console.log(res[res.length - 1]); // выведет 3
    })
    .catch(() => defaultValue);
};

lastResolved(promises, 'rrr');
