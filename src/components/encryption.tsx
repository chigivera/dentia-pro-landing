// src/components/encryption.tsx

// src/components/encryption.ts
import CryptoJS from "crypto-js" // You'll need to install this: npm install crypto-js

const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "YOUR_SECRET_KEY" // Replace with your actual secret key.  Store this securely, ideally as an environment variable.

export const encryptData = (data: any) => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString()
  return ciphertext
}

