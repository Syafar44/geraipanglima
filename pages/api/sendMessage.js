const twilio = require("twilio");
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID; // SID akun Twilio
const authToken = process.env.TWILIO_AUTH_TOKEN; // Token otentikasi Twilio
const client = new twilio(accountSid, authToken);

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

export default async (req, res) => {
  if (req.method === "POST") {
    const { nama, nomer, total, metod, alamat, produk, pembayaran } = req.body;
    let message = `*JAJAN PANGLIMA*\nNama Penerima: *${nama}*\nNomer: ${nomer}\nAlamat: _${alamat}_\nProduk:\n`;
    produk.forEach((item, index) => {
      message += `${index + 1}. Nama Produk: *${item.nama}*, Harga: ${rupiah(
        item.harga
      )}, Jumlah: *${item.quantity}*\n`;
    });
    message += `\nPembayaran: *${pembayaran}*\nMetod: *${metod}* \nTotal Dibayar: *${total}*`;

    try {
      const msg = await client.messages.create({
        body: message,
        from: "whatsapp:+14155238886", // Nomor WhatsApp Twilio
        to: "whatsapp:+6282250851457", // Nomor WhatsApp penerima
      });

      res.status(200).json({ sid: msg.sid });
    } catch (error) {
      console.error("Twilio error:", error); // Logging error untuk debug
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
