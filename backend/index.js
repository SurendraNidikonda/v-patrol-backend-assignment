const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const dbPath = path.join(__dirname, "user.db");
const app = express();
let db;
app.use(express.json());
const initializeServerAndDatabase = async () => {
  try {
    db = await open({ filename: dbPath, driver: sqlite3.Database });
    app.listen(3000, () => {
      console.log("Server Starts at LocalHost 3000");
    });
    app.get("/", (request, response) => {
      response.send("Welcome to reactJs Surendra");
    });
  } catch (error) {
    console.log(`DB Error : ${error.message}`);
    process.exit(1);
  }
};

initializeServerAndDatabase();

app.post("/api/user/", async (request, response) => {
  const userDetails = request.body;
  const {
    userId,
    userName,
    backAccounts,
    id,
    bank,
    branch,
    address,
    city,
    district,
    state,
    bankCode,
    temp,
    humidity,
  } = userDetails;

  const selectedUserQuery = `SELECT * FROM user WHERE user_id = ${userId};`;
  const selectedUser = await db.get(selectedUserQuery);
  if (selectedUser === undefined) {
    const createUserQuery = `INSERT INTO user (user_id,user_name,bank_accounts,id,bank,branch,address,city,district,state,bank_code,tem,humidity)
        VALUES(${userId},'${userName}','${bankAccounts}',${id},'${bank}','${branch}','${address}','${city}','${district}','${state}','${bankCode}',${temp},${humidity}) ;`;
    const dbResponse = await db.run(createUserQuery);
    const newUserId = dbResponse.lastID;
    response.send(`Created new user with ${newUserId}`);
  } else {
    response.status = 400;
    response.send("User already exits");
  }
});

app.put("/api/user/", async () => {
  const userDetails = request.body;
  const {
    userId,
    userName,
    backAccounts,
    id,
    bank,
    branch,
    address,
    city,
    district,
    state,
    bankCode,
    temp,
    humidity,
  } = userDetails;
  const selectedUserQuery = `SELECT * FROM user WHERE user_id = ${userId}`;
  const selectedUser = await db.get(selectedUserQuery);
  if (selectedUser !== undefined) {
    const updateUser = `UPDATE user SET user_id = ${userId},
                                            user_name = '${userName}',
                                            bank_accounts = '${bankAccounts}',
                                            id = ${id},
                                            bank = '${bank}',
                                            branch = '${branch}',
                                            address = '${address}',
                                            city = '${city}',
                                            district = '${district}',
                                            state = '${state}',
                                            bank_code = '${bankcode}',
                                            temp = ${temp},
                                            humidity = ${humidity};`;
    await db.run(updateUser);
    response.send("User is updated Successfully");
  }
});
