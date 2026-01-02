import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const applications = await prisma.application.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json({ success: true, applications }, { status: 200 });
  } catch (error) {
    console.error("Admin fetch error:", error);

    return Response.json(
      { success: false, message: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
