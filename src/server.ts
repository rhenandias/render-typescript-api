import app from "./app";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "./../.env") });

let port = process.env.PORT;

if (port === "" || port === null || port === undefined) {
  port = process.env.API_LOCAL_PORT;
}

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
