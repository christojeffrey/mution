// https://betterprogramming.pub/learn-to-create-your-own-usefetch-react-hook-9cc31b038e53

// semua yang berhubungan sama brick disini. komponen lain gaboleh make brick langsung
import React, { useState, useEffect } from "react";

// let base64 = require("base-64");

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
  const [response, setResponse] = useState<any>(null);
  const [errorInstitutions, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  console.log("get available institutions");
  console.log("publicToken");
  console.log(publicToken);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/v1/institution/list`;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ***REMOVED***`);

    let options = {
      method: "GET",
      headers: myHeaders,
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
  }, [publicToken]);

  console.log("institutions");
  let institutions = response?.data;
  console.log(institutions);

  return { institutions, errorInstitutions, loading };
};

const useGetListOfAccountsForThisUser = (publicToken: any) => {
  const [response, setResponse] = useState<any>(null);
  const [errorInstitutions, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  console.log("testing");

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/v1/institution/list`;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ***REMOVED***`);

    let options = {
      method: "GET",
      headers: myHeaders,
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

  console.log("institutions");
  let institutions = response?.data;
  console.log(institutions);

  return { institutions, errorInstitutions, loading };
};
