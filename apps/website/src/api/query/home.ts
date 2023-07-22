import { inject, watch, Ref } from 'vue';
import HomeGql from './home.gql';
import { cast } from '../helpers';
import { graphql } from '../client';
import { Corruption, parseCorruptionEntities } from './fragment';
import type { ApolloQueryResult } from '@apollo/client/core';
import type codegen from '../typings';

/**
 * Composable to handle the Home.
 */
export function useHomeQuery() {
  /**
   * Configured corruptions.
   */
  let corruptions: Corruption[] = $shallowRef(null);

  /**
   * Determine whether query is ready.
   */
  let isQueryReady: boolean = $shallowRef(false);

  /**
   * Current active user language.
   */
  const language: string = $(inject('language'));

  /**
   * Watch the lang to reload Query.
   */
  watch($$(language), execHomeQuery);

  /**
   * Handler to execute query and parse.
   * @returns Operation execution status.
   */
  function execHomeQuery(): Promise<void> {
    return graphql
      .query({ query: HomeGql, variables: { locale: language } })
      .then(({ data }: ApolloQueryResult<codegen.Query & any>): void => {
        // Parse the all available corruptions.
        corruptions = parseCorruptionEntities(data.corruptions);
        // Determine whether Query is ready and can be used.
        isQueryReady = true;
      });
  }

  // Return functionality of composable.
  return {
    execHomeQuery,
    corruptions: cast<Ref<typeof corruptions>>($$(corruptions)),
    isQueryReady: cast<Ref<typeof isQueryReady>>($$(isQueryReady))
  };
}
