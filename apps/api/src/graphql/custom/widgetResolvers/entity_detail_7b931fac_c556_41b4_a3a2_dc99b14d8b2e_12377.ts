import { GetListingDataResults, DataListingArgs, AuthContext } from '../../../types';

// Widget Summary
// View: cohortDetails
// Widget: Cohort Details
// Value: company - Total Count
// Widget type: behavior
export const entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12377 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  // KAPI - Integration

  // In order for you to connect your backend, you can add in here your code
  // that fetch the corresponding API data.

  // You can access the token, data sources, and the current user through the 'context' param.

  // Please replace the default return statement ('not implemented') with the
  // required widget response, e.g.
  // const format = {
  //   xAxis: {
  //     type: 'datetime', // The type of the attribute, usually datetime for x axis.
  //     key: 'yourAttribute',
  //     isNumericType: true, // True or false depending on the type
  //   },
  //   yAxis: {
  //     type: 'string', // String or any other KAPI type, depending on your attribute
  //     key: 'yourAttribute',
  //     isNumericType: false, // True or false depending on the type
  //   },
  // };
  // return fetch('http://put.your.api.here/your-resource') // Fetch is available through npm package node-fetch
  //   .then((http_response) => http_response.json()) // Extracts the JSON body content from the http response.
  //   .then((res) => {
  //     return { format, res };
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return 'not implemented';
  //   });

  return 'not implemented';
};
