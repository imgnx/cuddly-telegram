import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/db";
import { User } from "@prisma/client";
import { v4 } from "uuid";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { Adapter, AdapterUser } from "next-auth/adapters";

const adapter = PrismaAdapter(prisma);

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "string" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        console.log("CREDENTIALS", credentials);

        let user = (await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })) as User;

        if (!user && adapter.createUser) {
          await adapter.createUser({
            email: credentials.email,
            emailVerified: null
            // image: credentials.image
          });

          console.log("NEW USER", user);

          user = (await prisma.user.update({
            where: {
              email: credentials.email
            },
            data: {
              password: bcrypt.hashSync(credentials.password, 10)
            }
          })) as User;

          console.log("NEW USER", user);
        } else {
          console.log("FOUND USER", user);
          if (user.password) {
            const valid = await bcrypt.compare(
              credentials.password,
              user.password
            );
            console.log("VALID?", user.id, user.password);
            if (!valid) {
              console.log(`Credentials not valid`);
              return null;
            } else {
              console.log("Credentials are valid");
            }
          }
        }

        if (user) {
          return { ...user };
        }

        return null;
      }
    })
  ]
});

export { handler as GET, handler as POST };
