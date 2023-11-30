/*
  Warnings:

  - Added the required column `description` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Team` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" DROP DEFAULT;
