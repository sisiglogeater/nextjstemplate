export const POST = async (req, res) => {
const { inputs } = await request.json();
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(inputs),
    }
  );
  const result = await response.blob();
  return result;
};
