/*
  Warnings:

  - Added the required column `voteDate` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vote" ADD COLUMN     "voteDate" TIMESTAMP(3) NOT NULL;
