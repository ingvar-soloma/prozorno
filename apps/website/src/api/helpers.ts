/**
 * Cast the value to defined type.
 * @param value Variable to case.
 */
export function cast<T>(value: any): T {
  return (<unknown>value) as T;
}

/**
 * Retrieve data from GraphQL response.
 * @param gqlResponse GraphQL response.
 * @returns Retrieved response data.
 */
export function getData(gqlResponse) {
  return gqlResponse?.data;
}

/**
 * Retrieve props from GraphQL entity.
 * @param gqlEntity GraphQL entity.
 * @param props Properties to copy.
 * @returns Retrieved entity props.
 */
export function getAttributes(gqlEntity, props?: string[]) {
  // Get the existing attributes.
  const { attributes } = gqlEntity ?? {};

  // Copy the props from attributes.
  return props && attributes
    ? props.reduce((acc: object, prop: string) => {
        return { ...acc, [prop]: attributes[prop] };
      }, {})
    : attributes;
}
