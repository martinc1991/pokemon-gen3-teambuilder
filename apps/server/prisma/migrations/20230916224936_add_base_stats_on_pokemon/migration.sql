/*
  Warnings:

  - Added the required column `baseAttack` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseDefense` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseHp` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseSpattack` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseSpdefense` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseSpeed` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "baseAttack" INTEGER NOT NULL,
ADD COLUMN     "baseDefense" INTEGER NOT NULL,
ADD COLUMN     "baseHp" INTEGER NOT NULL,
ADD COLUMN     "baseSpattack" INTEGER NOT NULL,
ADD COLUMN     "baseSpdefense" INTEGER NOT NULL,
ADD COLUMN     "baseSpeed" INTEGER NOT NULL;
