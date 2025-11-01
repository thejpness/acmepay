import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const honey = (formData.get('company') || '').toString(); // honeypot
  const email = (formData.get('email') || '').toString().trim();

  if (honey) {
    return new Response(JSON.stringify({ message: 'Ignored' }), { status: 200 });
  }

  const emailOk =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;

  if (!emailOk) {
    return new Response(JSON.stringify({ message: 'Invalid email.' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // TODO: integrate provider here (commented template)
  // await addToList(email)

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
