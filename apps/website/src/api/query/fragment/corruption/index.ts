import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the Corruption.
 */
export interface Corruption extends codegen.Corruption {
  id: string;
}

/**
 * Parse the Corruption Props.
 * @param raw GraphQL Props.
 */
export function parseCorruption(raw: codegen.Corruption): Corruption {
  if (!raw) return;
  return { ...raw } as any;
}

/**
 * Parse the Corruption Entity.
 * @param raw GraphQL Entity.
 */
export function parseCorruptionEntity(raw: codegen.CorruptionEntity): Corruption {
  return raw && { id: raw.id, ...parseCorruption(getAttributes(raw)) };
}

/**
 * Parse the Corruption Wrapper.
 * @param raw GraphQL Wrapper.
 */
export function parseCorruptionWrapper(raw: codegen.CorruptionEntityResponse): Corruption {
  return parseCorruptionEntity(getData(raw));
}

/**
 * Parse the Corruption Entities.
 * @param raw GraphQL Entities.
 */
export function parseCorruptionEntities(raw: codegen.CorruptionEntityResponseCollection): Corruption[] {
  return getData(raw)?.map((entity: codegen.CorruptionEntity): Corruption => parseCorruptionEntity(entity));
}
