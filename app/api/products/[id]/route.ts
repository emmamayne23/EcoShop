// import { prisma } from "@/lib/prisma";

// // export async function GET(req: Request,
// //     { params }: { params: { id: string } }) {
    
// //         const product = await prisma.product.findUnique({
// //             where: { id: params.id }

// //         })

// //         return new Response(JSON.stringify(product), { status: 200 })
// // }

// // import { PrismaClient } from '@prisma/client'
// // const prisma = new PrismaClient()

// // export async function GET(
// //   req: Request,
// //   { params }: { params: { id: string } }
// // ) {
// //   try {
// //     const product = await prisma.product.findUnique({
// //       where: { id: params.id }
// //     })

// //     if (!product) {
// //       return new Response(
// //         JSON.stringify({ error: "Product not found" }),
// //         { status: 404, headers: { 'Content-Type': 'application/json' } }
// //       )
// //     }

// //     return new Response(JSON.stringify(product), {
// //       status: 200,
// //       headers: { 'Content-Type': 'application/json' }
// //     })
// //   } catch (error) {
// //     return new Response(
// //       JSON.stringify({ error: "Internal server error" }),
// //       { status: 500, headers: { 'Content-Type': 'application/json' } }
// //     )
// //   }
// // }

// export async function PUT(req: Request,
//     { params }: { params: { id: string } }
// ) {
//     const body = await req.json()
//     const product = await prisma.product.update({
//         where: { id: params.id },
//         data: body
//     })

//     return new Response(JSON.stringify(product))
// }

// export async function DELETE(req: Request,
//     { params }: { params: { id: string } }
// ) {
//     await prisma.product.delete({
//         where: { id: params.id }
//     })

//     return new Response(null, { status: 204 })
// }