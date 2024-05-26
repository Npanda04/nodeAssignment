/*
  Warnings:

  - You are about to drop the column `userId` on the `FormData` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "FormData" DROP CONSTRAINT "FormData_userId_fkey";

-- AlterTable
ALTER TABLE "FormData" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "FormData" ADD CONSTRAINT "FormData_title_fkey" FOREIGN KEY ("title") REFERENCES "User"("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;
