/*
  Warnings:

  - Made the column `natureName` on table `Slot` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shiny` on table `Slot` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Slot" DROP CONSTRAINT "Slot_moveFourName_fkey";

-- DropForeignKey
ALTER TABLE "Slot" DROP CONSTRAINT "Slot_moveThreeName_fkey";

-- DropForeignKey
ALTER TABLE "Slot" DROP CONSTRAINT "Slot_moveTwoName_fkey";

-- DropForeignKey
ALTER TABLE "Slot" DROP CONSTRAINT "Slot_natureName_fkey";

-- AlterTable
ALTER TABLE "Slot" ALTER COLUMN "natureName" SET NOT NULL,
ALTER COLUMN "shiny" SET NOT NULL,
ALTER COLUMN "moveTwoName" DROP NOT NULL,
ALTER COLUMN "moveThreeName" DROP NOT NULL,
ALTER COLUMN "moveFourName" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_natureName_fkey" FOREIGN KEY ("natureName") REFERENCES "Nature"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_moveTwoName_fkey" FOREIGN KEY ("moveTwoName") REFERENCES "Move"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_moveThreeName_fkey" FOREIGN KEY ("moveThreeName") REFERENCES "Move"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_moveFourName_fkey" FOREIGN KEY ("moveFourName") REFERENCES "Move"("name") ON DELETE SET NULL ON UPDATE CASCADE;
