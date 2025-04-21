import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all products
export async function GET() {
  try {
    const products = await prisma.product.findMany()
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching Products", error);
    return NextResponse.json({ message: "Could not fetch all the Products" }, { status: 500 });
  }
}

// POST new product
export async function POST(request: Request) {
  const { name, description, price, image } = await request.json();

  if (!name || !price || !image) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  try {
    const product = await prisma.product.create({
      data: { name, description, price: parseFloat(price), image },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating Product", error);
    return NextResponse.json({ message: "Error creating product" }, { status: 500 });
  }
}



// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// // get all products
// export async function GET() {
//     try {
//       const products = await prisma.product.findMany()
//       return new Response(JSON.stringify(products), { status: 200 })
//     } catch (error) {
//       console.error("Error fetching Products", error)
//       return new NextResponse("Could not fetch Products", { status: 500 })
//     }
// }

// // create new product
// export async function POST(request: Request) {
//     const { name, description, price, image } = await request.json()

//     if(!name || !price || !image) {
//       return new Response("Missing required fields", { status: 400 })
//     }
//     try {
//       const product = await prisma.product.create({
//         data: { name, description, price, image }
//       })

//       return new Response(JSON.stringify(product), { status: 201 })
//     } catch (error) {
//       console.error("Error creating Product", error)
//       return new Response("Error creating product", { status: 500 })
//     }
// }