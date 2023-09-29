/*
  Warnings:

  - Added the required column `gender` to the `Slot` table without a default value. This is not possible if the table is not empty.
  - Made the column `abilityName` on table `Slot` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "NatureNames" ADD VALUE 'brave';
ALTER TYPE "NatureNames" ADD VALUE 'quiet';
ALTER TYPE "NatureNames" ADD VALUE 'relaxed';
ALTER TYPE "NatureNames" ADD VALUE 'sassy';
ALTER TYPE "NatureNames" ADD VALUE 'serious';

-- DropForeignKey
ALTER TABLE "Slot" DROP CONSTRAINT "Slot_abilityName_fkey";

-- AlterTable
ALTER TABLE "Slot" ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "happiness" INTEGER NOT NULL DEFAULT 255,
ADD COLUMN     "ivAttack" INTEGER NOT NULL DEFAULT 31,
ADD COLUMN     "ivDefense" INTEGER NOT NULL DEFAULT 31,
ADD COLUMN     "ivHp" INTEGER NOT NULL DEFAULT 31,
ADD COLUMN     "ivSpAttack" INTEGER NOT NULL DEFAULT 31,
ADD COLUMN     "ivSpDefense" INTEGER NOT NULL DEFAULT 31,
ADD COLUMN     "ivSpeed" INTEGER NOT NULL DEFAULT 31,
ADD COLUMN     "level" INTEGER NOT NULL DEFAULT 100,
ALTER COLUMN "abilityName" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_abilityName_fkey" FOREIGN KEY ("abilityName") REFERENCES "Ability"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
