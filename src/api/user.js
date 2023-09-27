import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": "vNzRiRzr64MpV0hmt1vRCKYgGAiDcPYO9RwNeugz",
    "X-Parse-REST-API-Key": "WOBzvGt4hyJ0RvAXT1VQnU7LK7pTcUaauuiEferA",
  },
});

export const getUsers = () =>
  instance
    .get("/Users", {
      params: {
        keys: ["name", "password","email", "objectID"]
      },
    })
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data.results;
});

export const createUser = ({name,email,password}) => {
  console.log("Name:", name)
  console.log("Email:", email)
  console.log("Password:", password)
  return instance.post("/Users", {
    name,
    email,
    password
  });
};