// sementara database pake json dulu
// import database from "./database.json";

import { useEffect, useState } from "react";

export const useGetConnectedWallets = (username: string) => {
  // console.log("database");
  // console.log(database);
  // fetch database
  const [database, setDatabase] = useState<any>([]);
  useEffect(() => {
    fetch("http://localhost:8081/database.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data dasri fetch");
        console.log(data);
        setDatabase(data);
      });
  }, []);
  //   return database.user1.connectedWallet;
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === username) {
      return database[i].connectedWallet;
    }
    return null;
  }
};

export const useGetAllUserAccessToken = (username: string) => {
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:8081/database.json")
      .then((res) => {
        return res.json();
      })
      .then((database) => {
        console.log("data dari fetch");
        console.log(database);
        let data;
        for (let i = 0; i < database.length; i++) {
          if (database[i].username === username) {
            data = database[i].connectedWallet;
            break;
          }
        }
        let res = [];
        for (let i = 0; i < data.length; i++) {
          res.push(data[i].accessToken);
        }
        console.log("res");
        console.log(res);
        setResponse(res);
      });
  }, []);
  // console.log("response");
  // console.log(response);
  return response;
};
interface IWallet {
  id: number;
  name: string;
  accessToken: string;
}
export const useAddConnectedWallet = (username: string, wallet: IWallet) => {
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:8081/addConnectedWallet/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wallet),
    })
      .then((res) => {
        return res.json();
      })
      .then((database) => {
        console.log("data dari fetch");
        console.log(database);
        let data;
        for (let i = 0; i < database.length; i++) {
          if (database[i].username === username) {
            data = database[i].connectedWallet;
            break;
          }
        }
        let res = [];
        for (let i = 0; i < data.length; i++) {
          res.push(data[i].accessToken);
        }
        console.log("res");
        console.log(res);
        setResponse(res);
      });
  }, []);
  // console.log("response");
  // console.log(response);
  return response;
};

export const removeConnectedWallet = (username: string, walletId: number) => {
  // for (let i = 0; i < database.length; i++) {
  //   if (database[i].username === username) {
  //     for (let j = 0; j < database[i].connectedWallet.length; j++) {
  //       if (database[i].connectedWallet[j].id === walletId) {
  //         database[i].connectedWallet.splice(j, 1);
  //         console.log("Berhasil remove wallet");
  //         return true;
  //       }
  //     }
  //   }
  // }
  // return 0;
};
