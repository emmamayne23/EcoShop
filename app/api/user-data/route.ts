import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { userId: clerkId } = await auth()

        if(!clerkId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const user = await prisma.user.findUnique({
            where: { clerkId },
            include: {
                favorites: {
                    include: { product: true }
                },
                carts: {
                    include: { product: true }
                }
            }
        })

        if(!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 })
        }

        const favorites = user.favorites.map(fav => fav.product)
        const cart = user.carts.map(cartItem => ({
            ...cartItem.product,
            quantity: cartItem.quantity
        }))

        return NextResponse.json({ favorites, cart })

    } catch (error) {
        console.error("Failed to load user data: ", error)
        return NextResponse.json({ error: "Internal Server error" }, { status: 500 })
    }
}