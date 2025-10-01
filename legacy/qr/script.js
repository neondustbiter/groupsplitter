// Create QR instance
let qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  type: "svg",
  data: "https://example.com",
  dotsOptions: {
    color: "#000000",
    type: "square"
  },
  backgroundOptions: {
    color: "#ffffff"
  }
});

// Mount to DOM
qrCode.append(document.getElementById("canvas"));

// Update QR function
async function updateQR() {
  const data = document.getElementById("data").value;
  const size = parseInt(document.getElementById("size").value);
  const body = document.getElementById("body").value;
  const fgColor = document.getElementById("fgColor").value;
  const bgColor = document.getElementById("bgColor").value;

  let image = "";
  const fileInput = document.getElementById("logoInput");
  if (fileInput.files.length > 0) {
    image = URL.createObjectURL(fileInput.files[0]);
  }

  qrCode.update({
    width: size,
    height: size,
    data,
    image,
    dotsOptions: {
      type: body,
      color: fgColor
    },
    backgroundOptions: {
      color: bgColor
    }
  });
}

// Button events
document.getElementById("update").addEventListener("click", updateQR);

document.getElementById("download").addEventListener("click", () => {
  qrCode.download({ name: "my-qr", extension: "png" });
});
