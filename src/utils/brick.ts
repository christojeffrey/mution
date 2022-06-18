// https://betterprogramming.pub/learn-to-create-your-own-usefetch-react-hook-9cc31b038e53

// semua yang berhubungan sama brick disini. komponen lain gaboleh make brick langsung
import React, { useState, useEffect } from "react";
import { json } from "stream/consumers";

// let base64 = require("base-64");
const useFetch = (url: any, options: any) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json);
        }
      } catch (e: any) {
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    doFetch();
    return () => {
      abortController.abort();
    };
  }, []);
  return { response, error, loading };
};

export const useGetPublicToken = () => {
  const [response, setResponse] = useState<any>(null);
  const [errorToken, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  console.log("get public token");
  //   //   let auth_header = base64.encode(process.env.REACT_APP_CLIENT_ID + ":" + process.env.REACT_APP_CLIENT_SECRET);
  let auth_header = process.env.REACT_APP_AUTH_HEADER;

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/v1/auth/token`;
    const options = {
      headers: {
        Authorization: auth_header ? auth_header : "",
      },
    };
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json);
        }
      } catch (e: any) {
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    doFetch();
    return () => {
      abortController.abort();
    };
  }, []);

  console.log("token");
  let token = response?.data.access_token;
  console.log(token);
  return { token, errorToken, loading };
};

export const useGetAvailableInstitutions = (publicToken: any) => {
  const url = `${process.env.REACT_APP_API_URL}/v1/institution/list`;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log("publicToken");
  console.log(publicToken);

  myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_TOKEN}`);

  let options = {
    method: "GET",
    headers: myHeaders,
  };

  const { response, error, loading } = useFetch(url, options);

  let institutions = response?.data;

  let errorInstitutions = error;
  console.log("institutions");
  console.log(institutions);
  return { institutions, errorInstitutions, loading };
};

// untuk add new digital wallet
export const useSendAuthInstitution = (publicToken: any, institutionId: any, username: any) => {
  // buat trigger otp
  const url = `${process.env.REACT_APP_API_URL}/v1/auth`;
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_TOKEN}`);
  // add body
  let raw = JSON.stringify({
    institution_id: 12,
    username: "+6285156961915",
  });
  let options = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  const { response, error, loading } = useFetch(url, options);
  return { responseAuth: response };
};

export const useVerifyAuthOVO = ({ username, refId, deviceId, otpNumber, pin }: { username: any; refId: any; deviceId: any; otpNumber: any; pin: any }) => {
  // dipanggil buat send auth yang dudapet dari otp
  const url = `${process.env.REACT_APP_API_URL}/v1/auth/ovo`;
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_TOKEN}`);

  // add body
  let raw = JSON.stringify({
    username: "+6285156961915",
    refId,
    deviceId,
    otpNumber,
    pin: "040902",
  });

  let options = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  const { response, error, loading } = useFetch(url, options);
  return { responseAuth: response };
};

export const useGetAllWalletData = async (userAccessTokens: any[]) => {
  let result;
  const [response, setResponse] = useState<any>(null);

  console.log("userAccessTokens");
  console.log(userAccessTokens);
  useEffect(() => {
    console.log("HARUSNYA GK BERUBAH");
    let promises = userAccessTokens.map((userAccessToken: any) => {
      console.log("userAccessToken");
      console.log(userAccessToken);
      return fetch(`${process.env.REACT_APP_API_URL}/v1/account/list`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
        },
      });
    });
    Promise.all(promises)
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => {
        console.log("data");
        console.log(data);
        console.log(typeof data);
        data.map((item: any) => {
          console.log("item");
          console.log(item);
          console.log(typeof item);
        });
        setResponse(data);
        result = data;
      });
  }, []);

  return response;
};

// data buat mutasi
export const getMutation = () => {
  // sementara asumsi 7 hari terakhir
};
