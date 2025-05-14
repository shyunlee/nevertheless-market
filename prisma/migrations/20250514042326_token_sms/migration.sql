-- CreateTable
CREATE TABLE "tokenSMS" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "token" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "tokenSMS_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "tokenSMS_token_key" ON "tokenSMS"("token");
