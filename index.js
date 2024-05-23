import fs from "fs";
import crypto from "crypto";

function genereteOrderId() {
  const id = crypto.randomInt(1000, 99999999);
  const date = `${new Date().getTime()}-${new Date().getDate()}${new Date().getMonth()}${new Date().getFullYear()}`;
  return `${date}-${id}`;
}

function genereteUserId() {
  return crypto.randomUUID();
}

function writeContentToFile(filename, data) {
  fs.appendFileSync(filename, data + "\n", "utf8");
}

for (let i = 0; i < 100; i++) {
  writeContentToFile("user-id.txt", genereteUserId());
  writeContentToFile("order-id.txt", genereteOrderId());
}
