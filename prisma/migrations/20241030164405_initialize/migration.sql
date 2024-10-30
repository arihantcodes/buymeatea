/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "SupportStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('UPI', 'CARD', 'NETBANKING', 'WALLET');

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userProfileId_fkey";

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "customMessage" TEXT,
ADD COLUMN     "displayEarnings" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "minSupportAmount" DOUBLE PRECISION NOT NULL DEFAULT 100,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "supportCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalEarnings" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "twitter" TEXT,
ADD COLUMN     "website" TEXT;

-- DropTable
DROP TABLE "Order";

-- CreateTable
CREATE TABLE "Support" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "message" TEXT,
    "status" "SupportStatus" NOT NULL DEFAULT 'PENDING',
    "transactionId" TEXT,
    "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'UPI',
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "recipientId" TEXT NOT NULL,
    "supporterId" TEXT,
    "anonymousName" TEXT,
    "anonymousEmail" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "source" TEXT,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Support_transactionId_key" ON "Support"("transactionId");

-- CreateIndex
CREATE INDEX "Support_recipientId_idx" ON "Support"("recipientId");

-- CreateIndex
CREATE INDEX "Support_supporterId_idx" ON "Support"("supporterId");

-- CreateIndex
CREATE INDEX "Support_status_idx" ON "Support"("status");

-- CreateIndex
CREATE INDEX "Support_createdAt_idx" ON "Support"("createdAt");

-- CreateIndex
CREATE INDEX "Support_transactionId_idx" ON "Support"("transactionId");

-- CreateIndex
CREATE INDEX "UserProfile_username_idx" ON "UserProfile"("username");

-- CreateIndex
CREATE INDEX "UserProfile_email_idx" ON "UserProfile"("email");

-- CreateIndex
CREATE INDEX "UserProfile_kindeId_idx" ON "UserProfile"("kindeId");

-- AddForeignKey
ALTER TABLE "Support" ADD CONSTRAINT "Support_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Support" ADD CONSTRAINT "Support_supporterId_fkey" FOREIGN KEY ("supporterId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
