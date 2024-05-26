/*
  Warnings:

  - You are about to drop the `FormData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FormData" DROP CONSTRAINT "FormData_userId_fkey";

-- DropTable
DROP TABLE "FormData";
