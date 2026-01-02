import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const application = await prisma.application.create({
      data: {
        name: body.name,
        roll: body.roll,
        email: body.email,
        phone: body.phone,
        whatsapp: body.whatsapp,
        domain: body.domain,
        resumeUrl: body.resumeUrl,
        portfolioUrl: body.portfolioUrl,
        linkedinUrl: body.linkedinUrl,
        githubUrl: body.githubUrl,
        pastExperience: body.pastExperience,
        otherSocieties: body.otherSocieties,
        hearAboutUs: body.hearAboutUs,
        referral: body.referral,
      },
    });

    return Response.json({ success: true, application }, { status: 201 });
  } catch (error) {
    // ✅ Handle duplicate roll number cleanly
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return Response.json(
        { message: "This roll number has already applied." },
        { status: 409 }
      );
    }

    console.error("Application save error:", error);

    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
