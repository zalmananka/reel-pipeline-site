export async function GET() {
  return new Response(
    "tiktok-developers-site-verification=bDPHRBdQnRQOCsgFdqCf2ODowRf59ynV", // Sirf signature token string
    {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    },
  );
}
