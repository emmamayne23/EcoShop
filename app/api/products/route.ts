import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// get all products
export async function GET() {
    const products = await prisma.product.findMany()
    return NextResponse.json(products)
}

// create new product
export async function POST(request: Request) {
    const body = await request.json()
    const { name, description, price, image } = body

    try {
    const product = await prisma.product.create({
      data: { name, description, price, image },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating product" }, { status: 500 });
  }
}