import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { replied } = await request.json();

    const client = await clientPromise;
    const db = client.db();
    await db.collection("messages").updateOne(
      { _id: new ObjectId(id) },
      { $set: { replied: replied, updatedAt: new Date() } }
    );

    return NextResponse.json({ message: "Message updated" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update message" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const client = await clientPromise;
    const db = client.db();
    await db.collection("messages").deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ message: "Message deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 });
  }
}
