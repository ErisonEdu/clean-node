import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    } else {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
    // TypeScript isn't that smart
    /* interface HttpResponse
    * import HttpResponse
    * Function lacks ending return statement and return type does not include 'undefined'
    */
    // else if (!httpRequest.body.email) {
    //   return {
    //     statusCode: 400,
    //     body: new MissingParamError('email')
    //   }
    // }
  }
}
