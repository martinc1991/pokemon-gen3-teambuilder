-- CreateEnum
CREATE TYPE "StatName" AS ENUM ('hp', 'attack', 'defense', 'spattack', 'spdefense', 'speed');

-- CreateEnum
CREATE TYPE "NatureNames" AS ENUM ('hardy', 'bold', 'modest', 'calm', 'timid', 'lonely', 'docile', 'mild', 'gentle', 'hasty', 'adamant', 'impish', 'bashful', 'careful', 'rash', 'jolly', 'naughty', 'lax', 'quirky', 'naive');

-- CreateEnum
CREATE TYPE "TypeNames" AS ENUM ('normal', 'ice', 'ghost', 'dark', 'grass', 'electric', 'steel', 'ground', 'fighting', 'bug', 'poison', 'rock', 'water', 'flying', 'fire', 'dragon', 'psychic', 'empty');

-- CreateEnum
CREATE TYPE "DamageClass" AS ENUM ('physical', 'special', 'none');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'genderless');

-- CreateEnum
CREATE TYPE "Tier" AS ENUM ('lc', 'nfe', 'nu', 'ou', 'pu', 'publ', 'uber', 'uu', 'uubl');

-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL,
    "name" "TypeNames" NOT NULL,
    "damageClass" "DamageClass" NOT NULL,
    "noDamageTo" "TypeNames"[],
    "halfDamageTo" "TypeNames"[],
    "doubleDamageTo" "TypeNames"[],
    "noDamageFrom" "TypeNames"[],
    "halfDamageFrom" "TypeNames"[],
    "doubleDamageFrom" "TypeNames"[],

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nature" (
    "id" TEXT NOT NULL,
    "name" "NatureNames" NOT NULL,
    "increased" "StatName",
    "decreased" "StatName",

    CONSTRAINT "Nature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "effect" TEXT NOT NULL,
    "flingEffect" TEXT,
    "flingPower" INTEGER,
    "sprite" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nationalPokedexNumber" INTEGER NOT NULL,
    "sprite" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "typeOneName" "TypeNames" NOT NULL,
    "typeTwoName" "TypeNames" NOT NULL,
    "genders" "Gender"[],
    "tier" "Tier" NOT NULL DEFAULT 'lc',
    "baseHp" INTEGER NOT NULL,
    "baseAttack" INTEGER NOT NULL,
    "baseDefense" INTEGER NOT NULL,
    "baseSpattack" INTEGER NOT NULL,
    "baseSpdefense" INTEGER NOT NULL,
    "baseSpeed" INTEGER NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT DEFAULT 'no-name',

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slot" (
    "id" TEXT NOT NULL,
    "name" TEXT DEFAULT 'no-name',
    "teamId" TEXT NOT NULL,
    "nationalPokedexNumber" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "abilityName" TEXT,
    "natureName" "NatureNames",
    "evHp" INTEGER NOT NULL DEFAULT 0,
    "evAttack" INTEGER NOT NULL DEFAULT 0,
    "evDefense" INTEGER NOT NULL DEFAULT 0,
    "evSpAttack" INTEGER NOT NULL DEFAULT 0,
    "evSpDefense" INTEGER NOT NULL DEFAULT 0,
    "evSpeed" INTEGER NOT NULL DEFAULT 0,
    "itemName" TEXT,
    "shiny" BOOLEAN DEFAULT false,

    CONSTRAINT "Slot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AbilityToPokemon" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ability_name_key" ON "Ability"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Nature_name_key" ON "Nature"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "Pokemon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_nationalPokedexNumber_key" ON "Pokemon"("nationalPokedexNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Slot_teamId_order_key" ON "Slot"("teamId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "_AbilityToPokemon_AB_unique" ON "_AbilityToPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_AbilityToPokemon_B_index" ON "_AbilityToPokemon"("B");

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_typeOneName_fkey" FOREIGN KEY ("typeOneName") REFERENCES "Type"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_typeTwoName_fkey" FOREIGN KEY ("typeTwoName") REFERENCES "Type"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_nationalPokedexNumber_fkey" FOREIGN KEY ("nationalPokedexNumber") REFERENCES "Pokemon"("nationalPokedexNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_abilityName_fkey" FOREIGN KEY ("abilityName") REFERENCES "Ability"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_natureName_fkey" FOREIGN KEY ("natureName") REFERENCES "Nature"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_itemName_fkey" FOREIGN KEY ("itemName") REFERENCES "Item"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
