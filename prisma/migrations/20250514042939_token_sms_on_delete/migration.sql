-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tokenSMS" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "token" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "tokenSMS_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_tokenSMS" ("created_at", "id", "token", "updated_at", "userId") SELECT "created_at", "id", "token", "updated_at", "userId" FROM "tokenSMS";
DROP TABLE "tokenSMS";
ALTER TABLE "new_tokenSMS" RENAME TO "tokenSMS";
CREATE UNIQUE INDEX "tokenSMS_token_key" ON "tokenSMS"("token");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
