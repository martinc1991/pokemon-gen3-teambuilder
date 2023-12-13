/*
  Warnings:

  - Made the column `name` on table `Slot` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Slot" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" SET DEFAULT '',
ALTER COLUMN "natureName" SET DEFAULT 'docile';

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "public" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sample" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "name" SET DEFAULT '',
ALTER COLUMN "description" SET DEFAULT '';
