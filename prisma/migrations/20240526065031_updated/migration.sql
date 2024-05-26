/*
  Warnings:

  - You are about to drop the column `formTitle` on the `FormData` table. All the data in the column will be lost.
  - Added the required column `title` to the `FormData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FormData" DROP COLUMN "formTitle",
ADD COLUMN     "title" TEXT NOT NULL;
