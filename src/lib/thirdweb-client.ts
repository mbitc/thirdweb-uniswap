import { createThirdwebClient } from 'thirdweb';

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID!;
const secretKey = process.env.THIRDWEB_SECRET_KEY!;

export default createThirdwebClient(
  secretKey
    ? { secretKey }
    : {
        clientId,
      }
);
