/*
  Warnings:

  - Added the required column `uniqueId` to the `FormData` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FormData" DROP CONSTRAINT "FormData_title_fkey";

-- AlterTable
ALTER TABLE "FormData" ADD COLUMN     "uniqueId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "FormData" ADD CONSTRAINT "FormData_title_fkey" FOREIGN KEY ("title") REFERENCES "User"("title") ON DELETE RESTRICT ON UPDATE CASCADE;
