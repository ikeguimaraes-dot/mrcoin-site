import { createHmac, timingSafeEqual } from 'node:crypto';

export const PROPOSAL_COOKIE = 'mrcoin_proposal_access';

export function proposalToken(password: string) {
  return createHmac('sha256', password).update('mrcoin-commercial-proposal').digest('hex');
}

export function hasProposalAccess(cookieValue?: string) {
  const password = process.env.PROPOSAL_PASSWORD;
  if (!password || !cookieValue) return false;
  const expected = proposalToken(password);
  const received = Buffer.from(cookieValue);
  const target = Buffer.from(expected);
  return received.length === target.length && timingSafeEqual(received, target);
}
