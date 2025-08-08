/*
  Warnings:

  - You are about to drop the column `customMessage` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `displayEarnings` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `isVerified` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `kindeId` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `minSupportAmount` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `supportCount` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `totalEarnings` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the `Support` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Support" DROP CONSTRAINT "Support_recipientId_fkey";

-- DropForeignKey
ALTER TABLE "Support" DROP CONSTRAINT "Support_supporterId_fkey";

-- DropIndex
DROP INDEX "UserProfile_email_idx";

-- DropIndex
DROP INDEX "UserProfile_kindeId_idx";

-- DropIndex
DROP INDEX "UserProfile_username_idx";

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "customMessage",
DROP COLUMN "displayEarnings",
DROP COLUMN "github",
DROP COLUMN "instagram",
DROP COLUMN "isVerified",
DROP COLUMN "kindeId",
DROP COLUMN "minSupportAmount",
DROP COLUMN "name",
DROP COLUMN "supportCount",
DROP COLUMN "totalEarnings",
DROP COLUMN "twitter",
DROP COLUMN "website",
ADD COLUMN     "clerkId" TEXT;

-- DropTable
DROP TABLE "Support";

-- DropEnum
DROP TYPE "PaymentMethod";

-- DropEnum
DROP TYPE "SupportStatus";

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "receipt" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "userProfileId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
