export default async function handler(req,res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed"});
    }
try {
    const r = await fetch("https://flow.ecto.tools/webhook/79e12507-621e-4880-bb5a-9fd8c16a4b61", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "authorization": "9fMD5VvEzQShteBFUtyWw33f"
        },
        body: JSON.stringify(req.body)
    });
const text = await r.text();
res.status(r.status).send(text);
}  catch (err) {
    res.status(500).json({ error: err.message });
} 
}