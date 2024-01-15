/*
  Warnings:

  - You are about to drop the column `public` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `sample` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "public",
DROP COLUMN "sample",
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isSample" BOOLEAN NOT NULL DEFAULT false;
