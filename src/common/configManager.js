import dotenv from 'dotenv';

export async function configManager() {
  dotenv.config();
  const config = {
    DCTK: process.env.DCTK,
    DCID: process.env.DCID,
    BHUD: process.env.BHUD,
    BHPD: process.env.BHPD,
    TWPT: process.env.TWPT,
    TWHT: process.env.TWHT,
    TWHA: process.env.TWHA,
    TWHC: process.env.TWHC,
    NHHC: process.env.NHHC,
  };
  return config;
}
