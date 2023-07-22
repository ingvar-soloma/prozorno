import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the File.
 */
export interface File extends codegen.UploadFile {}

/**
 * Parse the File Entity.
 * @param raw GraphQL Entity.
 */
export function parseFileEntity(raw: codegen.UploadFileEntity): File {
  return getAttributes(raw);
}

/**
 * Parse the File Wrapper.
 * @param raw GraphQL Wrapper.
 */
export function parseFileWrapper(raw: codegen.UploadFileEntityResponse): File {
  return parseFileEntity(getData(raw));
}
