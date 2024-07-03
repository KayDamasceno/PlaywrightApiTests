import { request, APIRequestContext } from "@playwright/test"

export async function loginPost(body?: string){

    const serviceUrl = "https://api-desafio-qa.onrender.com/"

    const requestContext: APIRequestContext = await request.newContext();

    const requestData = body ? { data: body } : undefined;

    const response = await requestContext.post(serviceUrl+"login", {
        ...requestData,
        headers: {
            'Content-Type':'application/json'
        }
    })


    return response
}