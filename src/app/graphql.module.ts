import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache, ApolloLink } from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';

const uri = 'https://pokemon-go-data.hasura.app/v1/graphql';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext((operation, context) => {
    return {
      headers: {
        "x-hasura-admin-secret": 'tC0T9Esel1uUrksOiCF7xvSWPjnfUsdIuJMcD8NlnxmJuQtDjf4kR7PKQRyNBarp'
      }
    };
  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  }
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
