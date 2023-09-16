-- CreateEnum
CREATE TYPE "Tier" AS ENUM ('lc', 'nfe', 'nu', 'ou', 'pu', 'publ', 'uber', 'uu', 'uubl');

-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "tier" "Tier" NOT NULL DEFAULT 'lc';
