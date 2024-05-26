-- CreateTable
CREATE TABLE "FormData" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "formTitle" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "isGraduated" BOOLEAN NOT NULL,

    CONSTRAINT "FormData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FormData" ADD CONSTRAINT "FormData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;
