/*
  Warnings:

  - You are about to drop the column `created_at` on the `notifications` table. All the data in the column will be lost.
  - You are about to drop the column `read_at` on the `notifications` table. All the data in the column will be lost.
  - You are about to drop the column `recipient_id` on the `notifications` table. All the data in the column will be lost.
  - Added the required column `recipientId` to the `notifications` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "notifications_recipient_id_idx";

-- AlterTable
ALTER TABLE "notifications" DROP COLUMN "created_at",
DROP COLUMN "read_at",
DROP COLUMN "recipient_id",
ADD COLUMN     "canceledAt" TIMESTAMP(3),
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "readAt" TIMESTAMP(3),
ADD COLUMN     "recipientId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "notifications_recipientId_idx" ON "notifications"("recipientId");
