/*
  Warnings:

  - The `userProfileId` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `UserProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `picture` on the `UserProfile` table. All the data in the column will be lost.
  - The `id` column on the `UserProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userProfileId_fkey";

-- DropIndex
DROP INDEX "Order_receipt_key";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "status" DROP DEFAULT,
DROP COLUMN "userProfileId",
ADD COLUMN     "userProfileId" INTEGER;

-- AlterTable
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_pkey",
DROP COLUMN "picture",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "kindeId" DROP NOT NULL,
ALTER COLUMN "upiId" DROP NOT NULL,
ADD CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
