// sementara database pake json dulu
import database from "./database.json";

export const getConnectedWallets = (username: string) => {
  console.log("database");
  console.log(database);
  //   return database.user1.connectedWallet;
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === username) {
      return database[i].connectedWallet;
    }
    return null;
  }
};

export const getAllUserAccessToken = (username: string) => {
  let res = [];
  let data = getConnectedWallets(username);
  if (data) {
    for (let i = 0; i < data.length; i++) {
      res.push(data[i].accessToken);
    }
  }
  return res;
};
