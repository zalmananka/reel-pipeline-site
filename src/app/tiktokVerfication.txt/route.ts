export async function GET() {
  return new Response(
    "Vq9SxPfjCJQ60lP8cv3aEpZQQ6E6soUT", // Sirf signature token string
    {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    },
  );
}
