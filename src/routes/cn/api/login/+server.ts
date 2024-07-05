// src/routes/api/login/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { USERNAME, HASHED_PASSWORD } from '../../../../config/auth';
import bcrypt from 'bcryptjs';

export const POST: RequestHandler = async ({ request }) => {
const { username, password } = await request.json() as { username: string, password: string };

  if (username === USERNAME) {
    const match = await bcrypt.compareSync(password, HASHED_PASSWORD);
    if (match) {
      const token = generateToken(); // Implement token generation

      return new Response(JSON.stringify({ token }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `sessionId=${token}; Path=/; HttpOnly; Max-Age=3600` // Set cookie expiration to 1 hour (3600 seconds)
        },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Invalid password' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } else {
    return new Response(JSON.stringify({ error: 'Invalid username' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

function generateToken(): string {
  // Simple token generation, could be more complex
  return Math.random().toString(36).substr(2);
}
 