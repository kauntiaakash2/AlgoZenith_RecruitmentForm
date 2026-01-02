-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roll" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "whatsapp" TEXT,
    "domain" TEXT NOT NULL,
    "resumeUrl" TEXT,
    "portfolioUrl" TEXT,
    "linkedinUrl" TEXT,
    "githubUrl" TEXT,
    "otherLinks" TEXT,
    "pastExperience" TEXT,
    "otherSocieties" TEXT,
    "hearAboutUs" TEXT,
    "referral" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Application_roll_key" ON "Application"("roll");
