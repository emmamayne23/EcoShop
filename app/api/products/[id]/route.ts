import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Params {
    params: { id: string }
}

// get one product
export async function GET(_: Request, { params }: Params) {
    const product = await prisma.product.findUnique({
        where: { id: params.id }
    })

    if(!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
}

// update product
export async function PUT() {
    
}